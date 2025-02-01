# Task Manager - Full Stack (Django + React)

Este proyecto es una aplicación full stack que permite gestionar tareas. El backend está desarrollado con **Django** y el frontend con **React** (usando Vite). Los usuarios pueden crear, editar, eliminar y marcar tareas como completadas. Además, las tareas se agrupan automáticamente en "Completadas" e "Incompletas".

---

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas antes de comenzar:

- **Python**: Versión 3.10 o superior.
- **Node.js**: Versión 18 o superior.
- **npm**: Versión 9 o superior (viene con Node.js).
- **Git**: Para clonar el repositorio.

Puedes verificar las versiones instaladas ejecutando:

```bash
python --version
node --version
npm --version
git --version
```

## Instalación y Configuración

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local.

1. Clonar el Repositorio
Clona el repositorio desde GitHub: 
```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
```

## Configurar el Backend (Django)
Navega a la carpeta backend:


```bash
cd backend
Crea un entorno virtual y actívalo:
```

En Windows:
```bash
python -m venv venv
venv\Scripts\activate
```

En macOS/Linux:
```bash
python3 -m venv venv
source venv/bin/activate
```

## Instala las dependencias de Python:

```bash
pip install -r requirements.txt
```
Aplica las migraciones para crear la base de datos:

```bash
python manage.py migrate
```
Inicia el servidor de desarrollo:

```bash
python manage.py runserver
```
El backend estará disponible en http://127.0.0.1:8000.

## Configurar el Frontend (React + Vite)
Navega a la carpeta frontend:

```bash
cd ../frontend
```
Instala las dependencias de Node.js:

```bash
npm install
```
Inicia el servidor de desarrollo:

```bash
npm run dev
```
El frontend estará disponible en http://localhost:5173.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:


backend/          # Código del backend (Django)
  tasks/          # Aplicación de tareas
  venv/           # Entorno virtual de Python
  db.sqlite3      # Base de datos SQLite
  manage.py       # Script de gestión de Django

frontend/         # Código del frontend (React + Vite)
  public/         # Archivos públicos (HTML, imágenes, etc.)
  src/            # Código fuente de React
  package.json    # Dependencias de Node.js
  vite.config.js  # Configuración de Vite

## Documentación de la API
El backend incluye una API REST documentada usando Django REST Framework. Puedes acceder a la documentación en:

Documentación de la API: http://127.0.0.1:8000/tasks/docs/

Características Principales

Crear tareas: Los usuarios pueden crear nuevas tareas con un título y una descripción.

Editar tareas: Las tareas existentes pueden ser editadas.

Eliminar tareas: Las tareas pueden ser eliminadas.

Marcar como completada: Las tareas pueden marcarse como completadas.

Agrupación de tareas: Las tareas se agrupan automáticamente en "Completadas" e "Incompletas".

Validaciones: El backend valida que los títulos no estén vacíos y no se dupliquen.