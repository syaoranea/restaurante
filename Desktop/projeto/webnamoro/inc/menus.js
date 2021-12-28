let conn = require('./db');
const { save } = require('./reservation');
var path = require('path');
module.exports = {
    getMenus(){
        return new Promise((resolve, reject)=>{
            conn.query(
                "select * from tb_menus ORDER BY title",
                (err, results)=> {
                    if(err){
                        reject(err);
                    }
                    resolve(results);
                });
        });
    },
        save(fields, files){
            return new Promise((resolve, reject)=>{
                fields.photo = `images/${path.parse(files.photo.path).base}`;
                conn.query(
                    "INSERT INTO tb_menus (title, description, price, photo) VALUES (?,?,?,?)",
                    [
                    fields.title,
                    fields.description,
                    fields.price,
                    fields.photo
                    ],(err, results)=> {
                        if(err){
                            console.log(err);
                            reject(err);

                        }else{
                            resolve(results);
                        }
                    });
            });          
    }
};