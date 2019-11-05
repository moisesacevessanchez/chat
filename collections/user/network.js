const express = require("express")
const router = express.Router()
const response = require("../../network/response")
const controller = require("./controller")
router.get('/', (req, res) => {
    const filterUser = req.query.name || null    
    controller.getUser(filterUser)    
    .then(data=>{        
        response.success(req,res,data,200)
    })
    .catch(e=>{
        response.error(req,res,"Todo mal",500,e)
    })
})

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then(data=>{
            response.success(req,res,data,200)
        })
        .catch(e=>{
            response.error(req,res,"Todo mal",500,e)
        })
    })

    router.patch('/:id', (req, res) => {
        controller.editUser(req.params.id,req.body.name)        
        .then(data=>{
            response.success(req,res,data,200)
        })
        .catch(e=>{
            response.error(req,res,"Todo mal",500,e)
        })
    })
    router.delete('/:id', (req, res) => {
        controller.deletUser(req.params.id)
        .then(data=>{
            response.success(req,res,data,200)
        })
        .catch(e=>{
            response.error(req,res,"Todo mal",500,e)
        })
    })
module.exports = router