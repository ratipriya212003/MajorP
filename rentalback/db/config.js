const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://ratipriya212003:easydrive212003@cluster0.ranb5ae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
});
