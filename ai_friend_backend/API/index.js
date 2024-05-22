import Express from 'express'
import chatRoute from './Routes/chatRoute.js'
const app = Express();

app.use(Express.json());

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log('Running on the port:'+ PORT);
})

app.use('/api/chat',chatRoute);