const express = require('express');
const router = express.Router();
const connection = require('../bin/db');

/* GET home page. */
router.post('/', (req, res, next) => {
    const { nombre, pais } = req.body;

    connection.query(
      'INSERT INTO registro(nombre, pais) values(?, ?)', [nombre, pais],
      (err, results, fields) => {
          if(err) res.json({ message: 'error' });
          if(results) res.json({ message: 'Insercion exitosa' });
      }
    );
});

module.exports = router;
