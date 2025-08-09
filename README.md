# Aplicación web de Notas creada con Vue 3

<img width="1912" height="924" src="https://github.com/user-attachments/assets/f30596c3-c541-4bc0-b920-fe5f55318e10" />

Aplicación web para tomar y gestionar notas, desarrollada con Vue 3.

## Tecnologías utilizadas
- **Vue 3**: Framework principal para la interfaz de usuario.
- **Vite**: Herramienta de desarrollo y bundler.
- **Pinia**: Gestión de estado global.
- **Vue Router**: Enrutamiento de páginas.
- **pinia-plugin-persistedstate**: Persistencia del estado de Pinia.

## Dependencias principales
- `vue`
- `pinia`
- `vue-router`
- `pinia-plugin-persistedstate` (para las pruebas antes de usar API)

## Características
- Crear, listar y gestionar notas.
- Persistencia de notas usando una API REST (Beeceptor).
- Interfaz moderna y responsiva.
- Manejo de errores y estados de carga.
- Separación en componentes reutilizables.

## Instalación y uso
```bash
npm install
npm run dev
```

## Estructura principal
- `src/components`: Componentes reutilizables (crear nota, header, tarjeta de nota).
- `src/views`: Vistas principales (Home, Notes).
- `src/stores`: Store Pinia para gestión de notas.
- `src/router`: Configuración de rutas.
