import { CSS } from '@nextui-org/react'
import { FC } from 'react'
import Tag from './Tag'

interface TagListProps {
	tags: string[]
	count?: number
	css?: CSS
	tagWrapper?: React.ElementType
}

const TagList: FC<TagListProps> = ({ tags, count = 10, tagWrapper, css }) => {
	const Wrapper = tagWrapper
	return (
		<>
			{tags.slice(0, count).map((tag, idx) => (
				<Wrapper key={idx}>
					<Tag css={css}>{tag}</Tag>
				</Wrapper>
			))}
		</>
	)
}

export default TagList
