import repos from '@json/repos'
import { Octokit } from '@octokit/core'
import { GithubProject, Repository } from '@typings/api/Projects'
import { JSDOM } from 'jsdom'

const octokit = new Octokit({ auth: process.env.GH_API_KEY })

const fetchProjects = async (): Promise<GithubProject[]> => {
	const { data: repositories } = await octokit.request('GET /user/repos', {
		visibility: 'all',
		sort: 'updated',
	})
	const filtered = filterRepositories(repositories)
	return await Promise.all(filtered.map(parseRepo))
}

const filterRepositories = (repositories: any[]) => {
	const allowedIDs = repos.map((repo) => repo.id)
	return repositories.filter((repo) => allowedIDs.includes(repo.id))
}

const parseRepo = async (repo: Repository): Promise<GithubProject> => {
	return {
		id: repo.id,
		name: repo.name,
		private: repo.private,
		description: repo.description,
		url: repo.html_url,
		website_url: repo.homepage,
		size: repo.size,
		mainLanguage: repo.language,
		README: await getREADME(repo),
		languages: await getLanguages(repo),
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

/**
 * Extracts the Twitter preview image for a GitHub repo.
 * @param Repository the repository to have its metadata extracted.
 * @returns The Twitter preview image for the repository, if it exists. Undefined otherwise.
 * @deprecated
 */
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
