/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Button } from "@theme-ui/components";
import { Link } from "./link";
import { DocsNavigationQuery } from "./__generated__/DocsNavigationQuery";
import { useToggle } from "../helpers/use-toggle";
import { NavigationIcon } from "./icons/navigation";
import { CloseIcon } from "./icons/close";
import { useResponsiveValue } from "@theme-ui/match-media";
import { Fragment } from "react";

const Nav: React.SFC = () => {
  const {
    allFile: { edges },
  } = useStaticQuery<DocsNavigationQuery>(graphql`
    query DocsNavigationQuery {
      allFile(filter: { sourceInstanceName: { eq: "strawberry-repo" } }) {
        edges {
          node {
            childMdx {
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    }
  `);

  return (
    <nav>
      {edges.map(({ node }) => (
        <Link
          href={node.childMdx.frontmatter.path}
          key={node.childMdx.frontmatter.path}
        >
          {node.childMdx.frontmatter.title}
        </Link>
      ))}
    </nav>
  );
};

export const DocsNavigation: React.SFC = () => {
  const [open, toggleOpen] = useToggle(false);

  const menuType = useResponsiveValue(["overlay", "sidebar"]);

  if (menuType == "sidebar") {
    return (
      <Box
        sx={{
          px: 3,
          py: 4,
          flex: "0 0 200px",
        }}
      >
        <Nav />
      </Box>
    );
  }

  return (
    <Fragment>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          overflowX: "scroll",
          backgroundColor: "background",
          zIndex: 1,
          p: 4,
          display: open ? "block" : "none",
        }}
      >
        <Nav />
      </Box>

      <Button
        sx={{
          position: "fixed",
          bottom: 4,
          right: 4,
          zIndex: 2,
          fill: "primary",
          backgroundColor: "muted",
          borderRadius: "100%",
          width: 70,
          height: 70,
          p: "10px",
          cursor: "pointer",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
        }}
        onClick={toggleOpen}
      >
        {open ? <CloseIcon /> : <NavigationIcon />}
      </Button>
    </Fragment>
  );
};
