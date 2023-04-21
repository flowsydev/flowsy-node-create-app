import { DatabaseTypes } from "./database-types.js";
import platforms, { PlatformNames } from "./platforms.js";
import { isNet6, Net6, Vue3 } from "./project-types.js";

export const QuestionNames = {
  ProjectName: "projectName",
  PlatformName: "platformName",
  ProjectType: "projectType",
  DatabaseType: "databaseType"
};

function menu(options) {
  return [
    {
      name: QuestionNames.ProjectName,
      message: "Project name:",
      type: "input",
      default: options?.answers?.projectName,
      validate: input => !!input
    },
    {
      name: QuestionNames.PlatformName,
      message: "Platform:",
      type: "list",
      choices: platforms,
      validate: input => !!input
    },
    {
      name: QuestionNames.ProjectType,
      message: "Project type:",
      type: "list",
      when: answers => answers["platformName"] === PlatformNames.Vue3,
      choices: [
        {
          name: "Vue 3 + Vuetify 3 + Pinia + Clean Architecture + Secure Backend for Frontend",
          value: Vue3.VuetifyPlusPiniaPlusCleanArchitecturePlusSecureBackendForFrontend
        }
      ]
    },
    {
      name: QuestionNames.ProjectType,
      message: "Project type:",
      type: "list",
      when: answers => answers["platformName"] === PlatformNames.Net6,
      choices: [
        {
          name: ".NET 6 Web API + Clean Architecture + Azure Active Directory UI Authentication",
          value: Net6.WebApiPlusCleanArchitecturePlusAzureAdUiAuth
        },
        {
          name: ".NET 6 Web API + Clean Architecture + Azure Active Directory UI Authentication + JWT Access Tokens",
          value: Net6.WebApiPlusCleanArchitecturePlusAzureAdUiAuthPlusJwtAccessTokens
        }
      ]
    },
    {
      name: QuestionNames.DatabaseType,
      message: "Database type:",
      type: "list",
      when: answers => isNet6(answers["projectType"]),
      choices: [
        {
          name: "PostgreSQL",
          value: DatabaseTypes.PostgreSql
        },
        {
          name: "MySQL",
          value: DatabaseTypes.MySql
        },
        {
          name: "MS SQL Server",
          value: DatabaseTypes.MsSql
        },
        {
          name: "Oracle",
          value: DatabaseTypes.Oracle
        }
      ]
    }
  ];
}

export default menu;
