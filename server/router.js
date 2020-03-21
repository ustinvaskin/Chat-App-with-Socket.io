const express = require('express') // express 
const router = express.Router() // getting router and immeidetly calling it 

// get request 

router.get('/', (req, res) => {
  res.send('server is up and running')
})


//export it 
module.exports = router