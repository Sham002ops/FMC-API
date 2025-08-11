import { Router } from "express";
import { getAllUsers } from '../controllers/admin.controlers'

const router =  Router();

router.get('/getallusers', getAllUsers);


export default router;
