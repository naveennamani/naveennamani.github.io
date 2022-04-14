import React from "react";

import { Tag } from "./Tags";
import { Time } from "./Time";

import type { BlogPostProps } from "react-seo-meta-tags";

export function BlogPostCard({
  blogPost,
  href
}: {
  blogPost: BlogPostProps;
  url: string;
}) {
  const {
    title,
    description,
    datePublished,
    image,
    url,
    tags,
    author: { name }
  } = blogPost;
  return (
    <div
      className="group mb-2 bg-cover"
      style={{ backgroundImage: "url(" + image + ")" }}
    >
      <article className="bg-primary/80 p-5 text-primary-content shadow-md shadow-primary drop-shadow-2xl">
        <a href={href} className="text-primary-content no-underline">
          <h1 className="text-xl text-primary-content">{title}</h1>
          <Time dt={datePublished} />
          <p>{description}</p>
        </a>
        <p>
          {tags.map((tag, index) => (
            <Tag tag={tag} key={index} />
          ))}
        </p>
      </article>
    </div>
  );
}

export default BlogPostCard;
