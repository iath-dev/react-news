# Aplicación de Noticias con React

## Descripción

Este proyecto es una aplicación web de noticias desarrollada con React, que consume la API de [NewsData.io](https://newsdata.io/) para mostrar las últimas noticias de diversas fuentes y categorías.

## Características

- Integración con la API de NewsData.io para obtener noticias en tiempo real.
- Desarrollado con React para una interfaz de usuario dinámica y reactiva.
- Fácil de configurar y ejecutar.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/es/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (viene con Node.js) o [Yarn](https://yarnpkg.com/)
- Una clave API de [NewsData.io](https://newsdata.io/)

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1.  Clona este repositorio:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd react-news
    ```

2.  Instala las dependencias:

    ```bash
    npm install
    # o
    yarn install
    ```

## Configuración de la API

Para que la aplicación funcione correctamente, necesitas una clave API de NewsData.io. Sigue estos pasos:

1.  Regístrate en [NewsData.io](https://newsdata.io/) y obtén tu clave API.
2.  Crea un archivo `.env` en la raíz del proyecto (al mismo nivel que `package.json`).
3.  Añade tu clave API al archivo `.env` de la siguiente manera:

    ```
    VITE_NEWSDATA_API_KEY=TU_CLAVE_API_AQUI
    ```

    Asegúrate de reemplazar `TU_CLAVE_API_AQUI` con tu clave API real.

## Uso

Una vez que hayas instalado las dependencias y configurado tu clave API, puedes ejecutar la aplicación:

### Modo Desarrollo

Para iniciar el servidor de desarrollo con recarga en caliente:

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique tu terminal).

### Construir para Producción

Para construir la aplicación para producción:

```bash
npm run build
# o
yarn build
```

Esto creará una carpeta `dist` con los archivos optimizados para producción.

### Previsualizar la Construcción

Para previsualizar la construcción de producción localmente:

```bash
npm run preview
# o
yarn preview
```

## Estructura del Proyecto

```
react-news/
├── public/
├── src/
│   ├── assets/
│   ├── components/ (futuros componentes)
│   ├── pages/ (futuras páginas/vistas)
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env (archivo de configuración de variables de entorno)
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── vite.config.ts
└── ...otros archivos de configuración
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un `issue` o envía un `pull request`.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
