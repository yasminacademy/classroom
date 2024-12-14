const url = new URL(location.href);

const roomUrl = new URL("https://yasmin-academy.whereby.com");
// Extract the subdomain
const subdomain = roomUrl.hostname.split('.')[0]; // Get "yasmin-academy"

const root = document.getElementById("root");
const whereby = document.createElement("whereby-embed");
// Set the subdomain attribute
whereby.setAttribute("subdomain", subdomain); 
whereby.setAttribute("room", url.pathname.substring(1) || 'your-default-room-name'); // Set room name or path
whereby.setAttribute("minimal", true);
whereby.setAttribute("style", "height: 100%;");
root.appendChild(whereby);
