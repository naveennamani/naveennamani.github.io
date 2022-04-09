import { MDXProvider } from "@mdx-js/react";

export default function MDXComponentsProvider({ children }) {
  return <MDXProvider>{children}</MDXProvider>;
}

export { MDXComponentsProvider };
