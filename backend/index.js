const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path=require("path")
const bcrypt = require("bcrypt");
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../backend/public")));
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/Book_Store');
const db = mongoose.connection;
db.on('error', ()=> console.log("Error in Connecting to Database"));
db.once('open', ()=> console.log("Connected to Database"));

app.post("/signup", async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const pass = req.body.pass;
        const cpass = req.body.cpass;
        const hashedPassword = await bcrypt.hash(pass, 10);

        const data = {
            "name": name,
            "email": email.toLowerCase(),
            "pass": hashedPassword,
            "cpass": cpass
        };

        const user = await db.collection('users').findOne({ email: email });
        if(user) {
            return res.send('<script>alert("Account already exists."); window.location.href = "login.html";</script>');        
        }
        
        if(!user){
            db.collection('users').insertOne(data, (err, collection) => {
                if (err) throw err;
                console.log("Record Inserted Successfully");
            });
            return res.send('<script>alert("Registered Successfully :-)"); window.location.href = "login.html";</script>');
        }
    } catch (error) {
        console.log(error);
        return res.redirect('signup.html');
    }
});

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.pass;

        const user = await db.collection('users').findOne({ email: email });
        if (!user) {
            return res.send('<script>alert("Invalid information! Please create account first"); window.location.href = "login.html";</script>');
        }

        const passwordMatch = await bcrypt.compare(pass, user.pass);

        if (passwordMatch) {
            app.use(express.static(path.join(__dirname, "../frontend")));
            return res.sendFile(path.join(__dirname, "../frontend", "index.html"));
        } else {
            return res.send('<script>alert("Invalid Password!"); window.location.href = "login.html";</script>');
        }
    } catch (error) {
        console.log(error);
        return res.send('<script>alert("Invalid information"); window.location.href = "login.html";</script>');
    }
});

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    res.redirect('login.html');
});

app.listen(3000, () => {
    console.log("Listening on Port 3000");
});