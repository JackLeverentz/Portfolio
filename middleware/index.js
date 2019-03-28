var middlwareObj = {};
 
// Sign in middlware
middlwareObj.isLoggedIn = function(req, res, next){
   if(req.isAuthenticated()){
       return next();
   }
   res.redirect("/login");
}
   
module.exports = middlwareObj;