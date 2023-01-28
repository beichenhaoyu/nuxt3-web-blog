/*
 * @Author: 晨晨 934888543@qq.com
 * @Date: 2023-01-28 16:53:20
 * @LastEditors: 晨晨 934888543@qq.com
 * @LastEditTime: 2023-01-28 16:53:32
 * @FilePath: /blog-web/prettier.config.js
 * @Description:
 *
 * Copyright (c) 2023 by 晨晨 934888543@qq.com, All Rights Reserved.
 */
/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  endOfLine: 'lf',
  tabWidth: 2,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  plugins: [require('prettier-plugin-tailwindcss')],
}
