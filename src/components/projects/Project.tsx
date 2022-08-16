import { Folder, Github, LinkExternal } from "@components/icons";
import LanguageBar from "@components/LanguageBar";
import { Card, Row, Text, useTheme } from "@nextui-org/react";
import type { GithubProject } from "@typings/api/Projects";
import Link from "next/link";
import { FC } from "react";

interface ProjectProps {
  project: GithubProject;
}

const Project: FC<ProjectProps> = ({ project }) => {
  const { theme } = useTheme();

  return (
    <Card
      isHoverable
      css={{
        minHeight: "260px",
      }}
    >
      <Card.Header>
        <Row
          css={{
            alignItems: "center",

            "*": {
              pl: "$1",
              pr: "$1",
            },
            ":first-child": {
              mr: "auto",
              pl: "0",
            },
            ":last-child": {
              pr: "0",
            },
          }}
        >
          <Folder size={48} fill={theme.colors.primary.value} />
          <Link href={project.url} passHref>
            <a>
              <Github fill={theme.colors.accents9.value} />
            </a>
          </Link>
          {project.website_url ? (
            <Link href={project.website_url} passHref>
              <a>
                <LinkExternal fill={theme.colors.accents9.value} />
              </a>
            </Link>
          ) : null}
        </Row>
      </Card.Header>
      <Card.Body
        css={{
          pt: 0,
        }}
      >
        <Text h3>{project.name}</Text>
        <Text span>{project.description}</Text>

        <LanguageBar
          languages={project.languages}
          css={{
            mt: "auto",
          }}
        />
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
          {Object.keys(project.languages)
            .splice(0, 3)
            .map((tag, idx) => (
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
      </Card.Body>
    </Card>
  );
};

export default Project;
