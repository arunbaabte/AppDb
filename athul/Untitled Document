db.system.js.save{
    "_id" : "loginFunction",
    "value" : function (email,password) {
    ReturnData = {};
   user_valid_or_not=db.getCollection("login").find({"email":email,"password":password}).toArray()
   if (user_valid_or_not == 0) {
            ReturnData.result = "false";
            return "false";
        } 
    else {
           ReturnData.result = "true";
            return user_valid_or_not;
        }
}
}
