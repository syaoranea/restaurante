var conn = require('./../inc/db');

module.exports = {
    
    render(req, res, error, sucess){

        res.render('contact', {
            title: 'Contato - Restaurante Saboroso!!',
            background: 'images/img_bg_3.jpg',
            h1: 'Diga Oi',
            body: req.body,
            error: error,
            sucess: sucess
        });
    },
    save(filds){
        return new Promise((resolve, reject)=>{
            
        conn.query("insert into tb_contacts (name,email,message) values (?,?,?)",[
            filds.name,
            filds.email,
            filds.message
        ],(err, results)=>{
            if(err){
                reject(err);
            }else{
                resolve(results);
            }
        });
    });
    }
}