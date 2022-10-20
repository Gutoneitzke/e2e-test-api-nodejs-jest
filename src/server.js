import { createServer } from 'http'

async function handler(request, response) {
    response.end('Hello world')
}

export default createServer(handler)