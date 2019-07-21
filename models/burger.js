var orm = require("../config/orm");

var burger = {

    selectAll: function(cb){
        orm.selectAll("burgers",res=>{
            cb(res);
        });
    },
    insertOne: function(burgerName,cb){
        orm.insertOne("burgers",burgerName,res=>{
            cb(res);
        });
    },
    updateOne: function(devouredTrue,id,cb){
        orm.updateOne("burgers",devouredTrue,id,res=>{
            cb(res);
        });
    }
};

module.exports = burger;