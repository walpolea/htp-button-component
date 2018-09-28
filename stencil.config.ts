import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "htp-button",
  generateDistribution: true,
  bundles: [{ components: ["htp-button"] }],
  plugins: [sass()],
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: null
    }
  ],
  plugins: [sass()]
};
