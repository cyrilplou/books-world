import { Router } from 'express';
import { booksController } from './controllers/booksController.js';
import { authController } from './controllers/authController.js';
import { isMemberMiddleware } from './middleWare/isMemberMiddleware.js';
export const router = Router();

router.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
  });

router.get('/',  booksController.homeBooks)

router.get('/search', booksController.findBook)

router.get('/librairie', isMemberMiddleware.loggedUser,  booksController.librairie)

router.get('/login', (req,res)=>{res.render('login')})

router.get('/logout', authController.logout)

router.post('/loginUser', authController.loginUser)
