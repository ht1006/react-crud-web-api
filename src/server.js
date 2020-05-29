import axios from "axios";

var server_ip_address = process.env.COMPONENT_BACKEND_HOST || '0.0.0.0';
var server_port = process.env.COMPONENT_BACKEND_PORT || 8080;

export default axios.create({
    baseURL: "http://" + server_ip_address + ":" + server_port +  "/api",
    headers: {
        "Content-type": "application/json"
    }
});
