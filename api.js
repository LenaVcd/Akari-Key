__path = process.cwd()

var express = require('express');

var creatorList = ['@zahirrr','@zhirrrgans','@zhirr_ajalah','@zahiranjay', '@zahirganssss','@zhirrganteng','@zahirrgantengg'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];


var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();
var { color, bgcolor } = require(__path + '/lib/color.js');

var {
	Masjid,
	ListKota
} = require('./../lib');


router.get('/search/masjid', async (req, res, next) => {

	var propinsi = req.query.provinsi,
	    page = req.query.page

		Masjid(propinsi, page)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/list-provinsi', async (req, res, next) => {

		ListKota()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})



module.exports = router
