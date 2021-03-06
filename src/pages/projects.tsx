import FeaturedProjectPreview from '@components/FeaturedProjectPreview'
import Project from '@components/Project'
import useWindowDimensions from '@hooks/useWindowDimensions'
import featuredProjects from '@json/featuredProjects'
import { GithubProject } from '@typings/api/Projects'
import fetchProjects from '@utils/repos'
import { GetStaticProps } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import Slider, { Settings as SliderProps } from 'react-slick'

interface PageProps {
	projects: GithubProject[]
	featured: any[]
}

// TODO add buttons in vertical orientation.

const Projects = ({ projects, featured }: PageProps) => {
	const { width } = useWindowDimensions()
	const [sliderProps, setSliderProps] = useState<SliderProps>({})
	const sliderRef = useRef<Slider>()

	useEffect(() => {
		const commonProps: Partial<SliderProps> = {
			infinite: true,
			speed: 800,
			autoplay: true,
			autoplaySpeed: 5000,
			onSwipe: () => {
				sliderRef.current.slickPause()
			},
		}
		if (width > 800) {
			setSliderProps({
				...commonProps,
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				vertical: true,
				verticalSwiping: true,
			})
		} else {
			setSliderProps({
				...commonProps,
			})
		}
	}, [width])

	return (
		<div className='outer'>
			<h1>Projects</h1>
			<p>
				A sample of some of the projects that I've worked on for personal
				projects, assignments and on freelance.
			</p>
			<div className='projects' id='container'>
				{featured.map((project) => (
					<FeaturedProjectPreview key={project.title} project={project} />
				))}
				<hr />
				<Slider {...sliderProps} ref={sliderRef}>
					{projects.map((project) => (
						<Project key={project.id} project={project} />
					))}
				</Slider>
			</div>
		</div>
	)
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const projects = await fetchProjects()
	return {
		props: { projects, featured: featuredProjects },
	}
}

export default Projects
