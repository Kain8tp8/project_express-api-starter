import { Router } from "express";
import User from "../model/user.model";
import userStroage from "../storage/users.storage"

const router = Router()

router.get('/',(req,res)=>{
    const users =userStroage.allUsers()
    res.json(users)
})

router.post('/',async(req,res)=>{
    const user:User = req.body
    userStroage.addUser(user)
    res.sendStatus(200)
})

router.delete('/',(req,res)=> {
    userStroage.deleteall()
    res.sendStatus(200)
})

router.delete('/:nickname',(req,res)=>{
    userStroage.remove(req.params.nickname)
    res.sendStatus(200)
})

export default router









