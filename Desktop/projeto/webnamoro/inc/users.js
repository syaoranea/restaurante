var conn = require('./../inc/db');


module.exports = {
    render(req, res,error){
        res.render('admin/login', {
            title: 'Painel Administrativo',
            body: req.body,
            error: error
        });
    },

    login(email, password){
        return new Promise((resolve, reject)=>{
            conn.query("select * from tb_users where email = ?",[
                email
            ],(err, results)=>{
                if(err){
                    reject(err);
                }else{
                    if(!results.length > 0){
                        reject("usuario ou senha incorreto");
                    }
                    let row = results[0];
                    if(row.password !== password){
                        reject("Senha incorreta")
                    }else{
                        resolve(row);
                    }
                    
                }
            });
        });
    }
}