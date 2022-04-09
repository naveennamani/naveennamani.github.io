import React from "react";

export function TagD({ text, href }) {
  if (href === undefined) {
    href = "/tag/" + text.toLowerCase();
  }
  return (
    <a href={href} className="link link-primary">
      {text}
    </a>
  );
}

export function Tag({ tag }) {
  return (
    <a href={"/tag/" + tag} className="tag-chip">
      {"#" + tag}
    </a>
  );
}
