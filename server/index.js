import { Server, Socket } from "socket.io";


const PORT = 9000;

const io = new Server(PORT , {
   cors : {
       origin: 'http://localhost:3000',
       methods: ['GET' , 'POST']
   }
});

io.on('connection',socket =>{
    socket.on('send-changes', delta => {
        console.log(delta);
    })
    
});