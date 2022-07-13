import { FC } from 'react'
import { Icon, IconProps } from './index'

const Circle: FC<IconProps> = ({
	className,
	fill,
	width = 16,
	height = 16,
	size,
	...props
}) => (
	<Icon
		width={size || width}
		height={size || height}
		viewBox='0 0 16 16'
		className={className}
		{...props}
	>
		<circle cx='50%' cy='55%' r='25%' fill={fill} />
	</Icon>
)

export default Circle
