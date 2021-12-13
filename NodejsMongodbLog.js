const express =  require("express")
const app=express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910216');
const schema={
    name:String,
    age:Number,
    health:String,
    hobby:String
}
const mybeta = mongoose.model('cat1s', schema);
// const kitty = new mybeta({ name: 'testZildjian2' });
// kitty.save()

app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    res.send(req.query)
    console.log(req.query)
    const kitty = new mybeta({ name: req.query.first,health:req.query.second });
    kitty.save()
})
app.listen(1216)
