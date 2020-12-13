'use strict'
const multer = require('multer');
const config = require('../../config/index');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('__dirname', __dirname);
    console.log('DESTINATION FILE', file);
    cb(null, config.uploadPath)
  },
  filename: function (req, file, cb) {
    console.log('FILENAME FILE', file)
    cb(null, `${Date.now()}-${file.originalname}`)
  }
});

let upload = multer({ storage: storage })

module.exports = {
  uploadFile: uploadFile,
  storage: storage,
  upload: upload
};


function uploadFile(req, res, next) {

}
