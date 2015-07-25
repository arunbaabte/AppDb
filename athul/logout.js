db.system.js.save({
    "_id" : "getdata",
function (id) {
    db.getCollection("detail").remove({"id":id});
}
})
