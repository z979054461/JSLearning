// WebSocket协议本身不要求同源策略（Same-origin Policy），也就是某个地址为http://a.com的网页可以通过WebSocket连接到ws://b.com。但是，浏览器会发送Origin的HTTP头给服务器，服务器可以根据Origin拒绝这个WebSocket请求。所以，是否要求同源要看服务器端如何检查。

// 导入WebSocket模块:
const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 3000
});

wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`,ws);
    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);
        ws.send(`ECHO: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    })
});