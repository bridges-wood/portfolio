export interface FeaturedProject {
	title: string
	images: {
		previewMobile: string
		previewTablet: string
		previewDesktop: string
	}
	description: string
	url?: string
}
