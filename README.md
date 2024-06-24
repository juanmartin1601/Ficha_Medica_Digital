# Ficha Médica Digital

## Configuración del proyecto

### Instalar dependencias

- npm install

### Crear base de datos postgres

CREATE DATABASE nombre_db

## Configuración de las variables de entorno

### Crea un archivo .env en la raíz del proyecto y agrega las variables como en .env.example:

- PORT=3000
- DB_URL="postgresql://postgres:password@localhost:5432/db-name"
- JWT_SECRET_KEY="regalo"

## Ejecuta las migraciones para crear las tablas en la base de datos:

- npm run migrate

## Inserta los datos de prueba:

- npm run seed

## Inicia el servidor en modo desarrollo:

- npm run dev

### Datos de prueba:

- email: juan@example.com
- password: password

## Rutas de la API

### Autenticación

- POST /api/auth/login

- descripción: Autentica a un usuario y devuelve un token JWT.

- Cuerpo de la solicitud:
  {
  "email": "juan@example.com",
  "password": "password"
  }

### Usuarios

POST /api/users

- Descripción: Crea un nuevo usuario.
- Cuerpo de la solicitud:

  {
  "name": "Nombre del usuario",
  "dni": "DNI",
  "address": "Dirección",
  "email": "Correo electrónico",
  "password": "Contraseña"
  }

  ### Ficha médica

- POST /api/medical-records

- Descripción: Crea una nueva ficha médica.
- Requiere autenticación: No
- Cuerpo de la solicitud:

  {
  "title": "Título de la ficha",
  "category": "Categoría",
  "description": "Descripción",
  "petId": "ID de la mascota"
  }

- PUT /api/medical-records/

- Descripción: Actualiza una ficha médica existente.
- Requiere autenticación: No
- Cuerpo de la solicitud:
  {
  "title": "Nuevo título",
  "category": "Nueva categoría",
  "description": "Nueva descripción"
  }

- DELETE /api/medical-records/

- Descripción: Elimina una ficha médica existente.
- Requiere autenticación: Sí

- GET /api/medical-records/pet/:petId

- Descripción: Obtiene todas las fichas médicas de una mascota.
- Requiere autenticación: Sí

- GET /api/medical-records/user/:dni

- Descripción: Obtiene todas las fichas médicas de las mascotas de un dueño.
- Requiere autenticación: Sí
