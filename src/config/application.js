// WARNING: The contents of this file _including process.env variables_ will be
// exposed in the client code.

const headContent = {
  title: "Poor Man's IMDB",
  titleTemplate: "%s | Poor Man's IMDB",
  meta: [
    { name: "description", content: "Poor Man's IMDB" },
    { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" }
  ]
};

const config = {
  development: {
    assetPath: "http://localhost:8888/assets",
    head: headContent
  },
  production: {
    // This should be a CDN in development
    assetPath: process.env.ASSET_URL || "http://localhost:8888/assets",
    head: headContent
  }
};

export default (config[process.env.NODE_ENV] || config["development"]);

