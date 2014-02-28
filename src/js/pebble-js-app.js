// Function to send a message to the Pebble using AppMessage API
function sendMessage() {
	Pebble.sendAppMessage({0: 0, 1: "Hi Pebble, I'm a Phone!"});
}


// Called when JS is ready
Pebble.addEventListener("ready",
							function(e) {
							});
												
// Called when incoming message from the Pebble is received
Pebble.addEventListener("appmessage",
							function(e) {
								console.log("Received Status: " + e.payload[0]);
								console.log("Received Message: " + e.payload[1]);
								sendMessage();
							});