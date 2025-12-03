import express from 'express';
import { protectRoute } from '../middleware/auth.js';
import { getMatches, getUserProfiles } from '../controllers/matchController.js';

const router = express.Router();

router.get('/', protectRoute, getMatches);
router.get('/user-profiles', protectRoute, getUserProfiles);

export default router;
