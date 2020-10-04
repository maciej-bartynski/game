const moduleResolver = [
  "module-resolver",
  {
    "alias": {
      "components": "./src/components",
      "pages": "./src/pages",
      "utils": "./src/utils",
      "styles": "./src/styles",
      "reducers": "./src/reducers",
      "actions": "./src/actions",
      "hooks": "./src/hooks",
      "app": "./src/app"
    }
  }
]

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      moduleResolver,
    ],
  };
};
