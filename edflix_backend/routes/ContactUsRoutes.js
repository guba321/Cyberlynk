import express from 'express';
import { contactUs } from '../controllers/ContactUsController.js';
const router = express.Router();

router.post('/', contactUs);

export default router; 