/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "aws-lambda-turbopuffer",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const fn = new sst.aws.Function("MyFunction", {
      url: true,
      timeout: "15 minutes",
      handler: "index.handler",
    });

    return {
      url: fn.url,
    };
  },
});
