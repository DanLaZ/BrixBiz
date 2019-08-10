var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
<<<<<<< HEAD
  app.get("/signup", authController.signup);

  app.get("/signin", authController.signin);
=======
 
    app.get('/signup', authController.signup);
    
    app.get('/signin', authController.signin);
    
    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }))
    
    app.get('/dashboard',isLoggedIn, authController.dashboard);
>>>>>>> 8fc54293040c0bed7f0bc48b62103507aee2e3e6

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",
      failureRedirect: "/signup"
    })
  );

  app.get("/dashboard", isLoggedIn, authController.dashboard);

<<<<<<< HEAD
  app.get("/home", isLoggedIn, function(req, res) {
    res.send("this route is protected");
  });

  app.get("/logout", authController.logout);

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",

      failureRedirect: "/signin"
    })
  );
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
};
=======
        failureRedirect: '/signin'      
    }));

    app.post("/formsubmit", function(req, res) {
        req.body.email;
        req.body.firstname;
        req.body.lastname;
        req.body.password;
        res.send('completed');
    })
};

function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated()){
        return next();
    }   
    res.redirect('/signin');
 
}
>>>>>>> 8fc54293040c0bed7f0bc48b62103507aee2e3e6
