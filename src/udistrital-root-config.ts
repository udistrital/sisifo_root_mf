import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import "./assets/styles/index.css";

import microfrontendLayout from "./microfrontend-layout.html";

let environment;

declare var isProd: boolean | undefined;
declare var isDev: boolean | undefined;
declare var isLocal: boolean | undefined;

if (isProd) {
  environment = require("./environments/environment.production");
} else if (isDev) {
  environment = require("./environments/environment.development");
} else {
  environment = require("./environments/environment");
}
const data = {
  props: environment,
  loaders: {},
};

const routes = constructRoutes(microfrontendLayout, data);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
