# Aplicación web de Notas creada con Vue 3

Aplicación web para tomar y gestionar notas, desarrollada con Vue 3.

## Tecnologías
- **Vue 3** — interfaz
- **Vite** — desarrollo y build
- **Pinia** — estado global
- **Vue Router** — rutas
- **pinia-plugin-persistedstate** — persistencia local

## Características
- Crear, editar, marcar y eliminar notas
- Persistencia en el navegador (localStorage)
- Filtros: todas / abiertas / hechas
- Interfaz limpia y responsiva
- Componentes reutilizables

## Instalación y uso
```bash
npm install
npm run dev
```

## Estructura
- `src/components` — crear nota, header, tarjeta
- `src/views` — Home, Notes
- `src/stores` — store Pinia de notas
- `src/router` — rutas