export interface FeaturedProject {
	title: string
	images: {
		previewMobile: string
		previewTablet: string
		previewDesktop: string
	}
	description: string
	tags: string[]
	url?: string
	github?: string
}
