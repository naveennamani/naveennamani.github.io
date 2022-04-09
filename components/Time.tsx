import React from "react";

export default function Time({ dt }: { dt: Date }) {
  return (
    <time dateTime={dt.toJSON()} itemProp="datePublished">
      {dt.toLocaleString("IST", {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric"
      })}
    </time>
  );
}

export { Time };
