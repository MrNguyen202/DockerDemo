const express = require('express');
const mysql = require('mysql2'); // Thay mysql bằng mysql2
const app = express();

const db = mysql.createConnection({
  host: 'mysql',
  user: 'user',
  password: 'password',
  database: 'mydb'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => res.send('Node.js with MySQL'));
app.listen(3000, () => console.log('Server running on port 3000'));