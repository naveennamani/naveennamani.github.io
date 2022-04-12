import React from "react";

export function LCDDisplay({ lines }: { lines: Array<String> }) {
  const maxLength = lines.reduce(
    (prevLen, line) => Math.max(prevLen, line.length),
    0
  );
  return (
    <div className="w-auto text-sm md:text-2xl">
      <div className="lcd_display_wrapper">
        {lines.map((line, index) => (
          <p key={index}>
            {line + new Array(maxLength - line.length).fill("\u00a0").join("")}
          </p>
        ))}
      </div>
      <div className="font-special text-[0.8em]">................</div>
    </div>
  );
}

export default LCDDisplay;
