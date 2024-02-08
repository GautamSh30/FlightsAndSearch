# Welcome to Flights Service

## Project setup

-clone project on your local
-execute `npm install` on the same path as of your root directory of the download project
-create a `.env` file in the root directory and add the following enviorment variable. - `PORT=3000`
-Inside the `src/config` folder create a new file `config.json` and then add following piece of json

```

{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```

- once you have added your db config as listed above, go to the src folder from terminal and execute ` npx sequelize db:create`

# DB design

- airplane table
- flight
- airport
- city

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has may airports but one airport belongs to a city
- One airport can have many flights, but a flight belongs to one airport
