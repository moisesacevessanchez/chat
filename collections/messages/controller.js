const store = require("./store")
module.exports = {
    addMessage:function (user,message) {        
        return new Promise((resolve,reject)=>{
            if (!user || !message) {
                reject("Falta usuario o mensaje")            
            } 
            const fullMessage = {
                user,
                message,
                date: new Date(),
            }
            console.log("controller.js MESSAGE ADD",fullMessage);            
            resolve(fullMessage)
            store.addText(fullMessage)
        })
    },
    getMessage:function (filterUser) {        
        return new Promise((resolve,reject)=>{
            resolve(store.getText(filterUser))
        })
    },
    editMessage:function (id,message) {
        console.log("message EDIT",id);
        return new Promise(async(resolve,reject)=>{
            if (!id || !message) {
                reject("invalid data")                
            }
            const result = await store.editText(id,message)
            resolve(result)
        })
    },
    deletMessage:function (id) {
        console.log("message DELETE",id);
        
        return new Promise(async(resolve,reject)=>{
            if (!id) {
                reject("Falta id")                
            }
            const result = await store.deletText(id)
            resolve(result)
        })        
    }
}




