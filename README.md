# Eat the Burger

## https://dry-sea-94956.herokuapp.com/

![burger image](1.gif)

#### This is my very first full stack project. I can say this is an app, but really, not has too much functions. The main purpose for this project is know how from and back end talk to each other and how to organize all files so it can be more orgnaize for frontend and backend folders.

#### First is I need to have my database and then build the connection between frontend and back end using orm. I build all SQLstatement functions in the orm.js file.

#### Challenging things I need to handle are:

- Use connection.js require all the Database information from MySQL
``` javascript
var mysql = require("mysql");
```
- Next is to import the MySQL connection just builded on last step:
``` javascript
var connection =  require("../config/connection.js");
```
- Import the ORM to create functions that will interact with 
database.
``` javascript
var orm = require("../config/orm.js");
```

#### Technologies I use in this project
- express.js
- MySQL
- Handlebars.js
- Javascript
- HTML
- CSS
- Bootstrap