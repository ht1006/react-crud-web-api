import axios from "axios";

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

export default axios.create({
    baseURL: server_ip_address + ":"  + server_port,
    headers: {
        "Content-type": "application/json"
    }
});
