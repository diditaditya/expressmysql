const express = require('express');
const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: '',
// });

const app = express();

// connection.connect((err) => {
//     if (!err) {
//         console.log("Database is connected.. \n");
//     } else {
//         console.log("Error connecting to database.. \n");
//         console.log(err);
//     }
// });

// root access is required to run on port lower than 1024 on linux, not recommended
const port = 8080;


app.get("/", (req, res) => {
    res.send("WELCOME, please go to /listUser");
})

// app.get("/listUser", (req, res) => {
//     connection.query('SELECT * FROM user', (err, rows) => {
//         connection.end();
//         if (err) {
//             throw error;
//         }
//         res.json(rows);
//     });
// })

app.listen(process.env.PORT || port, (err) => {
    if (!err) {
        console.log(`Listening..`);
    } else {
        console.log(`Error listening to port..`);
        console.log(err);
    }
});