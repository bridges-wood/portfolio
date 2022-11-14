import { Badge, BadgeProps } from '@components/badge'
import { tagToSlug } from '@utils/tags'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

export interface TagProps extends BadgeProps {}

const Tag: FC<PropsWithChildren<TagProps>> = ({ children: tag, ...props }) => {
	if (typeof tag !== 'string') {
		throw new Error('Tag expects a string child')
	}

	return (
        (<Link
			href={{
				pathname: '/tags/[slug]',
				query: {
					slug: tagToSlug(tag),
				},
			}}
			passHref
		>

            <Badge {...props}>{tag}</Badge>

        </Link>)
    );
}

export default Tag
