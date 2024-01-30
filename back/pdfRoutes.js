const express = require('express')
const { createPdf, fetchPdf, sendPdf } = require('./pdfController')
const pdfRoute = express.Router()

pdfRoute.post('/createPdf', createPdf) // generate pdf
pdfRoute.get('/fetchPdf', fetchPdf) // get pdf
pdfRoute.post('/sendPdf',sendPdf) // send pdf to mail


module.exports = pdfRoute