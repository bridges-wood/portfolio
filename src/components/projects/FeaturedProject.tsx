import { Github, LinkExternal } from "@components/icons";
import { useBreakpoint } from "@hooks";
import { Card, Col, Image, Row, Text, useTheme } from "@nextui-org/react";
import type { FeaturedProject as FeatureProjectData } from "@typings/FeaturedProject";
import Link from "next/link";
import { FC } from "react";

interface FeaturedProjectProps {
  project: FeatureProjectData;
}

const FeaturedProject: FC<FeaturedProjectProps> = ({
  project: {
    title,
    description,
    images: { previewDesktop },
    url,
    github,
    tags,
  },
}) => {
  const isMd = useBreakpoint("md");
  const { theme } = useTheme();

  return (
    <Row
      className="preview"
      css={{
        "@md": {
          flexDirection: "row",
        },
        width: "100%",
        height: 384,
      }}
    >
      <Image
        src={previewDesktop}
        alt={title}
        className="preview__image"
        containerCss={{
          "@md": {
            m: "0",
            w: "50%",
          },
        }}
        css={{
          filter: `opacity(${isMd ? 0.25 : 1})`,
          aspectRatio: "16/9",
        }}
        height={384}
      />
      <Col
        className="preview__content"
        css={{
          h: "100%",
          d: "flex",
          fd: "column",
          justifyContent: "center",
          "@md": {
            p: "$5",
            width: "50%",
          },
          "@mdMax": {
            position: "absolute",
            right: "0",
            zIndex: 1,
            p: 40,
          },
          "@smMax": {
            p: 5,
          },
        }}
      >
        <Text
          small
          className="preview__eyebrow"
          css={{
            fontFamily: '"Roboto Mono", monospace',
            textGradient: "$textGradient",
            whiteSpace: "nowrap",
            width: "min-content",
            mt: "40px",
          }}
        >
          Featured Project
        </Text>
        <Text
          h3
          className="preview__title"
          css={{
            mt: 0,
          }}
        >
          {title}
        </Text>
        <Card
          className="preview__description-card"
          css={{
            "@md": {
              width: "80ch",
            },
            zIndex: 2,
            maxWidth: "110%",
            "@mdMax": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Card.Body
            css={{
              p: "25px 0",
              "@md": { p: "25px" },
            }}
          >
            <Text
              className="preview__description"
              css={{
                w: "100%",
                color: "$accents8",
              }}
            >
              {description}
            </Text>
          </Card.Body>
        </Card>
        <Row
          className="preview__tags"
          css={{
            ":first-child": {
              pl: "0",
            },
            ":last-child": {
              pr: "0",
            },
          }}
        >
          {tags.map((tag, idx) => (
            <Text
              key={idx}
              css={{
                pl: "$5",
                pr: "$5",
                fontFamily: '"Roboto Mono", monospace',
                fontSize: "$sm",
                color: "$accents8",
              }}
            >
              {tag}
            </Text>
          ))}
        </Row>
        <Row
          className="preview__links"
          css={{
            mt: "auto",
            "*": {
              pl: "$1",
              pr: "$1",
            },
            ":first-child": {
              pl: "0",
            },
            ":last-child": {
              pr: "0",
            },
          }}
        >
          <Link href={github} passHref>

            <Github fill={theme.colors.accents9.value} />

          </Link>
          <Link href={url} passHref>

            <LinkExternal fill={theme.colors.accents9.value} />

          </Link>
        </Row>
      </Col>
    </Row>
  );
};

export default FeaturedProject;
