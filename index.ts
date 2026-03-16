import * as pulumi from "@pulumi/pulumi";
import * as azure_native from "@pulumi/azure-native";
import * as resources from "@pulumi/azure-native/resources";

// update !!! 

const rgMySecondStaticWebAppApi = new azure_native.resources.ResourceGroup("rgMySecondStaticWebAppApi", {
    location: "westeurope",
    resourceGroupName: "my-second-static-web-app-api",
}, {
    protect: false,
});

const mySecondStaticWebAppApi = new azure_native.web.StaticSite("mySecondStaticWebAppApi", {
    allowConfigFileUpdates: true,
    branch: "main",
    buildProperties: {
        apiLocation: "/api",
        appArtifactLocation: "",
        appLocation: "/src",
    },
    enterpriseGradeCdnStatus: azure_native.web.EnterpriseGradeCdnStatus.Disabled,
    location: "West Europe",
    name: "my-second-static-web-app-api",
    provider: "GitHub",
//    repositoryToken: "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",
//    repositoryToken: "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",
    repositoryToken: "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",
    repositoryUrl: "https://github.com/FrankJMB/my-second-static-web-app-api",
    resourceGroupName: rgMySecondStaticWebAppApi.name,
    sku: {
        name: "Free",
        tier: "Free",
    },
    stagingEnvironmentPolicy: azure_native.web.StagingEnvironmentPolicy.Enabled,
}, {
    protect: false,
});
