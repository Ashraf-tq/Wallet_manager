

const userModel = (name,email,password)=>{
    var model = {}
     model[name]={password:password,email:email},{start:"start"}
    return model ;
}

module.exports = userModel;