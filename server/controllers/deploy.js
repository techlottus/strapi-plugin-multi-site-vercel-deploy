"use strict";

module.exports = {
  async runDeploy(ctx) {
    const response = await strapi
      .plugin("multi-site-vercel-deploy")
      .service("deploy")
      .runDeploy(ctx.request.query.site);

    if (response.error) {
      return ctx.internalServerError(`Server error: ${response.error}`);
    }

    ctx.body = response;
  },
  async getDeployments(ctx) {
    const response = await strapi
      .plugin("multi-site-vercel-deploy")
      .service("deploy")
      .getDeployments(ctx.request.query.site);

    if (response.error) {
      return ctx.internalServerError(`Server error: ${response.error}`);
    }

    ctx.body = response;
  },
  deployAvailability(ctx) {
    const response = strapi
      .plugin("multi-site-vercel-deploy")
      .service("deploy")
      .deployAvailability(ctx.request.query.site);

    if (response.error) {
      return ctx.internalServerError(`Server error: ${response.error}`);
    }

    ctx.body = response;
  },
};
