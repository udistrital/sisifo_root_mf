export const environment = {
  production: false,
  entorno: "test",
  autenticacion: true,
  notificaciones: false,
  menuApps: false,
  appname: "sisifo",
  appMenu: "SISIFO_MF",
  TOKEN: {
    AUTORIZATION_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
    CLIENTE_ID: "1OaC8gIVEfG8WxjrB37saszNQ5ga",
    RESPONSE_TYPE: "id_token token",
    SCOPE: "openid email role documento",
    REDIRECT_URL: "https://pruebasisifomicroclientes.portaloas.udistrital.edu.co",
    SIGN_OUT_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
    SIGN_OUT_REDIRECT_URL:
    "https://pruebasisifomicroclientes.portaloas.udistrital.edu.co",
    AUTENTICACION_MID:
      "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
  },
  parcels: {
    "@udistrital/root-config": "https://pruebasisifomicroclientes.portaloas.udistrital.edu.co/udistrital-root-config.js",
    "@udistrital/core-mf": "https://pruebascoreclientes.portaloas.udistrital.edu.co/main.js",
    "@udistrital/sisifo-historico-roles-mf": "https://pruebashistoricoroles.portaloas.udistrital.edu.co/main.js",
    "@udistrital/plan-anual-auditoria-mf": "//localhost:4203/main.js"
  },
};
