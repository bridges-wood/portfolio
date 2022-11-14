import { Tag } from '@components/tags/index'
import { useBreakpoint } from '@hooks'
import { parseDate } from '@lib/date'
import { readingTime } from '@lib/posts'
import { Col, Grid, Image, Row, Text, User } from '@nextui-org/react'
import { isLocalPost, PostWithWordCount } from '@typings/Post'
import Link from 'next/link'
import { FC } from 'react'

const DEFAULT_IMAGE = 'https://picsum.photos/id/1/1920/1080'
const DEFAULT_AUTHOR_IMAGE =
	'https://avatars.githubusercontent.com/u/45072525?v=4'

type BlogpostPreviewProps = PostWithWordCount & {
	showTags?: boolean
}

const BlogpostPreview: FC<BlogpostPreviewProps> = ({
	showTags = true,
	...post
}) => {
	const {
		title,
		subtitle,
		coverImage = DEFAULT_IMAGE,
		date,
		author,
		tags,
		wordCount,
	} = post
	const href = isLocalPost(post) ? `/posts/${post.slug}` : post.url
	const isSm = useBreakpoint('sm')

	return (
        <Row
			className='blogpost__preview'
			css={{
				w: '100%',
				'@xsMax': {
					h: '100px',
				},
				'@sm': {
					h: '150px',
				},
			}}
		>
			<Col
				css={{
					display: 'flex',
					flexDirection: 'column',
					mr: '$9',
					'@xsMax': {
						mr: '20px',
					},
					'@smMax': {
						h: '100px',
					},
				}}
			>
				<Row>
					<User
						name={author}
						src={author === 'Max Wood' ? DEFAULT_AUTHOR_IMAGE : undefined}
						size='xs'
						css={{
							p: '0 0 $2 0',
							'@smMax': {
								'& .nextui-user-name': {
									fontSize: '13px',
								},
							},
						}}
					/>
				</Row>
				<Link
                    href={href}
                    passHref
                    style={{
                        color: 'inherit',
                    }}>

                    <Text
                        h2
                        css={{
                            display: '-webkit-box',
                            '-webkit-box-orient': 'vertical',
                            textOverflow: 'ellipsis',
                            textDecorationThickness: 'auto',
                            overflow: 'hidden',
                            fontWeight: '$bold',
                            fontSize: '$xl2',
                            '@smMax': {
                                fontSize: '$md',
                                maxH: '40px',
                                lh: '20px',
                                '-webkit-line-clamp': '2',
                            },
                        }}
                    >
                        {title}
                    </Text>
                    {subtitle && (
                        <Text
                            h3
                            css={{
                                display: '-webkit-box',
                                '-webkit-box-orient': 'vertical',
                                textOverflow: 'ellipsis',
                                textDecorationThickness: 'auto',
                                overflow: 'hidden',
                                fontSize: '$md',
                                color: '$accents6',
                                pt: '$2',
                                '@xsMax': {
                                    display: 'none',
                                },
                                '@xs': {
                                    '-webkit-line-clamp': '1',
                                },
                            }}
                        >
                            {subtitle}
                        </Text>
                    )}

                </Link>
				<Row
					css={{
						mt: 'auto',
					}}
				>
					<Grid.Container
						css={{
							ai: 'center',

							'*': {
								ml: '$2',
								mr: '$2',
								fontWeight: '$light',
								'@smMax': {
									h: '22px',
									boxSizing: 'border-box',
								},
							},
							':first-child': {
								ml: 0,
							},
							':last-child': {
								mr: 0,
							},
						}}
					>
						<Grid>
							<Text
								span
								css={{
									color: '$accents6',
									'@smMax': {
										fontSize: '$xs',
									},
								}}
								suppressHydrationWarning
							>
								{parseDate(date).toLocaleDateString()}
							</Text>
						</Grid>
						<Grid>
							<Text
								span
								css={{
									color: '$accents6',
									'@smMax': {
										fontSize: '$xs',
									},
								}}
							>
								|
							</Text>
						</Grid>
						<Grid>
							<Text
								span
								css={{
									color: '$accents6',
									'@smMax': {
										fontSize: '$xs',
									},
								}}
							>
								{readingTime(wordCount)}
							</Text>
						</Grid>
						{tags.length > 0 && showTags ? (
							<>
								<Grid
									css={{
										'@xsMax': {
											display: 'none',
										},
									}}
								>
									<Text
										span
										css={{
											color: '$accents6',
											'@smMax': {
												fontSize: '$xs',
											},
										}}
									>
										|
									</Text>
								</Grid>
								<Grid
									css={{
										'@xsMax': {
											display: 'none',
										},
									}}
								>
									<Tag
										css={{
											textTransform: 'none',
											display: 'inline',
											boxSizing: 'border-box',
											'@smMax': {
												fontSize: '$xs',
												lineHeight: '$xs',
												h: '18px',
												p: '2px 8px 2px 8px',
											},
										}}
									>
										{tags[0]}
									</Tag>
								</Grid>
							</>
						) : null}
					</Grid.Container>
				</Row>
			</Col>
			<Col
				css={{
					w: '200px',
					h: '200px',
					'@xsMax': {
						w: '100px',
						h: '100px',
					},
					'@smMax': {
						w: '150px',
						h: '100px',
					},
				}}
			>
				<Row>
					<Link href={href} passHref>

                        <Image
                            src={coverImage}
                            alt='Placeholder'
                            objectFit={isSm ? 'cover' : 'contain'}
                            containerCss={{
                                '@xsMax': {
                                    w: '100px',
                                    h: '100px',
                                },
                                '@sm': {
                                    w: '150px',
                                    h: '100px',
                                },
                            }}
                        />

                    </Link>
				</Row>
			</Col>
		</Row>
    );
}

export default BlogpostPreview
