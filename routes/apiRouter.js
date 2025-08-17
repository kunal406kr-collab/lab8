const express = require('express');
const  getAllData  = require('../controllers/getalldata.js');
const getDataByPathParams = require('../controllers/getDataByPathParams.js');

const apiRouter=express.Router()

apiRouter.get('/',getAllData)

apiRouter.get('/:field/:term',getDataByPathParams)

module.exports = apiRouter;