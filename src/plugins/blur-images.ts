import type { Element, Node } from 'hast'
import imageSize from 'image-size'
import { ISizeCalculationResult } from 'image-size/dist/types/interface'
import path from 'path'
import { getPlaiceholder } from 'plaiceholder'
import { visit } from 'unist-util-visit'
import { promisify } from 'util'

/**
 * @see https://nikolovlazar.com/blog/generating-blur-for-dynamic-images-nextjs#generate-blurdataurl
 */
const sizeOf = promisify(imageSize)

interface ImageNode extends Element {
	tagName: 'img'
	properties: {
		src: string
		height?: number
		width?: number
		blurDataURL?: string
		placeholder?: 'blur' | 'empty'
	}
}

const isImageNode = (node: Node): node is ImageNode => {
	const img = node as ImageNode
	return (
		img.type === 'element' &&
		img.tagName === 'img' &&
		img.properties &&
		typeof img.properties.src === 'string'
	)
}

const addProps = async (node: ImageNode) => {
	let res: ISizeCalculationResult
	let blur64: string

	const isExternal = node.properties.src.startsWith('http')

	if (!isExternal) {
		res = await sizeOf(path.join(process.cwd(), 'public', node.properties.src))
		blur64 = (await getPlaiceholder(node.properties.src)).base64
	} else {
		const imageRes = await fetch(node.properties.src)
		const arrayBuffer = await imageRes.arrayBuffer()
		const buffer = Buffer.from(arrayBuffer)

		res = imageSize(buffer)
		blur64 = (await getPlaiceholder(node.properties.src)).base64
	}

	if (!res) throw Error(`Invalid image with src "${node.properties.src}"`)

	node.properties = {
		...node.properties,
		height: res.height,
		width: res.width,
		blurDataURL: blur64,
		placeholder: 'blur',
	}
}

const injectMetadata = () => {
	return async function transformer(tree: Node): Promise<Node> {
		const images: ImageNode[] = []

		visit(tree, 'element', (node: Node) => {
			if (isImageNode(node)) {
				images.push(node)
			}
		})

		for (const image of images) {
			await addProps(image)
		}

		return tree
	}
}

export default injectMetadata
