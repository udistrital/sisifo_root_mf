export const environment = {
    production: false,
    entorno: "test",
    autenticacion: true,
    notificaciones: false,
    menuApps: false,
    appname: "sisifo_mf",
    appMenu: "SISIFO_MF",
    TOKEN: {
      AUTORIZATION_URL: "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
      CLIENTE_ID: "e36v1MPQk2jbz9KM4SmKhk8Cyw0a",
      RESPONSE_TYPE: "id_token token",
      SCOPE: "openid email role documento",
      REDIRECT_URL: "http://localhost:4200/",
      SIGN_OUT_URL: "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
      SIGN_OUT_REDIRECT_URL: "http://localhost:4200/",
      AUTENTICACION_MID: "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
    },
    parcels: {
      "@udistrital/root-config": "//localhost:4200/udistrital-root-config.js",
      "@udistrital/core-mf":"https://pruebascoreclientes.portaloas.udistrital.edu.co/main.js",
      "@udistrital/sisifo-usuario_rol_mf": "//localhost:4202/main.js",
      "@udistrital/plan-anual-auditoria-mf": "//localhost:4203/main.js",
      "@udistrital/formularios-dinamicos-mf": "//localhost:4220/main.js"
    }    
  };
  
