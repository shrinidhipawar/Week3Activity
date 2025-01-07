export function sendRequest(operation, data)
{
    try
    {
        const socket = new WebSocket("ws://localhost:8080");

        socket.onopen = () =>
        {
            socket.send(JSON.stringify({ operation: operation, data: data }));

            socket.onmessage = (message) =>
            {
                const messageObject = JSON.parse(message.data);
                
                switch(messageObject["status"])
                {
                    case 200: 
                    {
                        switch(messageObject["operation"])
                        {
                            case "BORROW": 
                            {
                                alert("Borrow Success!");
                                socket.close();
                            }
                            break;

                            case "INSERT":
                            {
                                alert("Insert Success!");
                                socket.close();
                            }
                            break;

                            case "RETURN":
                            {
                                alert("Return Success!");
                                socket.close();
                            }
                            break;

                            case "BORROW_LIST":
                            {
                                const borrowListEvent = new CustomEvent("borrow-list-received", { detail: messageObject["data"] });
                                window.dispatchEvent(borrowListEvent);
                                socket.close();
                            }

                        }
                    }
                    break;

                    case 400:
                    {
                        alert(messageObject["message"]);
                        socket.close();
                    }
                    break;
                }
            }
        }
    }
    catch(exception)
    {
        alert("Error in sending request!");
        console.log(exception);
    }

}