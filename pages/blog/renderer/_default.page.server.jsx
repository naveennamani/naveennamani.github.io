export { render, passToClient } from "@renderer/_default.page.server";

export function onBeforeRender(pageContext) {
  return {
    pageContext: {
      layoutName: "blog"
    }
  };
}
