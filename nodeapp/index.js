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

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    let connection = mysql.createConnection(config)
    let sql = "select name from people;"

    connection.query(sql, (err, results) => {
        res.render('index', {
            title: "Desafio Node/Nginx",
            message: "🌐 Full Cycle Rocks!",
            people: results
        })
    } );
    connection.end();
})

app.listen(port, () => {
    let random_name = require('node-random-name');
    let connection = mysql.createConnection(config)
    let createTable = "create table if not exists people(id int not null auto_increment primary key, name varchar(255));"
    let insert = `insert into people(name) values('${random_name()}')`
    let sql = "select name from people;"
    connection.execute(createTable);
    connection.execute(insert);
    connection.query(sql, (err, results) => console.log(results));
    connection.end();

    console.log(`Listening on port ${port}`)
})