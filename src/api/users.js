import {url} from "./connection"

export const index = async () => {
    const response = await fetch(`${url}/users`, {
        method: "GET",
        headers: {
            Accept: 'application/json'
        }
    })
    return await response.json()
}


export const store = async (body) => {
    const response = await fetch(`${url}/users`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
    })
    return await response.json()
}