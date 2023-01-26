const express = require('express');
const {addHost, getAllHosts, deleteHost, updateHost} = require('../controllers/host');
const router = express.Router()

router.route('/addHost').post(addHost);
router.route('/getAllHosts').get(getAllHosts);
router.route('/deleteHostById').delete(deleteHost);
router.route('/updateHostById').put(updateHost);

module.exports = router;