'use strict'

const express = require('express');
const router = express.Router();
const uploadCtrl = require('../controllers/upload');
const path = require('path');

router.post('/upload',
  uploadCtrl.upload.single('avatar'),
  function(req, res, next) {
    console.log('ROUTE file', req.file);
    return res.json({fileName: req.file.filename});
  }
);

router.get('/download-file',
  function(req, res, next) {
    let filename = req.query.filename;
    let pathPrefix = path.resolve(__dirname, `../files/${filename}`);

    res.download(pathPrefix)
  }
);

module.exports = router;