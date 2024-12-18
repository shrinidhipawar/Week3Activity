const WebSocket = require('ws');

class Server 
{
  constructor(port=8080) 
  {
    this.port = port;
    this.webSocketServer = null; 
  }

  startServer() 
  {
    this.webSocketServer = new WebSocket.Server({ port: this.port });

    console.log(`WebSocket server is running on ws://localhost:${this.port}`);

    this.webSocketServer.on('connection', (socket) => 
    {
        this.handleConnection(socket)
    });

  }

  handleConnection(socket) 
  {
    console.log("A new client connected");
    socket.send("Welcome to the WebSocket server!");

    socket.on('message', (message) => 
    {
        this.handleMessage(socket, message)
    });

    socket.on('close', () => this.handleDisconnection());

    socket.on('error', (error) => this.handleError(error));
  }

  handleMessage(socket, message) {
    console.log(`Received: ${message}`);

    const operation = message.operation; 

    switch(operation)
    {
        case "ADD":
        {
            
            break;
        }

        case "BORROW":
        {
            
            break;
        }

        case "RETURN":
        {
            
            break;
        }
    }
    // Echo the message back to the client
    socket.send(`Server received: ${message}`);
  }

  handleDisconnection() 
  {
    console.log("Client disconnected");
  }

  handleError(error) 
  {
    console.error("WebSocket error:", error);
  }
}

// Start the server
const port = 8080;
const server = new Server(port);
server.startServer();
