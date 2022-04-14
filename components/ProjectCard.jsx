import React from "react";

export function ProjectCard({ name, repo, description, tags, links, image }) {
  return (
    <article className="m-4 mx-auto border-2 border-primary shadow-md shadow-primary">
      {image && (
        <a href={repo} target="_blank">
          <img
            src={image}
            className="m-0 h-48 object-cover p-0 md:h-auto md:w-full"
            alt={repo}
          />
        </a>
      )}
      <header className="p-5">
        <h2 className="mb-2 text-3xl font-bold text-base-content">
          <a href={repo} className="hover:underline" target="_blank">
            {name}
          </a>
        </h2>
        <p className="mb-2 text-xl">{description}</p>
        <div className="flex flex-wrap font-bold">
          {links.map(({ text, url }, index) => (
            <a
              href={url}
              key={index}
              className="link link-primary mx-2"
              target="_blank"
            >
              {text}
            </a>
          ))}
        </div>
        {/* <div>
          {tags.map((tag, index) => (
            <span className="tag-chip" key={index}>
              {tag}
            </span>
          ))}
        </div> */}
      </header>
    </article>
  );
}

export default ProjectCard;
