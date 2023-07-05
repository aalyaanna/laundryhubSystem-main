var express = require("express");
const session = require('express-session');
var router = express.Router();
var reservationRouter = require('./routes/reservation');

const  credential = {
    email : "admin@gmail.com",
    password : "admin123"
}

// Set up session middleware
router.use(session({
    secret: 'secret-key',
    resave: true,
    saveUninitialized: true
  }));

// login user
router.post('/login', (req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        // res.end("Login Successful!");
    }else{
        res.end("Invalid User.")
    }
});

// route for dashboard
router.get('/dashboard', (req, res) => {
    if(req.session.user){
        res.render('dashboard', {user : req.session.user})
    }else{
        res.send("Unauthorized User.")
    }
})

// route for home
router.get('/home', (req, res) => {
    if(req.session.user){
        res.render('home')
    }else{
        res.send("Unauthorized User.")
    }
})

// route for reservation
router.get('/reservation', (req, res) => {
    if(req.session.user){
        res.render('reservation')
    }else{
        res.send("Unauthorized User.")
    }
})

router.use('/reservation', reservationRouter);

// route for logout
router.get('/logout', (req ,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base', { title: "Express", logout : "Logout Successfully!"})
        }
    })
})

module.exports = router;