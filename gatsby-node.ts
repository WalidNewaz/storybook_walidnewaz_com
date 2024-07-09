/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
import { GatsbyNode, WebpackPlugins } from "gatsby";
import { resolve } from "path";

/**
 * Webpack configuration for Gatsby
 * @param params
 */
export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
  stage,
  getConfig,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@mui/material": "@mui/joy",
      },
    },
  });
  // if (stage === "build-javascript") {
  //   const config = getConfig();
  //   const miniCssExtractPlugin = config.plugins.find(
  //     (plugin: WebpackPlugins) =>
  //       plugin.constructor.name === "MiniCssExtractPlugin"
  //   );
  //   // Prevent MiniCssExtractPlugin's default filename hashing error during build
  //   if (miniCssExtractPlugin) {
  //     miniCssExtractPlugin.options.ignoreOrder = true;
  //   }
  //   actions.replaceWebpackConfig(config);
  // }
};
