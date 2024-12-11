import { Router } from 'express';
import { booksController } from './controllers/booksController.js';
import { authController } from './controllers/authController.js';
import { libraryController } from './controllers/libraryController.js';
import { isMemberMiddleware } from './middleWare/isMemberMiddleware.js';
export const router = Router();

router.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
  });

router.get('/',  booksController.homeBooks)

router.get('/allbooks',  (req,res)=>{res.render('allbooks')})

router.get('/search', booksController.findBook)


router.get('/librairie', isMemberMiddleware.loggedUser,  libraryController.librairie)

router.get('/login', (req,res)=>{res.render('login')})

router.get('/logout', authController.logout)

router.post('/loginUser', authController.loginUser)

router.post('/favoriteBook',isMemberMiddleware.loggedUser, booksController.addFavoriteBook )
