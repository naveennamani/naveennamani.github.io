export { render, passToClient } from "@renderer/_default.page.server";

import { getAllBlogPosts } from "@utils/getLatestBlogPosts";

export async function onBeforeRender(pageContext) {
  const {
    pageExports: {
      metaData: { relatedArticles = [] }
    }
  } = pageContext;
  let relatedPostsData = [];
  if (relatedArticles) {
    const allBlogPosts = await getAllBlogPosts(pageContext);
    relatedPostsData = relatedArticles.map(
      (articleURL) =>
        allBlogPosts.filter(
          ({ filesystemRoute }) => filesystemRoute == articleURL
        )[0]
    );
  }
  return {
    pageContext: {
      layoutName: "blog",
      relatedPostsData
    }
  };
}
