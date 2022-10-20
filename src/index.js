import Server from './server.js'

const server = Server.listen(3003)
.on("listening", () => console.log(`running at: ${server.address().port}`))
