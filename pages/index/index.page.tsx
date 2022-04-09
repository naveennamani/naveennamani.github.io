import React from "react";

import { TagD } from "@components/Tags";
import BlogPostHeader from "@components/BlogPostCard";

import type { ReactSEOMetaTagsProps } from "react-seo-meta-tags";

export const metaData: ReactSEOMetaTagsProps = {
  website: {
    url: __SITE__URL__,
    title: "Naveen Namani's website",
    description:
      "Welcome to Naveen Namani's website, a place where you can find articles and projects on webdesign, APIs, webscraping etc.",
    image: __SITE__URL__ + "/images/avataaar.svg",
    imageAlt: "Avatar of Naveen Namani",
    author: {
      name: "Naveen Namani",
      image: __SITE__URL__ + "/images/avataaar.svg"
    }
  }
};

export function Page({ latestBlogPosts }) {
  return (
    <>
      <div className="w-auto text-2xl md:text-xl">
        <div className="lcd_display_wrapper">
          <p>Welcome to</p>
          <p>Naveen Namani's</p>
          <p>Website</p>
        </div>
        <div className="font-special text-sm">................</div>
      </div>
      <div className="text-xl">
        I'm an electronics engineer, and a self-taught web developer and
        programmer. I started my programming journey by writing assembly code
        for microcontrollers in my diploma. My interest in programming made me
        learn C, PHP, HTML, JS, CSS etc. These are the languages and tools I use
        currently.
        <dl>
          <dd>Web development</dd>
          <dt>HTML5, JS/ES6, CSS3, node.js</dt>
          <dd>Data analysis and scripting</dd>
          <dt>Python</dt>
          <dd>Databases</dd>
          <dt>MySQL, MSSQL2019</dt>
          <dd>Application development</dd>
          <dt>VB.NET</dt>
          <dd>Firmware development</dd>
          <dt>C++</dt>
        </dl>
        Other skills I possess are web scraping, malware analysis, disassembly
        analysis, API development in python, version control using github, scrum
        management using JetBrains YouTrack.
      </div>
      <p className="text-justify text-2xl">
        This is a place where you can find randomly interesting{" "}
        <TagD text="projects" href="/projects" /> and{" "}
        <TagD text="articles" href="/blog" /> ranging from HTML, CSS, JS tips to
        building your own NFTs on Blockchains. Whether you are working on{" "}
        <TagD text="frontend" /> with <TagD text="React" />, building{" "}
        <TagD text="API" />s with <TagD text="python" />,{" "}
        <TagD text="scraping web data" href="/tag/webscraping" /> and analyzing
        the results in <TagD text="pandas" />, you can find a related article
        here. <br />
        <br />
        Here are my latest blog posts.
      </p>
      {latestBlogPosts.map(({ filesystemRoute, metaData }, index) => (
        <BlogPostHeader
          key={index}
          href={filesystemRoute}
          blogPost={metaData.blogPost}
        />
      ))}
    </>
  );
}
