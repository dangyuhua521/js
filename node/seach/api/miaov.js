const  express = require('express');
const router = express.Router();

// /miaov/miaov-jiagnshi
router.get('/miaov-jiangshi',(req,res) => {
	res.send('jiangshi')
})

module.exports = router;