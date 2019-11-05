const db = require("mongoose")
const model = require("./model")
db.connect("mongodb+srv://moises:moises1981frasier@clases-uhn67.mongodb.net/chat", { useNewUrlParser: true, useUnifiedTopology: true } )
console.log("Conectado a DB Chat");


module.exports = {
    addText:function (message) {
        const myMessage = new model(message)
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
    editText:async function (id, message) {
        const foudMessage = await model.findOne({_id:id})
        foudMessage.message = message
        const newMessage = await foudMessage.save()
        return newMessage
        
    },
    deletText:function (id) {
        return model.deleteOne({_id:id})
        
    }
}



