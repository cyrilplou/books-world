import axios from "axios";
import { userDatamapper } from "../dataMapper/user.datamapper.js";

export const libraryController = {
    
    async librairie(req,res){
            
        // Je récup_te toutes les données relative à l'affiche "de base" nécessaire à la page Librairie.
            
        console.log(req.session.user.firstname)

                res.render('librairie')
        
},
}