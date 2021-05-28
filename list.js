const axios = require('axios')
const cheerio = require('cheerio')

async function ListKota() {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.dream.co.id/sim`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let daftar = []
 	$('#province > option').get().map((rest) => {
         daftar.push($(rest).text())
         })
     let result = []
     for (let i = 0; i < daftar.length; i++) {
          result.push({
              provinsi: daftar[i]
          })
     }
            
        const res = {
            status: 200,
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}

module.exports = ListKota