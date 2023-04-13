import mysql2 from 'mysql2';
import express from 'express';

const connection = mysql2.createConnection({
    host: "localhost", // "127.0.0.1"
    database: "csv_db 6",
    user: "dvs",
    password: "dvs",
});

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`SERVER   : http:/localhost:${PORT}`);
    connection.connect((err) => {
        if (err) throw err;
        console.log("DATABASE CONNECTED");
    });
});

app.use("/all", (req, res)=> {
    const sql_query = `select * FROM bmw`;
    connection.query(sql_query, (err, result)=> {
        if(err) throw err;
        res.send(result);
    });
});
