export const environment = {
  production: true,
  entorno: "test",
  autenticacion: true,
  notificaciones: false,
  menuApps: false,
  appname: "sisifo",
  appMenu: "SISIFO_MF",
  TOKEN: {
    AUTORIZATION_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
    CLIENTE_ID: "Mg40MfT62GA_vcPMIJurpX3pzx4a",
    RESPONSE_TYPE: "id_token token",
    SCOPE: "openid email role documento",
    REDIRECT_URL: "https://sisifomicroclientes.portaloas.udistrital.edu.co",
    SIGN_OUT_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
    SIGN_OUT_REDIRECT_URL:
    "https://sisifomicroclientes.portaloas.udistrital.edu.co",
    AUTENTICACION_MID:
      "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
  },
  parcels: {
    "@udistrital/root-config": "https://sisifomicroclientes.portaloas.udistrital.edu.co/udistrital-root-config.js",
    "@udistrital/core-mf": "https://coreclientes.portaloas.udistrital.edu.co/main.js",
    "@udistrital/sisifo-historico-roles-mf": "https://historicoroles.portaloas.udistrital.edu.co/main.js",
    "@udistrital/plan-anual-auditoria-mf": "//localhost:4203/main.js"
  },
};
