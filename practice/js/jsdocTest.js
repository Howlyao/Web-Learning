/**
 * @file 文件工具库
 * @version 1.0.0 
 */

/**
 * @param {String} name
 * @description call the name
 */

 function callName(name) {
   console.log(`what the fuck ${name}`)
 }

//          "mkdoc": "node_modules/.bin/jsdoc --configure .jsdoc.json"

// .jsdoc.json

// {
//   "tags": {
//       "allowUnknownTags": false
//   },
//   "source": {
//       "include": [
//           "modules/",
//           "package.json",
//           "README.md"
//       ],
//       "includePattern": ".server.controller.js$",
//       "excludePattern": "(node_modules/|docs)"
//   },
//   "plugins": [
//       "plugins/markdown",
//       "plugins/summarize"
//   ],
//   "opts": {
//       "template": "node_modules/docdash/",
//       "encoding": "utf8",
//       "destination": "docs/",
//       "recurse": true,
//       "verbose": true
//   },
//   "templates": {
//       "cleverLinks": false,
//       "monospaceLinks": false
//   }
// }


// allowUnknownTags设置是否允许自定义标签，如果设置成false但使用了自定义标签，在生成文档的时候回报错
// include设置目标文件的目录
// includePattern设置为哪些文件生成doc，在这里我匹配了所有后缀名为.server.controller.js的文件
// excludePattern不包含哪些文件/文件夹
// plugins使用的插件集合
// template设置模板位置，我这里使用了docdash风格的模板，当然不设置也可以，有默认的模板
// encoding输出文件的编码格式
// destination输出文档目录
// recurse是否地柜查找目标文件，如果设置成true，则则JSDoc将搜索10级深度的文件，如果想要更改搜索深度，在json根节点添加recurseDepth属性并设置一个数字类型的值来声明搜索深度
// verbose是否将编译的详细信息输出到控制台
// cleverLinks如果testlink是一个URL，那么{@link testlink}将以普通字体呈现，否则就是等宽字体
// monospaceLinks链接的字体是否是等款字体，如果cleverLinks设置成true，那么monospaceLinks的值将被忽略