let conn = require('./db');

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
    }
};