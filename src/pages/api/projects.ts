import { Octokit } from '@octokit/core'
import { Project, ProjectsResponse, Repository } from '@typings/api/Projects'
import { JSDOM } from 'jsdom'
import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

const octokit = new Octokit({ auth: process.env.GH_API_KEY })

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'GET':
			return await get(req, res)
	}
}

const get = async (
	req: NextApiRequest,
	res: NextApiResponse<ProjectsResponse>
) => {
	try {
		const projects = await fetchProjects()
		res.status(200).json({ projects })
	} catch (e) {
		console.log('e', e)
		res.status(500).json({ error: e.message })
	}
}

const fetchProjects = async (): Promise<Project[]> => {
	const { data: repositories } = await octokit.request(
		'GET /users/{username}/repos',
		{
			username: process.env.GH_USER,
		}
	)
	return await Promise.all(repositories.map(parseRepo))
}

const parseRepo = async (repo: Repository): Promise<Project> => {
	return {
		id: repo.id,
		name: repo.name,
		description: repo.description,
		url: repo.html_url,
		size: repo.size,
		mainLanguage: repo.language,
		README: await getREADME(repo),
		languages: await getLanguages(repo),
		metadata: { repoImage: await getMetadata(repo) },
	}
}

const getREADME = async ({
	owner: { login: owner },
	name: repo,
}: Repository): Promise<string> => {
	try {
		const { data: readme } = await octokit.request(
			'GET /repos/{owner}/{repo}/readme',
			{
				owner,
				repo,
			}
		)
		const buffer = Buffer.from(
			readme.content,
			readme.encoding as BufferEncoding
		)
		return buffer.toString()
	} catch (e) {
		console.error(e.message)
		return undefined
	}
}

const getLanguages = async ({
	owner: { login: owner },
	name: repo,
}: Repository) => {
	const { data: languages } = await octokit.request(
		'GET /repos/{owner}/{repo}/languages',
		{
			owner,
			repo,
		}
	)

	return languages
}

const getMetadata = async ({ html_url }: Repository) => {
	const res = await fetch(html_url)
	const html = await res.text()
	const doc = new JSDOM(html).window.document
	const metadata = doc.getElementsByTagName('meta')
	for (let i = 0; i < metadata.length; i++) {
		const metaElement = metadata[i]
		if (metaElement.name === 'twitter:image:src') return metaElement.content
	}
	return undefined
}

export default handler
