import { addDefaultMeta } from "./addDefaultMeta";

import type { PageContextServer, PageContextClient } from "#types/pageContext";

export async function getAllBlogPosts(pageContext: PageContextServer): Promise<
  {
    filesystemRoute: string;
    metaData: PageContextClient["pageExports"]["metaData"];
  }[]
> {
  const { _pageRoutes, _allPageFiles } = pageContext;
  let filteredBlogRoutes = _pageRoutes.filter(({ filesystemRoute }) =>
    filesystemRoute.startsWith("/blog/")
  );
  let routeToPageFiles = filteredBlogRoutes.map(({ pageId }) =>
    _allPageFiles[".page"]
      .filter(({ filePath }) => filePath.startsWith(pageId))[0]
      .loadFile()
  );
  let pageExportsAll: PageContextClient["pageExports"][] = await Promise.all(
    routeToPageFiles
  );
  return filteredBlogRoutes.map(({ filesystemRoute }, index) => {
    return {
      filesystemRoute,
      metaData: addDefaultMeta(pageExportsAll[index].metaData)
    };
  });
}

export async function getLatestBlogPosts(pageContext: PageContextServer) {
  const blogPosts = await getAllBlogPosts(pageContext);
  return blogPosts.sort((post1, post2) => {
    console.log(
      +post1.metaData.blogPost.datePublished,
      +post2.metaData.blogPost.datePublished
    );
    return (
      +post2.metaData.blogPost.datePublished -
      +post1.metaData.blogPost.datePublished
    );
  });
}

export default getLatestBlogPosts;
