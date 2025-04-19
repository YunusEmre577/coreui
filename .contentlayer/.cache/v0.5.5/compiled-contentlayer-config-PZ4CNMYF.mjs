// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    apiName: { type: "string", required: false }
  },
  computedFields: {
    fileUrl: { type: "string", resolve: (doc) => doc._raw.flattenedPath },
    category: { type: "string", resolve: (doc) => doc._raw.flattenedPath.split("/")[1] }
  }
}));
var contentlayer_config_default = makeSource({
  disableImportAliasWarning: true,
  documentTypes: [Doc],
  contentDirPath: "contents",
  mdx: {
    remarkPlugins: [
      remarkGfm
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypePrettyCode,
      rehypeAutolinkHeadings
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PZ4CNMYF.mjs.map
