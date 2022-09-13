// eslint-disable no-alert
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	images: {
		domains: ['images.unsplash.com'],
	},
	i18n: {
		locales: ['en-GB'],
		defaultLocale: 'en-GB',
	},
	reactStrictMode: true,
}

export default nextConfig
