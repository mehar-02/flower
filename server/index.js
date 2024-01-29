const express = require('express');
var mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(express.json());
const port = 5000;


app.use(cors("*"));
const pool = mysql.createPool({
    host: 'monorail.proxy.rlwy.net',
    user: 'root',
    password: 'BE2c6DCaCH1A-2FFaDcGAebh-Ed6hEea',
    database: 'railway',
    port:'18320',
    // host: 'localhost',
    // user: 'root',
    // password: 'Mehar.2001',
    // database: 'image',
    // port: '3306',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection()
    .then(connection => {
        console.log('Connected to MySQL');
    })
    .catch(error => {
        console.error('Error connecting to MySQL:', error);
    });

app.get('/api/data/plants', async (req, res) => {
    try{
        var sql = `SELECT * FROM plants`;
        const [results]  = await pool.query(sql);
        res.json(results);
    }
    catch(error) {
        res.send("ERROR: ",error);
    }
});

app.get('/api/data/plants1', async (req, res) => {
    try{
        var sql = `SELECT * FROM plants1`;
        const [results]  = await pool.query(sql);
        res.json(results);
    }
    catch(error) {
        res.send("ERROR: ",error);
    }
});

app.get('/api/data/plants2', async (req, res) => {
    try{
        var sql = `SELECT * FROM plants2`;
        const [results]  = await pool.query(sql);
        res.json(results);
    }
    catch(error) {
        res.send("ERROR: ",error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});