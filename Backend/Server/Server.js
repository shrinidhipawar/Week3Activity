const ws = require('ws'); 
import { port } from '../../Common/Globals.js';
import DatabaseConnector from '../Database/DatabaseConnector.js';
import { initializeDatabase } from '../Database/InitializeDatabase.js';
import { messageHandler } from './MessageHandler.js';

class Server
{
  static webSocketServer = null; 

  static async startServer() 
  {
    Server.webSocketServer = new ws.Server( {port: port} );
    console.log("Starting server");

    Server.webSocketServer.on("connection", (socket) => 
    {
      console.log("Client connected");

      socket.on("message", (message) => 
      {
        messageHandler(socket, JSON.parse(message));
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

    await DatabaseConnector.connect();
    await initializeDatabase();
  }
}

Server.startServer();

export default Server;