const express=require('express');
const recruiterRouter=express.Router();
const {signup,login,protectRoute,logout}=require('../controllers/authController')
const {getRecruiterById}=require('../controllers/recruiterController');

recruiterRouter
.route('/signup')
.post(signup);

recruiterRouter
.route('/login')
.post(login);

recruiterRouter
.route('/:id')
.get(protectRoute,getRecruiterById);

recruiterRouter
.route('/logout')
.get(logout);

module.exports=recruiterRouter;