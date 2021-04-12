# emp-crud

This is MEAN stack project built for educational purposes. This is a web application that provides a system to manage employees on a small scale.
 
P.S *This repo is still in development*

This project uses the MEAN stack:

* Mongoose.js (MongoDB): database
* Express.js: backend framework
* Angular v11.x: frontend framework
* Node.js v14.x: runtime environment

## Prerequisites
1. Install [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com)
2. Install Angular CLI
```bash
npm install -g @angular/cli
```

## Installation

1. Clone repo

```bash
git clone https://github.com/afifialaa/MEAN-crud-operations.git
```
2. Install dependencies

```bash
npm install
```

## Usage
1. Create a .env file with the following variables

```env
MONGODB_LOCAL=mongodb://localhost:27017/employee-management
SECRET_KEY=your_secret_key
```
2. Run angular in development mode
```bash
ng serve --configuration=development
```
and now you can visit the site with the URL http://localhost:4200
3. Run server
```bash
node server.js
```
or run server in debug mode
```bash
DEBUG=* node server.js
```

## Contributing
Pull requests are welcome. For major changes, please open an issue
