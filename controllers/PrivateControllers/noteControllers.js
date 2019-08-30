const express =  require('express')
const router = express.Router()
const {Note} = require('../../models/Note')
const {authenticateUser} = require('../../Validation/authenticate')
router.post('/notes',authenticateUser,function(req,res){
       const body = req.body
       const note = new Note(body)
       note.save()
       .then(function(note){
           res.send(note,{message:'note posted successfully'})
       })
       .catch(function(err){
           res.send(err)
       })

})
module.exports = {
    privateNoteRouter: router
}

