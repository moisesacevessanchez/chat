const store = require("./store")
module.exports = {
    addUser:function (name) {        
        return new Promise((resolve,reject)=>{
            if (!name) {
                reject("Falta Nombre")            
            } 
            const fullMessage = {
                name
            }
            console.log("controller.js user ADD",fullMessage);            
            resolve(fullMessage)
            store.addText(fullMessage)
        })
    },
    getUser:function (filterUser) {        
        return new Promise((resolve,reject)=>{
            resolve(store.getText(filterUser))
        })
    },
    editUser:function (id,user) {
        console.log("message EDIT",id);
        return new Promise(async(resolve,reject)=>{
            if (!id) {
                reject("invalid data")                
            }
            const result = await store.editText(id,user)
            resolve(result)
        })
    },
    deletUser:function (id) {
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




