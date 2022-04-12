import React from "react";

import BlogPostCard from "@components/BlogPostCard";

export { Layout } from "@layouts/DefaultLayout";

const availableTags = [
  {
    name: "Web development",
    href: "/tag/webdevelopment",
    badgeClass: "badge-outline badge-primary"
  },
  {
    name: "Frontend",
    href: "/tag/frontend",
    badgeClass: "badge-outline badge-secondary"
  },
  {
    name: "Backend",
    href: "/tag/backend",
    badgeClass: "badge-primary"
  }
];

export default function Page(pageProps) {
  const { latestBlogPosts } = pageProps;
  return (
    <div className="font-serif text-lg">
      <p>
        Welcome to my blog! Please check the following latest blog posts.
        {/* {availableTags.map(({ name, href, badgeClass }, index) => (
          <a
            key={index}
            href={href}
            className={"badge mx-1 no-underline " + badgeClass}
          >
            {name}
          </a>
        ))} */}
      </p>
      <div>
        {latestBlogPosts.map(({ filesystemRoute, metaData }, index) => {
          return (
            metaData && (
              <BlogPostCard
                key={index}
                href={filesystemRoute}
                blogPost={metaData.blogPost}
              />
            )
          );
        })}
      </div>
    </div>
  );
}
