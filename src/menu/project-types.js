export const Vue3 = {
  VuetifyPlusPiniaPlusCleanArchitecturePlusSecureBackendForFrontend: "VuetifyPlusPiniaPlusCleanArchitecturePlusSecureBackendForFrontend"
};

export const Net6 = {
  WebApiPlusCleanArchitecturePlusAzureAdUiAuth: "WebApiPlusCleanArchitecturePlusAzureAdUiAuth",
  WebApiPlusCleanArchitecturePlusAzureAdUiAuthPlusJwtAccessTokens: "WebApiPlusCleanArchitecturePlusAzureAdUiAuthPlusJwtAccessTokens"
};

export const isNet6 = (projectType) => Object.values(Net6).indexOf(projectType) >= 0;
