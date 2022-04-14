import React from "react";

import { TagD } from "@components/Tags";
import BlogPostHeader from "@components/BlogPostCard";
import LCDDisplay from "@components/LCDDisplay";

import type { ReactSEOMetaTagsProps } from "react-seo-meta-tags";
import { GithubIcon } from "@components/Icons";

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
  const preContent = `<code class="hljs language-python"><span class="hljs-keyword">for</span> skill <span class="hljs-keyword">in</span> skills:
  <span class="hljs-built_in">print</span>(skill)
</code>`;
  return (
    <>
      <LCDDisplay lines={["Welcome to", "Naveen Namani's", "Website"]} />
      <div className="text-md text-center font-bold md:text-2xl">
        <p>Hi! this is Naveen Namani</p>
        <p className="mx-auto h-20 w-max rounded-lg border-2 border-black py-5 before:relative before:-left-2 before:h-10 before:border-4 before:border-black">
          <span className="font-mono">(+)</span> An{" "}
          <u className="underline decoration-red-600 decoration-wavy">
            electronics engineer
          </u>{" "}
          <span className="font-mono">(-)</span>
        </p>
        <p>
          <mark
            className="bg-primary px-1 text-primary-content"
            title='console.log("Hello world!")'
          >
            self-taught
          </mark>{" "}
          <span className="bg-black font-mono font-semibold text-white">
            {" >"} web developer
          </span>
        </p>
        <p className="bg-gray-800 font-mono text-white">
          programmer <span className="text-[#f97583]">=</span>{" "}
          <span className="text-[#79b8ff]">True</span>
        </p>
        <details>
          <summary>
            <GithubIcon />
            Open source lover
          </summary>
          <p>git commit -m "LOL"</p>
        </details>
      </div>
      <div className="text-md md:text-xl">
        <pre dangerouslySetInnerHTML={{ __html: preContent }}></pre>
        <pre className="">
          <code className="hljs">
            {"<"}html5{"/>"}, CSS3, (JS) ={">"} ES6{"\n"}
            {"<"}React.JSX className="tailwindcss" {"/>"} {"\n"}
            node.js{"\n"}
            "py""thon" # not an error{"\n"}
            VB.NET, VBScript, MySQL, MSSQL
          </code>
        </pre>
        <details>
          <summary>Other skills</summary>
          <pre className="">
            <code className="hljs">
              Webscraping{"\n"}
              Malware analysis (my M.Tech project){"\n"}
              disassembly analysis{"\n"}
              API development in python{"\n"}
              Building telegram bots{"\n"}
            </code>
          </pre>
        </details>
      </div>
      <hr className="border-2" />
      <div className="text-md mx-auto block w-40 bg-primary p-5 text-center align-middle font-semibold text-primary-content md:text-xl">
        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">I can design frontend</div>
          <div className="swap-on">And I'm good at backend too</div>
          {">"}
        </label>
      </div>
      <p className="text-center text-lg font-semibold">
        I also do competitive programming (some times)
      </p>
      <hr className="border-2" />
      <p className="text-md text-justify md:text-2xl">
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
