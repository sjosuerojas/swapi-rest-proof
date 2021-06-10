# Swapi (Server)

Challenges with random api & swapi api.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install CDMSmith Assets Managment

```bash
npm install
```

## Quick Start

The quickest way to get started with the project API CDMSmith is creating a .env / .env.production file which contains configuration options and server options.

```
touch .env.production
```

In order to set the enviroment variables copy and paste these in the previous file.

```
nano .env.production
---

# Main app server
APP_PORT=0000
APP_ALLOW_DOMAINS="https://domain.com"

# Application logger configuration
APP_LOG_LEVEL=info
APP_LOG_FILENAME=logs/cdmsmith-asset-management.log
APP_LOG_HANDLEEXCEPTIONS=true
APP_LOG_JSON=true
APP_LOG_MAXSIZE=5242880
APP_LOG_MAXFILES=15
APP_LOG_COLORIZE=true
APP_CONSOLE_LOG_LEVEL=debug
APP_CONSOLE_LOG_HANDLEEXCEPTIONS=true
APP_CONSOLE_LOG_JSON=false
APP_CONSOLE_LOG_COLORIZE=true

# App JWT Security
ACCESS_TOKEN_SECRET= # Generate a Key
ACCESS_TOKEN_APIKEY= # Generate an apiKey

# Database conection [ Cloud ] MYSQL  
DB_HOST= # set the host of database
DB_USER= # set the user of database
DB_PASSWORD= # set the password of database
DB_DATABASE= # set the database of database
DB_PORT= # set the port of database
DB_LIMIT= # set the limit of database
DB_TIMEOUT= # set the timeout connection of database

```

## Basic Scripts

In the project directory, you can run:

### Starting server in Development Mode

First create a .env.development file with theprevious configuration. (according to dev enviroment selected)

```bash
npm run dev
```

Runs the app in the development mode. Open [http://localhost:6000](http://localhost:6000) to view it in the console the server will reload if you make edits.
You will also see any lint errors in the console.

### Starting server in Production Mode

```bash
npm start
```

Enables the production mode which prevent the server to re-start

### Test

To run the test suite, first install the dependencies, then run `npm test`:

```
npm i
npm test
```

### Formating the code

```bash
npm format
```

Runs the formatter mode engines by Prettier which searches for {.js} files and fix wrong format to correct format

## Avaible scripts with PM2

Enables the server for deplyment on a pm2 instance.
Some examples of usage:

### For production mode

```bash
npm run deploy:pm2
```

Runs the production mode with ecosystem file that is previosly config in package.json file `<br><br>`

### Logging server

```bash
npm run log:pm2
```

Runs the pm2 log comand to watch the process that is being served with the current project `<br><br>`

### Stop server

```bash
npm run stop:pm2
```

Runs the pm2 stop comand & stops only this instance `<br><br>`

### Retart server

```bash
npm run restart:pm2
```

Runs pm2 restart comand only for this instance `<br><br>`

### Monit server

```bash
npm run monit:pm2
```

Runs pm2 monit comand

## License

[MIT](https://choosealicense.com/licenses/mit/)
