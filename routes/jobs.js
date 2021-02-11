const express = require('express')
const router = express.Router();
const Job = require('../models/Job');

router.get('/test', (req, res) => {
  res.send('deu certo')
})

router.get('/add', (req, res) => {
  res.render('add');
})

//* detalhe da vaga
router.get('/view/:id', (req, res) => Job.findOne({
  where: {id: req.params.id}
}).then(job => {
  res.render('view',  {
    job
  })
}).catch(err => console.log(err)));

//* form da rota de envio
router.get('/add', (req, res) => {
  res.render('add');
})

//* add job via post
router.post('/add', (req, res) => {
  let { title, description, company, salary, email, new_job} =  req.body;
  
  //* jshint ignore:start */
  
  Job.create({
    title,
    description,
    company,
    salary,
    email,
    new_job
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err))
})

module.exports = router