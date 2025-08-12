import { Router } from "express";
import { getAllUsers,registerAdmin } from '../controllers/admin.controlers'

const router =  Router();

router.get('/getallusers', getAllUsers);
router.post('/registeradmin', registerAdmin);


export default router;
