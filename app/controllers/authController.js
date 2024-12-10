
import { userDatamapper } from "../dataMapper/user.datamapper.js";
export const authController = {

    
    
    async loginUser(req,res){
        
        const mail = req.body.mail
        const password = req.body.password
        //Je vérifie la présence d'un mail dans le champs.
        if(!mail || !password){
            res.render('login', )
            return
        }
        //Je vais chercher si un Utilisateur existe.
        const findUser = await userDatamapper.findOneUserMail(mail)
        //Si ce n'est pas le cas, je bloque.
        if(!findUser){
            console.log('non')
            return
        }
        //Si l'utilisateur existe, je compare avec le MDP.
        if (password !== findUser.password){
            console.log('non')
            return
        }else{

        req.session.user = findUser
         res.redirect('/librairie')

        }

},
async logout(req,res){
        
   
    req.session.user = ''
     res.redirect('/')
},


}
