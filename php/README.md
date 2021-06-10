# Swapi (Server)

Challenges with random api & swapi api.

## Installation

Use the package manager [composer](https://getcomposer.org/) to install the dependencies of Swapi And Random API

```bash
composer install
```

## Quick Start

The quickest way to get started with the project API Swapi is creating a .env file which contains configuration options and server options.

```
$ touch .env

$ nano .env

#Add this lines to .env file
CI_ENVIRONMENT = development
API_EXTERNAL_URI = https://randomuser.me
```


```
php spark serve --port 5001
```

Runs the app in the development mode. Open [http://localhost:5001](http://localhost:5001) to view it in the console the server will reload if you make edits. 

## Basic Scripts

In the project directory, you can run:

### Starting server in Development Mode

First create a .env file with theprevious configuration. (according to dev enviroment selected)

```bash
nano .env
---

CI_ENVIRONMENT = development 
```

### Starting server in Production Mode

```bash
nano .env
---

CI_ENVIRONMENT = production 
```

Enables the production mode which prevent the server to re-start

## License

[MIT](https://choosealicense.com/licenses/mit/)
