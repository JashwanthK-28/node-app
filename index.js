const http = require("http");

const PORT = 3001;
const VERSION = process.env.APP_VERSION || "v1";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <h1>🚀 My Kubernetes App</h1>
        <p><strong>Version:</strong> ${VERSION}</p>
        <p><strong>Pod:</strong> ${process.env.HOSTNAME}</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
