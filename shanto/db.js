db.system.js.save(
   {
     _id: "loginFunction",
     value : 
function (email,password) {
   ReturnData = {};
  user_validation=db.getCollection("restaurants").find({"name":email,"address":password}).toArray()
  if (user_validation == 0) {
         
           return "false";
       } 
   else {
          
           return user_validation;
       }
}
   }
)