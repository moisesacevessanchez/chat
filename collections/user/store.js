const model = require("./model")
module.exports = {
    addText:function (user) {
        const myMessage = new model(user)
        myMessage.save()
        },
    getText:async function (filterUser) {        
        let filter = {}
        if (filterUser !== null) {
            filter = {user:filterUser}            
        }
        const result = await model.find(filter)
        return result
    },
    editText:async function (id, name) {
        const foundUser = await model.findOne({_id:id})
        foundUser.name = name
        const newName = await foundUser.save()
        return newName
        
    },
    deletText:function (id) {
        return model.deleteOne({_id:id})
        
    }
}



