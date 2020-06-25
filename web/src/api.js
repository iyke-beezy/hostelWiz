
export const loginUser = async (username, password) => {
    // const response = await fetch(REACT_APP_API_URL + '/hostelwiz/login/', {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/login/`, {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password })
    })


    if (response.ok) {
        const { token } = await response.json()
        return token
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

export const searchProperty = async (loca) => {
    console.log(loca)
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/properties/search_property/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location: loca })
    })

    if (response.ok) {
        const data = await response.json()
        return data
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

//register new user
export const registerUser = async (data) => {

    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/users/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        console.log('registraion complete')
        return true

    }
    const errMessage = await response.text()
    throw new Error(errMessage)
}

export const editUser = async (data = {}, id, token) => {

    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/users/${id}/`, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`,
        },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        return true
    }
    const errMessage = await response.text()
    throw new Error(errMessage)
}

//get property details
export const getProperties = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/properties/`, {

        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        const data = await response.json()
        //console.log(data)
        return data
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

//get properties by Hostel Managers
export const getHMProperties = async (user_id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/properties/`, {

        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        const data = await response.json()
        const final = data.filter(property => property.manager === user_id)
        //console.log(final)
        return final
    }


    const errMessage = await response.text()
    throw new Error(errMessage)
}


//get user details
export const getUser = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/users/get_user/`, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`
        }
    })
    if (response.ok) {
        const data = await response.json()
        return data
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

//rate property
export const rateProperties = async (property_id, token, number_of_stars) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/properties/${property_id}/rate_property/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`
        }
        ,
        body: JSON.stringify({ stars: number_of_stars })
    })
    if (response.ok) {

        return true
    }


    const errMessage = await response.text()
    throw new Error(errMessage)
}

//save property
export const saveProperties = async (property, token, user) => {
    console.log(property, user)
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/saved/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`
        },
        body: JSON.stringify({ property_id: property, user: user })

    })
    if (response.ok) {
        //console.log(response.json())
        return response.json()

    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

export const getSavedProperties = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/saved/get_saved/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`
        }

    })
    if (response.ok) {
        const saved = response.json()
        return saved
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

export const getMyProperties = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/hostel_managers/get_my_properties/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`
        }

    })
    if (response.ok) {
        const saved = response.json()
        return saved
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

//final Step to create hostelmanager or change customer to hostel manager

export const add_to_hostel_manager_table = async (subscriptionType, status, token,) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/hostel_managers/create_hostel_manager/`, {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({ subscriptionType: subscriptionType, status: status })
    })


    if (response.ok) {
        const { token } = await response.json()
        return token
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

//final Step to add to customer group or table


//retrieve hostel managers information
export const getHostelManager = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/users/is_manager/`, {
        method: 'POST',
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    if (response.ok) {
        const managers = await response.json()
        return managers.message
    }

    const errMessage = await response.text()
    throw new Error(errMessage)

}

export const create_hostel = async (data, token) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/properties/create_property/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        const manager = await response.json()
        return manager
    }

    const errMessage = await response.text()
    throw new Error(errMessage)

}

export const post_images = async (data, token) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/images/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Token ${token}`
        },
        body: JSON.parse(data)
    })
    if (response.ok) {
        const manager = await response.json()
        return manager
    }

    const errMessage = await response.text()
    throw new Error(errMessage)

}