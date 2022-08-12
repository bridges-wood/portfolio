import { FC } from 'react'
import { Icon, IconProps } from './index'

const LinkExternal: FC<IconProps> = ({
	className,
	fill = '#000',
	width = 24,
	height = 24,
	size,
	...props
}) => (
	<Icon
		width={size || width}
		height={size || height}
		viewBox='0 0 24 24'
		{...props}
	>
		<path fill={fill} d='m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z' />
		<path
			fill={fill}
			d='M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z'
		/>
	</Icon>
)

export default LinkExternal
