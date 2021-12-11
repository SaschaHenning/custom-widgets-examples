import { IntegrationToken } from "@staffbase/widget-sdk";

const integration: IntegrationToken = {
  accessToken: "dummy-access-token",
  accessTokenExpiresAt: new Date(),
};

export const getIntegration = async (): Promise<IntegrationToken | null> =>
  integration;
