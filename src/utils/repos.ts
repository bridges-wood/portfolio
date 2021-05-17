import { Octokit } from '@octokit/core'
import { GithubProject, Repository } from '@typings/api/Projects'
import { JSDOM } from 'jsdom'

const octokit = new Octokit({ auth: process.env.GH_API_KEY })

const fetchProjects = async (): Promise<GithubProject[]> => {
	const { data: repositories } = await octokit.request(
		'GET /users/{username}/repos',
		{
			username: process.env.GH_USER,
		}
	)
	return await Promise.all(repositories.map(parseRepo))
}

const parseRepo = async (repo: Repository): Promise<GithubProject> => {
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
		return null
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

export default fetchProjects
