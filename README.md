# sisifo_root

El Root contiene la lógica de Single-SPA del sistema sisifo y gestiona todos los microfrontends dentro de la página web, ayuda a gestionar la comunicación entre 
ellos y contiene el consumo de los assets, paleta de colores y favicon del sistema.


## Especificaciones Técnicas

### Tecnologías Implementadas y Versiones
* [Angular](https://angular.io/) 16.2.12
* [Node](https://nodejs.org/es/) 18.19.0


### Variables de Entorno
```javascript
export const environment = {
    production: false,
    entorno: "test",
    autenticacion: true,
    notificaciones: false,
    menuApps: false,
    appname: "sisifo",
    appMenu: "SISIFO",
    TOKEN: {
      AUTORIZATION_URL: "",
      CLIENTE_ID: "",
      RESPONSE_TYPE: "",
      SCOPE: "",
      REDIRECT_URL: "",
      SIGN_OUT_URL: "",
      SIGN_OUT_REDIRECT_URL: "",
      AUTENTICACION_MID: "",
    },
};
```


### Ejecución del Proyecto


1. clonar el repositorio:
   ```shell
   git clone https://github.com/udistrital/sisifo_root_mf.git
    ```
3. Acceder al directorio del repositorio clonado:
   ```bash
   cd sisifo_root
   ```
4. Instalar las dependencias:
   ```bash
   npm install
   ```

5. Iniciar el Root:
   ```bash
   npm start
   ```

### Ejecución Dockerfile
```shell
# Does not apply
```

### Ejecución docker-compose
```shell
# Does not apply
```

### Ejecución Pruebas

Pruebas unitarias
```shell
# Developing
```
## Estado CI

```bash
# Developing
```
## Modelo de Datos
```bash
# Developing
```

## Licencia

This file is part of sisifo_root.

sisifo_root is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

sisifo_root is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with novedades_crud. If not, see https://www.gnu.org/licenses/.
