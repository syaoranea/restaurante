var con = require('./../inc/db');
module.exports = {
    dasboard(){
        return new Promise((resolve, reject) =>{
            con.query(`SELECT
            (SELECT COUNT(*) FROM tb_contacts) AS nrcontacts,
            (SELECT COUNT(*) FROM tb_menus) AS nrmenus,
            (SELECT COUNT(*) FROM tb_reservations) AS nrreservations,
            (SELECT COUNT(*) FROM tb_users) AS nrusers;
            `,
            (err, results)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(results[0]);
                }
            });
        });
    },
    getParams(req, params){
        return Object.assign({}, {
        menus: req.menus,
        user: req.session.user
    }, params);
},
    getMenus(req){

        let menus = [
            {
                text: "Tela inicial",
                href: "/admin/",
                icon: "home",
                active: false
            },
            {
                text: "Menus",
                href: "/admin/menus",
                icon: "cutlery",
                active: false
            },
            {
                text: "Reservas",
                href: "/admin/reservations",
                icon: "calendar-check-o",
                active: false
            },
            {
                text: "Contatos",
                href: "/admin/contacts",
                icon: "comments",
                active: false
            },
            {
                text: "Usuarios",
                href: "/admin/users",
                icon: "users",
                active: false
            },
            {
                text: "E-mails",
                href: "/admin/emails",
                icon: "envelope",
                active: false
            }
       
     ];
     menus.map(menu =>{
         if (menu.href === `/admin${req.url}`) menu.active = true;
     })
     return menus;

    }
    
}