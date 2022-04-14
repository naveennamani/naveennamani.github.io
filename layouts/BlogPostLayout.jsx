import React from "react";

import BlogPostCard from "@components/BlogPostCard";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import usePageContext from "@hooks/usePageContext";
import Time from "@components/Time";
import { Tag } from "@components/Tags";

function ArticleHeader() {
  const {
    pageExports: {
      metaData: {
        blogPost: {
          title,
          description,
          image,
          imageAlt,
          datePublished,
          dateModified,
          tags,
          author
        }
      }
    }
  } = usePageContext();
  return (
    <>
      <header>
        <h1 id="top-heading">{title}</h1>
        <p>{description}</p>
        <p className="font-bold">
          <Time dt={datePublished} />
          {+datePublished != +dateModified && (
            <em>
              {" "}
              Last modified: <Time dt={dateModified} />
            </em>
          )}
        </p>
        <p>
          {tags.map((tag, index) => (
            <Tag tag={tag} key={index} />
          ))}
        </p>
      </header>
      <figure>
        <img
          src={image}
          width="1200"
          height="630"
          alt={imageAlt}
          className="bg-primary/20"
        />
      </figure>
    </>
  );
}

export function BlogPostLayout({ children }) {
  const { url, relatedPostsData } = usePageContext();
  return (
    <>
      <NavBar currentURL={url} />
      <main className="wrapper mb-32 min-h-screen w-full bg-base-100">
        <div
          id="content"
          className="prose mx-auto max-w-screen-md p-4 font-sans prose-p:text-[17px] md:px-0"
        >
          <article>
            <ArticleHeader />
            {children}
          </article>
          {relatedPostsData.length > 0 && (
            <>
              <hr className="border-4" />
              <aside>
                <h2>Related articles:</h2>
                {relatedPostsData.map(
                  ({ filesystemRoute, metaData: { blogPost } }, index) => (
                    <BlogPostCard
                      key={index}
                      blogPost={blogPost}
                      href={filesystemRoute}
                    />
                  )
                )}
              </aside>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
