import { Router } from 'express';

import { booksController } from './controllers/booksController.js';
export const router = Router();


router.get('/', (req,res)=>{
    res.render('home')
})

router.get('/search', booksController.findBook)