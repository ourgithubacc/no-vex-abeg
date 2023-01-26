const express =  require('express')
const {uploadEvent, getAllEvents, getEventByTitle, getEventsByHost, deleteEvent, updateEvent, getIperuCampusEvents, getMainCampusEvent} = require('../controllers/event')
const router = express.Router();
const{protect, userRoleAuth} = require('../middleware/authMiddleware')
const upload = require('../controllers/multer')
router.route('/uploadEvent',upload.array('eventImage')).post(uploadEvent);
router.route('/getAllEvents/:pageNo/:pageSize').get(protect,getAllEvents);
router.route('/getEventbyTitle').get(getEventByTitle);
router.route('/getEventsByHost').get(getEventsByHost);
router.route('/deleteEvent').delete(deleteEvent);
router.route('/updateEvent').put(updateEvent);
router.route('/getIperuCampusEvents/:pageNo/:pageSize').get(protect,getIperuCampusEvents)
router.route('/getMainCampusEvents/:pageNo/:pageSize').get(protect,getMainCampusEvent)

module.exports = router;
