import { FeaturedProject } from '@typings/FeaturedProject'
import React from 'react'

interface ComponentProps {
	project: FeaturedProject
}

const FeaturedProjectPreview = ({ project }: ComponentProps) => {
	return (
		<div className='featured-project'>
			<h3>{project.title}</h3>

			<picture className='featured-project-image-wrapper'>
				<source
					media='(max-width: 600px)'
					srcSet={project.images.previewMobile}
				/>
				<source
					media='(max-width: 800px)'
					srcSet={project.images.previewTablet}
				/>
				<source
					media='(min-width: 800px)'
					srcSet={project.images.previewDesktop}
				/>
				<img src={project.images.previewDesktop} />
			</picture>
			<br />
			<span>
				When I approached Harry's Hot Tubs at the start of 2021, I thought that
				the project would just be a simple booking system with a Stripe
				integration. However, after the project reached that state, the goals of
				the client expanded and now, in its current state, the site has accounts
				for delivery drivers and managers to keep track of bookings across the
				nation as well as robust tools to keep each member of the organisation
				informed with up to date information on each hot tub and order.
			</span>
		</div>
	)
}

export default FeaturedProjectPreview
