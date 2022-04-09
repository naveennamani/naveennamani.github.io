import React from "react";

import { GithubIcon, TelegramIcon } from "./Icons";

export function Footer() {
  return (
    <div className="text-base-300-content fixed bottom-0 -z-10 flex h-32 w-full flex-col items-center justify-center bg-base-300 p-5">
      <p className="text-center text-xl font-bold">
        &copy; Naveen Namani | 2022
      </p>
      <div className="text-3xl">
        <a
          href="https://github.com/naveennamani"
          title="Github"
          target="_blank"
        >
          <GithubIcon />
        </a>
        <a href="https://t.me/naveennamani" title="telegram" target="_blank">
          <TelegramIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
