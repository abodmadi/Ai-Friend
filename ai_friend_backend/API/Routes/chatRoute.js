import Express from 'express'
import {harryAi, index} from '../Controllers/chatControllers.js'

const chatRoute=Express.Router();

chatRoute.post('/test',index)
chatRoute.post('/Harry',harryAi)

export default chatRoute;