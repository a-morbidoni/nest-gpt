# Nest-GPT

Este proyecto es una aplicación NestJS que integra funcionalidades de GPT.

## Requisitos Previos

- Node.js (versión 16 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd nest-gpt
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
Crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias:
```env
# Ejemplo de variables de entorno
OPENAI_API_KEY=tu_api_key_aqui
```

## Ejecución

Para iniciar el servidor en modo desarrollo:
```bash
npm run start:dev
```

Para compilar y ejecutar en modo producción:
```bash
npm run build
npm run start:prod
```

## Endpoints

La aplicación estará disponible en `http://localhost:3000`

## Scripts Disponibles

- `npm run start`: Inicia la aplicación
- `npm run start:dev`: Inicia la aplicación en modo desarrollo con hot-reload
- `npm run build`: Compila la aplicación
- `npm run start:prod`: Inicia la aplicación en modo producción
- `npm run test`: Ejecuta los tests
- `npm run test:e2e`: Ejecuta los tests end-to-end
- `npm run lint`: Ejecuta el linter

## Estructura del Proyecto

```
src/
├── gpt/           # Módulo principal de GPT
├── app.module.ts  # Módulo raíz de la aplicación
└── main.ts        # Punto de entrada de la aplicación
```
