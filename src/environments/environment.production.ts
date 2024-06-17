export const environment = {
  production: true,
  entorno: "test",
  autenticacion: true,
  notificaciones: false,
  menuApps: false,
  appname: "sisifo",
  appMenu: "SISIFO",
  TOKEN: {
    AUTORIZATION_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
    CLIENTE_ID: "Mg40MfT62GA_vcPMIJurpX3pzx4a",
    RESPONSE_TYPE: "id_token token",
    SCOPE: "openid email role documento",
    REDIRECT_URL: "http://localhost:4200/",
    SIGN_OUT_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
    SIGN_OUT_REDIRECT_URL:
    "http://localhost:4200/",
    AUTENTICACION_MID:
      "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
  },
  parcels: {
    "@udistrital/root-config": "//localhost:4200/udistrital-root-config.js",
    "@udistrital/core-mf": "//localhost:4201/main.js",
    "@udistrital/sisifo-configuracion-mf": "//localhost:4202/main.js"
  },
};
