import { Router } from 'express';
import sendEmailController from '../controllers/SendEmailController';

const router = new Router();

router.post('/send', sendEmailController.sendEmail);

export default router;
