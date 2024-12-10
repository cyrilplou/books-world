import { userDatamapper } from "../dataMapper/user.datamapper.js";

export  const isMemberMiddleware = {

     loggedUser(req,res,next){
        
       if(req.session.user){
        next()
       }else{
        res.redirect('/login')
       }

        }

}
