import { Router } from "express";

const router = Router();

router.get('/producto', (req, res) => res.render('productDetail'))

export default router