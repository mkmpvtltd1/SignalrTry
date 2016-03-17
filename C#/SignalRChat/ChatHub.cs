using System;
using System.Web;
using Microsoft.AspNet.SignalR;
namespace SignalRChat
{
    public class ChatHub : Hub
    {
        public void Send(string name, string message, string asdas)
        {
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage(name, message, asdas);
        }
        public void Cordinate(string x, string y)
        {
            Clients.All.draw(x, y);
        }
    }
}