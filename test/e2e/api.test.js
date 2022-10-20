import {
    jest,
    expect,
    test,
    describe
} from '@jest/globals'

import supertest from 'supertest'
import Server from '../../src/server.js'

describe('API E2E Test Suite', () => {
    test.todo('GET / - should return an array')
    test('GET / - should return an array', async () => {
        const response = await supertest(Server)
        .get('/')

        const data = JSON.parse(response.text);
        expect(data).toBeInstanceOf(Array)

        console.log('text',data)
    })
    test.todo('POST / - should save and item and return ok')
    test('POST / - should save and item and return ok', async () => {
        const response = await supertest(Server)
        .post('/')
        .send({
            nome: "Gustavo Neitzke",
            age: 20
        })

        const expectResponse = JSON.stringify({ "ok": 1 });
        expect(response.text).toStrictEqual(expectResponse)
    })
    test.todo('DELETE / - should return an array')
})