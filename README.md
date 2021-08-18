# Employee Management System

A MEAN-stack employee management system.
* Node v14.16.0
* Angular 8.0.6
* MongoDB 4.4.3
* Express 4.17.1

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
ng serve --configuration=devvelopment
```
now visit localhost:4200

## Features
* Employee management
* Task management
* Blog
* Inventory management
* Task management
