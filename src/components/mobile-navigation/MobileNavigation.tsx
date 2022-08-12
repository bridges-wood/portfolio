import Sidebar from '@layouts/Sidebar'
import { Route } from '@lib/page'
import { usePortal } from '@nextui-org/react'
import { FC } from 'react'
import { createPortal } from 'react-dom'
import MobileNavigationContainer from './MobileNavigationContainer'
import MobileNavigationWrapper from './MobileNavigationWrapper'

interface MobileNavigationProps {
	opened: boolean
	hasNotify?: boolean
	detached?: boolean
	routes?: Route[]
	onClose?: () => void
}

const MobileNavigation: FC<MobileNavigationProps> = ({
	opened = false,
	detached = false,
	hasNotify,
	routes,
	onClose,
}) => {
	const portal = usePortal('mobile-navigation')

	const handlePostClick = () => {
		if (onClose) {
			onClose()
		}
	}

	if (portal) {
		return createPortal(
			<MobileNavigationContainer
				opened={opened}
				detached={detached}
				hasNotify={hasNotify}
			>
				<MobileNavigationWrapper>
					<ul
						className='mobile-navigation__list'
						style={{
							margin: 0,
							padding: '16px 0 16px 16px',
						}}
					>
						<li>
							<Sidebar routes={routes} onPostClick={handlePostClick} />
						</li>
					</ul>
				</MobileNavigationWrapper>
			</MobileNavigationContainer>,
			portal
		)
	} else {
		return null
	}
}

export default MobileNavigation
