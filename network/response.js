module.exports = {
    success:function (req,res,message,status,) {
        res.status(status || 201).send({
            error:"",
            body:message,
        })        
    },
    error:function (req,res,message,status,details) {
        console.log(details);        
        res.status(status || 400).send({
            error:message,
            body:"",
        })        
    }
}