import { createServer } from 'http'
import { once } from 'event'
const Database = new Map()

function respondJson(data, response){
    return response(JSON.stringify(data))
}

async function handler(request, response) {
    const { method } = request

    if(method === 'GET')
    {
        return respondJson([...Database.values()], response);
    }

    if(method === 'POST')
    {
        const body = JSON.parse(await once(request, 'data'))
        console.log('recebido',body)
        return respondJson({ ok: 1 });
    }

    if(method === 'DELETE')
    {
        return respondJson({ ok: 1 });
    }
}

export default createServer(handler)