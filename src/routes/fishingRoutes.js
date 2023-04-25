import { Router } from 'express';
import CapturedEmailController from '../controllers/FishingController';

const router = new Router();

router.get('/:email', CapturedEmailController.handleFishing);

export default router;
