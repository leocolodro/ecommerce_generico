import { Router } from "express";

const router = Router();

router.get('/login', (req, res) => res.render('login'))
router.get('/registro', (req, res) => res.render('register'))

export default router
