import { NativeAttributes } from '@typings'
import { FC, PropsWithChildren } from 'react'

export interface Props {
	title: string
}

export type HeadingProps = Props & NativeAttributes<Props>

const Heading: FC<PropsWithChildren<HeadingProps>> = ({ title, children }) => (
	<div className='heading'>
		<h4
			style={{
				fontSize: '1.2rem',
				fontWeight: 600,
			}}
		>
			{title}
		</h4>
		<div>{children}</div>
	</div>
)

export default Heading
