const PORT = process.env.PORT || 5000;
const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const multer= require("multer");
const path= require("path");
const cors= require ("cors");
require('./upload/images/list');
require('./db/config');
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000', 'https://easydrivefront.onrender.com'] }));

const User =require("./db/Users");
const Product =require("./db/Products");
const Help=require('./db/Help');
const Owner=require('./db/Owners');

app.get("/",(req,res)=>{
    res.send("Express app is running");
});


const storage=multer.diskStorage({
  destination:function(req,file,cb){
      cb(null,'upload/images')},
      filename: function (req,file,cb){
       cb(null,`${Date.now()}-${file.originalname}`);
      }
});
const upload=multer({storage:storage});

app.use("/images",express.static("upload/images"));
app.post("/upload",upload.single("image"),(req,res)=>{
res.json({
  success:true ,
  image_url:`http://localhost:${port}/images/${req.file.filename}`,
});
});

//const {} =require('./upload/images/list');


app.post("/register", async (req, res) => {
    try {
      let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      console.log(user);
      let result = await user.save();
      result = result.toObject();
      delete result.password;
  
      res.json({
        success: true,
        message: "User registered successfully",
        token: "your_jwt_token_here", // Add the actual token generation logic
        user: result,
      });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({
        success: false,
        message: "Signup failed. Please try again.",
      });
    }
  });
  

app.post("/login",async(req,res)=>{
    console.log(req.body)
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }
        else{
            res.send("no user found");
        }
    }
    else{
        res.send("Password needed")
    }
  
}
);

app.post("/addproduct",upload.single('image'), async(req,res)=>{
   let image_filename=`${req.file.filename}`;
  console.warn(req.body);
    let product=new Product({
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        price:req.body.price,
        image: image_filename
    });
    let result= await product.save();
    res.send(result);

    
})



app.get("/list",async(req,res)=>{
  let products= await Product.find();
  if(products.length>0){
    res.send(products)
  }
  else{
    res.send({result:"no products fround"})
  }

})


app.delete('/list/:id',async(req,res)=>{
  const result=await Product.deleteOne({ _id: req.params.id})
  res.send(result);
});

// Example endpoint in Express
app.get('/api/Rental/products', async (req, res) => {
  try {
    const products = await Product.find(); // Example: Use Mongoose or your ORM to fetch products
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/submithelp',async(req,res)=>{
  try{
let help=new Help({
  name:req.body.name,
  phone:req.body.phone,
  email:req.body.email,
  message:req.body.message
});
console.log(help);
let result=await help.save();
console.log(result);
res.status(201).json({ success: true, message: 'Complaint submitted successfully' });

}
  catch{
    res.status(500).json({ success: false, message: 'Failed to submit complaint' });

  }
})

app.get('/help',async(req,res)=>{
  try{
let help= await Help.find()
if(help.length>0){
  res.json(help);
}
else{
  res.send("no complaints found")
}
  }
  catch{
    res.status(500).json({ success: false, message: 'Failed to fetch complaints' });
  }
})


app.delete('/help/:id',async(req,res)=>{
  try{
    const result=await Help.deleteOne({ _id: req.params.id})
    res.send(result)
  }
  catch(error){
console.error('error deleting the complaint',error);
  }
})


app.post('/owners',upload.single('image'),async(req,res)=>{
try{
     let image_filename=`${req.file.filename}`;
let owner=new Owner({
  ownerName:req.body.ownerName,
  ownerMobile:req.body.ownerMobile,
  productName:req.body.productName,
  description:req.body.description,
  category:req.body.category,
  price:req.body.price,
    image:image_filename
});
let result=await owner.save();
//  res.status(200).json({ success: true, message: "Owner added successfully.",owner:result });
 res.send(result);
}
catch(error){
  console.error('Error during adding:', error);
  res.status(500).json({
    success: false,
    message: "Adding failed. Please try again.",
  });
}
})


//ownerlist
app.get('/api/Rental/owners', async (req, res) => {
  try {
    const owners = await Owner.find(); // Example: Use Mongoose or your ORM to fetch products
    res.json(owners);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT,(error)=>{
    if(!error){
        console.log("server is running on port"+PORT)
    }
    else{
        console.log("error"+error);
    }
});
























