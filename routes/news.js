const express = require('express')
const {addNews, getAllNews, getNews, getSliderNews, getNewsByCategory, deleteNews, updateNews, getIperuCampusNews, getMainCampusNews} = require ('../controllers/news')
const router = express.Router()
const {protect, userRoleAuth} = require('../middleware/authMiddleware')
const {
    signup,
    verifyToken,
    signin,
    signout,
    apiAuth,
    sendVerificationCode,
    resetPassWord,
    forgotPassWord,
    authMiddleWare,
    isVerified,
    isSignedIn,
    isAdmin,
    isAuthenticated
    
    
  } = require("../controllers/auth");
  const upload = require('../controllers/multer')
// middleware to be here

router.route('/addNews',upload.array('url') /*isSignedIn, isAuthenticated, isVerified, isAdmin*/).post(addNews);
router.route('/getAllNews/:pageNo/:pageSize', /*isAdmin*/).get(getAllNews)
router.route('/getMainCampusNews/:pageNo/:pageSize').get(protect,getMainCampusNews)
router.route('/getIperuCampusNews/:pageNo/:pageSize',).get(protect,getIperuCampusNews)
router.route('/getById').get(getNews);
router.route('/getAllNews/slider').get(getSliderNews);
router.route('/getByCategory').get(getNewsByCategory);
router.route('/deleteNews').delete(deleteNews);
router.route('/updateNewsById/:newsId').put(updateNews)
module.exports = router 
