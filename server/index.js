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
        // var sql = `SELECT * FROM plants`;
        //var sql = `SELECT p.plant_id, p.plant_name, p.img, p.rating, c.color_name, c.img AS color_image FROM plants p JOIN colors c ON p.color_id = c.color_id ORDER BY p.plant_id`;
        var sql = `SELECT 
        p.plant_id,
        p.plant_name,
        p.rating,
        p.img,
        p.price,
        GROUP_CONCAT(c.color_name) AS associated_colors,
        GROUP_CONCAT(c.img) AS associated_color_images
    FROM 
        plants p
    JOIN 
        PlantColors pc ON p.plant_id = pc.plant_id
    JOIN 
        colors c ON pc.color_id = c.color_id
    GROUP BY 
        p.plant_id, p.plant_name, p.rating, p.img, p.price`;
        const [results]  = await pool.query(sql);
        res.json(results);
    }
    catch(error) {
        res.send("ERROR: ",error);
    }
});

app.get('/api/data/plants1', async (req, res) => {
    try{
        // var sql = `SELECT * FROM plants1`;
       // var sql = `SELECT p.plant_id, p.plant_name, p.img, p.rating, c.color_name, c.img AS color_image FROM plants1 p JOIN colors c ON (p.color_id = c.color_id) ORDER BY p.plant_id`;
       var sql = `SELECT 
        p.plant_id,
        p.plant_name,
        p.rating,
        p.img,
        p.price,
        GROUP_CONCAT(c.color_name) AS associated_colors,
        GROUP_CONCAT(c.img) AS associated_color_images
    FROM 
        plants1 p
    JOIN 
        PlantColors1 pc ON p.plant_id = pc.plant_id
    JOIN 
        colors c ON pc.color_id = c.color_id
    GROUP BY 
        p.plant_id, p.plant_name, p.rating, p.img, p.price`; 
       const [results]  = await pool.query(sql);
        res.json(results);
    }
    catch(error) {
        res.send("ERROR: ",error);
    }
});

app.get('/api/data/plants2', async (req, res) => {
    try{
        // var sql = `SELECT * FROM plants2`;
        //var sql = `SELECT p.plant_id, p.plant_name, p.img, p.rating, c.color_name, c.img AS color_image FROM plants2 p JOIN colors c ON (p.color_id = c.color_id) ORDER BY p.plant_id`;
        var sql = `SELECT 
        p.plant_id,
        p.plant_name,
        p.rating,
        p.img,
        p.price,
        GROUP_CONCAT(c.color_name) AS associated_colors,
        GROUP_CONCAT(c.img) AS associated_color_images
    FROM 
        plants2 p
    JOIN 
        PlantColors2 pc ON p.plant_id = pc.plant_id
    JOIN 
        colors c ON pc.color_id = c.color_id
    GROUP BY 
        p.plant_id, p.plant_name, p.rating, p.img, p.price`; 
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