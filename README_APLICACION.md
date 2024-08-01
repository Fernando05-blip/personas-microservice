# Crud de personas

Este proyecto utiliza la tecnología NestJS, GraphQL, TypeORM y PostgreSQL.

## Requisitos

- Node.js
- npm
- PostgreSQL

## Configuración

##Clona el repositorio:

   ```bash
   git clone https://github.com/yourusername/personas-microservice.git
   cd personas-microservice

## Instalar dependencias  
npm install

## setear base de datos en src/app.module.ts
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'yourusername',
  password: 'yourpassword',
  database: 'mydatabase',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
})

## lanzar aplicacion
npm run start
