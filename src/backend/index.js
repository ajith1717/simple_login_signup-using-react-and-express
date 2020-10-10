const express = require("express");
const app = express();
const cors = require('cors');
const fs = require('fs');
const { raw } = require("express");
app.use(express.json());
app.use(cors())

app.post("/signup",(req,res) =>{
    const read = fs.readFileSync("data.json");
    const convert = JSON.parse(read)
    // res.send(convert)
    for(var i in convert){
        if(req.body.email==convert[i].email){
            return res.json("ur account is exist")
        }else if (req.body.email=="" && req.body.name=="" && req.body.password==""){
            return res.json("enter to see output")
        }
    }
    convert.push(req.body)
    const write = fs.writeFileSync("data.json",JSON.stringify(convert,null,4));
    return res.json("succssfully created");



})


app.post("/login",(req,res)=>{
    const read = fs.readFileSync("data.json");
    const convert = JSON.parse(read)
    const password = req.body.password;
    const email = req.body.email;
    console.log(password)
    console.log(email)

    for( var i in convert){
        console.log(i,convert[i].email)
        if (email == convert[i].email ){
            
            if(password  == convert[i].password){
                return res.send ("logged in successfully")
            }else {
                return res.send ("loged in failed")

            }
        }

    }
    
})



const port = 3990;
app.listen(port);
console.log("completed")



// app.post("/login",(req,res)=>{
//     const read = fs.readFileSync("data.json");
//     const convert = JSON.parse(read)
//     const password = req.body.password;
//     const email = req.body.email;
//     console.log(password)
//     console.log(email)

//     for( var i in convert){
//         console.log(i,convert[i].email)
//         if (email == convert[i].email ){
            
//             if(password  == convert[i].password){
//                 return res.send ("complete")
//             }else {
//                 return res.send ("incomplete")

//             }
//         }

//     }
    
// })







// app.get("/ajith",(req,res)=>{
//     	res.send("i am ajith");
//     })


// app.get("/ajith/:id",(req,res)=>{
//     const read = fs.readFileSync("data.json");
//     const convert = JSON.parse(read)
//     const id =req.params.id;
//     res.send(convert[id]);
// })

// app.post("/ajith/:id",(req,res)=>{
//     const read = fs.readFileSync("data.json");
//     const convert = JSON.parse(read)
//     const id = req.params.id;
//     const name = req.body.name;
//     console.log(req.body,req.body.name,name)
//     if (name==convert[id]){
//         return res.send("complete")
//     }else {
//         return res.send("incomplete")
//     }
    // res.send(convert[id]);
    // res.send(convert);

// })





// app.post("/login",(req,res)=>{
//     const read = fs.readFileSync("data.json");
//     const convert = JSON.parse(read)
//     const password = req.body.password;
//     const email = req.body.email;
//     console.log(password)
//     console.log(email)

//     for( var i in convert){
//         console.log(i,convert[i].email)
//         if (email == convert[i].email ){
            
//             if(password  == convert[i].password){
//                 return res.send ("complete")
//             }else {
//                 return res.send ("incomplete")

//             }
//         }

//     }
    
// })




// app.post("/sign",(req,res)=>{
//     const read = fs.readFileSync("data.json");
//     const convert = JSON.parse(read)
//     const password = req.body.password;
//     const email = req.body.email;
//     console.log(password)
//     console.log(email)
//     const dict = {
//         "email" : email,
//         "password" : password
//     }
//     for (var i in convert){
//         if (dict[email]==convert[i].emill){
//              return res.send("already created")
//         }convert.push(dict)
//     }
    
//     const write =fs.writeFileSync("data.json",JSON.stringify(convert,null,4));
//     res.send("create sucessfully")

// })



