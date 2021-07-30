module.exports = function (api) {
  var validEnv = ["development", "test", "production"]
  var currentEnv = api.env()
  var isDevelopmentEnv = api.env("development")
  var isProductionEnv = api.env("production")
  var isTestEnv = api.env("test")

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      "Please specify a valid `NODE_ENV` or " +
        "`BABEL_ENV` environment variables. Valid values are \"development\", " +
        "\"test\", and \"production\". Instead, received: " +
        JSON.stringify(currentEnv) +
        ".",
    )
  }

  return {
    presets: [
      isTestEnv && [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
        },
      ],
      (isProductionEnv || isDevelopmentEnv) && [
        "@babel/preset-env",
        {
          forceAllTransforms: true,
          useBuiltIns: "entry",
          corejs: 3,
          modules: false,
          exclude: ["transform-typeof-symbol"],
        },
      ],
      ["@babel/preset-typescript", { allExtensions: true, isTSX: true }],
    ].filter(Boolean),
    plugins: [
      "babel-plugin-macros",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-throw-expressions",
      isTestEnv && "babel-plugin-dynamic-import-node",
      isProductionEnv && "@interactjs/dev-tools/babel-plugin-prod",
      "@babel/plugin-transform-destructuring",
      [
        "@babel/plugin-transform-typescript",
        {
          allowDeclareFields: true,
        },
      ],
      [
        "@babel/plugin-proposal-decorators",
        {
          legacy: true,
        },
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          loose: true,
        },
      ],
      [
        "@babel/plugin-proposal-private-methods",
        {
          loose: true,
        },
      ],
      [
        "@babel/plugin-proposal-object-rest-spread",
        {
          useBuiltIns: true,
        },
      ],
      [
        "@babel/plugin-transform-runtime",
        {
          helpers: false,
          regenerator: true,
          corejs: false,
        },
      ],
      [
        "@babel/plugin-transform-regenerator",
        {
          async: false,
        },
      ],
    ].filter(Boolean),
  }
}
