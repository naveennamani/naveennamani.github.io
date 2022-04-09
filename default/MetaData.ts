import type { ReactSEOMetaTagsProps } from "react-seo-meta-tags";

const defaultMetaData: ReactSEOMetaTagsProps = {
  website: {
    title: "Naveen Namani's website",
    description:
      "My personal website consisting of my interesting projects and articles/blog posts",
    author: {
      name: "Naveen Namani",
      image: __SITE__URL__ + "/images/avataaar.svg"
    },
    url: __SITE__URL__
  }
};

export default defaultMetaData;
export { defaultMetaData };
