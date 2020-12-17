const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


var contacts = { "contacts" : [ 
                { "_id" : 1, "name": "Marc", "email": "marc.battistello@gmail.com", "phone": { "mobile": "518-951-6809" } },
                 { "_id" : 2, "name": "Marc2", "email": "marc.battistello2@gmail.com", "phone": { "mobile": "2518-951-6809" } } 
                ] };

app.get("/api/contacts", function(req, res) {

  res.status(200).json( contacts );

});
