import { slugify } from '@lib/posts'
import type { Element, RootContent, Text } from 'hast'
import { heading } from 'hast-util-heading'
import { h } from 'hastscript'

const wrap = (
	depth: number,
	children: RootContent[],
	slug?: string
): Element => {
	return h(
		'section',
		{
			'data-depth': depth,
			id: slug ? slug : undefined,
		},
		children
	)
}

const parseTagDepth = (str: string): number => {
	return parseInt(str[1], 10)
}

const wrapperDepth = (div: RootContent): number => {
	if (div.type === 'element') {
		const divDepth = Number(div.properties.dataDepth)
		return divDepth
	} else {
		throw new Error('not an element')
	}
}

const sectionWrapper = () => {
	return function transformer(tree: Element, _: any) {
		const children = tree.children

		const rootWrapper = wrap(0, [])
		let wrapperStack: Element[] = [rootWrapper]

		const currentWrapper = () => wrapperStack[wrapperStack.length - 1]
		const currentWrapperDepth = () => wrapperDepth(currentWrapper())

		for (let element of children) {
			if (element.type !== 'element') continue
			if (heading(element)) {
				const depth = parseTagDepth(element.tagName)

				// Get first text child to extract heading text
				const text = element.children.find(
					(child) => child.type === 'text'
				) as Text
				const headingText = text.value
				const slug = slugify(headingText)

				if (depth > currentWrapperDepth()) {
					const childWrapper = wrap(depth, [element], slug)
					currentWrapper().children.push(childWrapper)
					wrapperStack.push(childWrapper)
				}

				// Delimiting heading
				else if (depth <= currentWrapperDepth()) {
					while (depth <= currentWrapperDepth()) {
						wrapperStack.pop()
					}
					const siblingWrapper = wrap(depth, [element], slug)
					currentWrapper().children.push(siblingWrapper)
					wrapperStack.push(siblingWrapper)
				}
			} else {
				currentWrapper().children.push(element)
			}
		}
		return rootWrapper
	}
}

export default sectionWrapper
