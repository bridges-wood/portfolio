import { FeaturedProject } from '@typings/FeaturedProject'
import React from 'react'

interface ComponentProps {
	project: FeaturedProject
}

const FeaturedProjectPreview = ({ project }: ComponentProps) => {
	return <p>{project.title}</p>
}

export default FeaturedProjectPreview
