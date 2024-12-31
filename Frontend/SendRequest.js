export function sendRequest(operation, data)
{
    try
    {
        const socket = new WebSocket("ws://localhost:8080");

        socket.onopen = () =>
        {
            socket.send(JSON.stringify({ operation: operation, data: data }));
        }
    }
    catch(exception)
    {
        alert("Error in sending request!");
        console.log(exception);
    }

}