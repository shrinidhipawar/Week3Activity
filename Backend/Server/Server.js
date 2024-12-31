const ws = require('ws'); 
import { port } from '../../Common/Globals.js';
import { messageHandler } from './MessageHandler.js';

class Server
{
  static webSocketServer = null; 

  static startServer() 
  {
    Server.webSocketServer = new ws.Server( {port: port} );
    console.log("Starting server");

    Server.webSocketServer.on("connection", (socket) => 
    {
      console.log("Client connected");

      socket.on("message", (message) => 
      {
        messageHandler(JSON.parse(message));
      }); 

      socket.on("close", () => 
      {
        console.log("Client disconnected");
      })

      socket.on("error", (error) => 
      {
        console.log("Websocket error: ", error);
      });

    });
  }
}

Server.startServer();

export default Server;