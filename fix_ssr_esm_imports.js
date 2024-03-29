export default function fix_ssr_esm_modules(replacements) {
  function transform(code, id, ssr) {
    if (ssr)
      return replacements.reduce((prevCode, { find, replacement }) => {
        return prevCode.replace(new RegExp(find, "g"), replacement);
      }, code);
  }

  return {
    name: "vite-plugin-fix-ssr-esm-modules",
    apply: "build",
    enforce: "post",
    transform
  };
}
