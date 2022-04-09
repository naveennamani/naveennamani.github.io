import React from "react";

export default function Page({ tagName }) {
  return (
    <div>
      Articles related to <a>{tagName}</a> are loading.
    </div>
  );
}
