import {response, Router} from 'express'
import { createUserUserController } from './useCases/CreateUser'

const router = Router()



router.post('/users', (req, res) =>{
    return createUserUserController.handle(req,res)
})



export {router}