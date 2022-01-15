# Employee Management System

A MEAN-stack employee management system.
* Node v14.16.0
* Angular 8.0.6
* MongoDB 4.4.3
* Express 4.17.1

This management system in made up of multiple applications, each of which might be written in a different language, but all applications share the same front end design written using Angular framework.

*This is not and will never be a finished product. This project is built for learning purposes and to showcase the skills that I have and still aquiring through constant learning*

## Installation and Usage
1. Clone the repo.
```bash
git clone https://github.com/afifialaa/MEAN-employee-management.git
```
2. Change directory.
```bash
cd MEAN-employee-management
```
3. Install dependencies.
```bash
npm install
```
4. Create .env file.
```bash
touch .env
```
5. Add environment variables to .env file.
```
MONGODB_CLOUD=<YOUR_CONNECTION_STRING>
SECRET_KEY=<YOUR_SECRET_KEY>
EMAIL_PASSWORD=<YOUR_MAILER_PASSWORD>
```
6. Start the server, server will be running at port 8080.
```bash
node server.js
```
7. Start angular server in development mode
```bash
ng serve --configuration=development
```
now visit localhost:4200

## Features
* Employee management
* Task management
* Knowledge management
* Inventory management
* Task management
* Chat app
