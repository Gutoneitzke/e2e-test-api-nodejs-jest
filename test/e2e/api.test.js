import {
    jest,
    expect,
    test,
    describe
} from '@jest/globals'

import supertest from 'supertest'
import Server from '../../src/server.js'

describe('API E2E Test Suite', () => {
    test.todo('GET / - should return an array with length 0')
    test.todo('POST / - should save and item and return ok')
    test.todo('GET / - should return an array with length 1')
    test.todo('DELETE / - should return an array')
    test.todo('GET / - should return an array with length 0')

    test('GET / - should return an array with length 0', async () => {
        const response = await supertest(Server)
        .get('/')

        const data = JSON.parse(response.text);
        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)

        console.log('text',data)
    })

    test('POST / - should save and item and return ok', async () => {
        const response = await supertest(Server)
        .post('/')
        .send({
            nome: "Gustavo Neitzke",
            age: 20
        })

        const expectResponse = { ok: 1 }
        expect(JSON.parse(response.text)).toStrictEqual(expectResponse)
    })

    test('GET / - should return an array with length 1', async () => {
        const response = await supertest(Server)
        .get('/')

        const data = JSON.parse(response.text);
        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(1)

        console.log('text',data)
    })

    test('DELETE / - should return an array', async () => {
        const response = await supertest(Server)
        .delete('/')

        const expectResponse = { ok: 1 }
        expect(JSON.parse(response.text)).toStrictEqual(expectResponse)
    })

    test('GET / - should return an array with length 0', async () => {
        const response = await supertest(Server)
        .get('/')

        const data = JSON.parse(response.text);
        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)

        console.log('text',data)
    })
})