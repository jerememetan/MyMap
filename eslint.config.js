import vue from "eslint-plugin-vue";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  ...vue.configs["flat/base"],
  {
    files: ["src/**/*.vue"],
    rules: {
      "vue/block-order": [
        "error",
        {
          order: ["script", "template", "style"],
        },
      ],
      "vue/multi-word-component-names": "off",
    },
  },
];
