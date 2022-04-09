import getLatestBlogPosts from "@utils/getLatestBlogPosts";

export const skipOnBeforeRenderDefaultHook = true;

export async function onBeforeRender(pageContext) {
  const latestBlogPosts = await getLatestBlogPosts(pageContext);
  return {
    pageContext: {
      pageProps: {
        latestBlogPosts: latestBlogPosts
      }
    }
  };
}
