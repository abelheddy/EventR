# EventR
# Manual del Desarrollador para EventR

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Requisitos del Sistema](#requisitos-del-sistema)
3. [Configuración del Entorno](#configuración-del-entorno)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Configuración de la Base de Datos](#configuración-de-la-base-de-datos)
6. [Ejecución de la Aplicación](#ejecución-de-la-aplicación)
7. [API Endpoints](#api-endpoints)
8. [Contribución](#contribución)

## Introducción
EventR es una aplicación de gestión de eventos diseñada para facilitar la organización y participación en eventos. Este manual proporciona toda la información necesaria para que los desarrolladores puedan configurar, ejecutar y contribuir al proyecto.

## Requisitos del Sistema
- Node.js (v18 o superior)
- npm (v8 o superior)
- MySQL (v5.7 o superior) o MariaDB
- Git

## Configuración del Entorno

1. Clona el repositorio:
```bash
git clone https://github.com/abelheddy/EventR.git
cd EventR
```

2. Instala las dependencias:
```bash
npm install
```
3. Instala las dependencias en frontend
```bash
cd frontend
npm install vite --save-dev
npm install @vitejs/plugin-react --save-dev
```

## Estructura del Proyecto
```
EventR/
├── client/           # Frontend React
├── server/           # Backend Node.js/Express
├── database/         # Scripts y configuración de base de datos
├── docs/             # Documentación adicional
├── tests/            # Pruebas unitarias e integración
└── .env.example      # Plantilla de variables de entorno
```

## Configuración de la Base de Datos

1. Crea una base de datos MySQL/MariaDB llamada `eventr_db`
2. Configura las credenciales en el archivo `.env` (usa `.env.example` como plantilla)
3. Ejecuta los comandos SQL ubicados en backend/scripDB.spl

## Ejecución de la Aplicación

### Entorno de Desarrollo
1. Inicia el servidor backend:
```bash
cd backend
npm run dev
```

2. Inicia el cliente frontend:
```bash
cd frontend
npm start
```

La aplicación estará disponible en `http://localhost:5173` y el API en `http://localhost:5000`


## API Endpoints

Los endpoints principales del API incluyen:

- `GET /api/events` - Lista todos los eventos
- `POST /api/events` - Crea un nuevo evento
- `GET /api/events/:id` - Obtiene detalles de un evento
- `PUT /api/events/:id` - Actualiza un evento
- `DELETE /api/events/:id` - Elimina un evento
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión

Consulta la documentación completa de la API en `docs/api.md`.

## Contribución
1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
