interface Subscription {
    name: string
    email: string

}

interface fetchResponse {
    id: number,
    createdAt: string
}

async function Createsub(evt: Event) {
    evt.preventDefault()
    let name: string = (document.querySelector('#txtname') as HTMLInputElement).value
    let email: string = (document.querySelector('#txtEmail') as HTMLInputElement).value
    let subscription: Subscription = { name, email };

    const resp = await fetch("https://reqres.in/api/users",
        {
            method: 'POST',
            body: JSON.stringify(subscription)
        })
    const data = await resp.json()

    if (data.id) {
        document.querySelector("#status").innerHTML =
            `<div class='alert alert-success w-25 mt-5 mx-auto' role='alert'>You are suscribed with subscription ${data.id}</div>`
    } else {
        document.querySelector("#status").innerHTML =
            `<div class='alert alert-danger w-25 mt-5 mx-auto' role='alert'>There was a problem</div>`
    }

    setTimeout(() => { document.querySelector("#status").innerHTML = '' }, 5000)
}

export default Createsub


