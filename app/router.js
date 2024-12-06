import { Router } from 'express';

import { booksController } from './controllers/booksController.js';
export const router = Router();


router.get('/',  booksController.homeBooks)

router.get('/search', booksController.findBook)

router.get('/librairie',  booksController.librairie)
