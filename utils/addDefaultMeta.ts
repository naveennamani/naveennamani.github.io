import type { MetaDataType } from "../types/pageContext";

export default function addDefaultMeta(metaData: MetaDataType): MetaDataType {
  let md: MetaDataType = Object.assign({}, metaData);
  if ("blogPost" in metaData) {
    md.blogPost.author = {
      name: "Naveen Namani"
    };
    md.blogPost.publisher = {
      name: "Random Programming Stuff",
      logo: "/images/naveennamani.jpg",
      url: __SITE__URL__ + "/blog"
    };
  }
  return md;
}

export { addDefaultMeta };
