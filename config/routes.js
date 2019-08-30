const express = require('express')
const router = express.Router()
const {userRouter} = require('../controllers/PrivateControllers/userControllers')
const {publicNoteRouter} = require('../controllers/PublicControllers/noteController')
const {privateNoteRouter} = require('../controllers/PrivateControllers/noteControllers')
 router.use('/users',userRouter)
 router.use('/private-notes',privateNoteRouter)
 router.use('/public-notes',publicNoteRouter)
module.exports = {
    routes: router
}