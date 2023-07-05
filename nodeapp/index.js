const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'database',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql2')

app.get('/', (req, res) => {
    let connection = mysql.createConnection(config)
    let sql = "select name from people;"

    connection.query(sql, (err, results) => {
        res.send(`
            <!DOCTYPE html>
            <html lang='en'>
            <head>
            <title>Nginx</title>
            <meta charset='utf-8'>
            <style>
            </style>
            <script>
            </script>
            </head>
            <body>
                <h1>Full Cycle Rocks!</h1>
                ${JSON.stringify(results)}
            </body>
            </html>
                    `)
    } );
    connection.end();
})

app.listen(port, () => {
    let connection = mysql.createConnection(config)
    let createTable = "create table if not exists people(id int not null auto_increment primary key, name varchar(255));"
    let insert = "insert into people(name) values('Aaron Cohen')"
    let sql = "select name from people;"
    connection.execute(createTable);
    connection.execute(insert);
    connection.query(sql, (err, results) => console.log(results));
    connection.end();

    console.log(`Listening on port ${port}`)
})