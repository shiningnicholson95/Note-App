const express =  require('express')
const router = express.Router()
const {Note} = require('../../models/Note')
router.post('/notes',function(req,res){
       const body = req.body
       const note = new Note(body)
       note.save()
       .then(function(note){
           res.send(note)
       })
       .catch(function(err){
           res.send(err)
       })

})
// router.edit('/edit:id',function(req,res){
//     const body = req.body
// })
module.exports = {
    publicNoteRouter: router
}

