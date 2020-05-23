//functions for API calls to the server
//login requires username, and password
export const loginUser = async (username, password) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/login/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })

    if (response.ok) {
        const { token } = await response.json()
        return token
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

export const registerUser = async (data = {}) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/users/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    console.log(data)
    if (response.ok) {
        console.log(data)
        return true
    }
    const errMessage = await response.text()
    throw new Error(errMessage)
}