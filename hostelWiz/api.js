//functions for API calls to the server
//login requires username, and password

//const REACT_APP_API_URL= 'http://192.168.43.80:8000'
const REACT_APP_API_URL= 'https://hostelwiz.herokuapp.com'
//const REACT_APP_FIREBASE_API_KEY= AIzaSyCUcV5erWI5t4vvDNVYs_RdG7s-WtzUDxc
//const REACT_APP_FIREBASE_AUTH_DOMAIN= hostelwiz.firebaseapp.com
//const REACT_APP_FIREBASE_DATABASE_URL= https://hostelwiz.firebaseio.com

export const loginUser = async(username, password) => {
   // const response = await fetch(REACT_APP_API_URL + '/hostelwiz/login/', {
    const response = await fetch(`${REACT_APP_API_URL}/hostelwiz/login/`, {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username:username, password:password })
    })
      

    if (response.ok) {
        const { token } = await response.json()
        return token
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

//register new user
export const registerUser = async (data = {}) => {

    const response = await fetch(`${REACT_APP_API_URL}/hostelwiz/users/`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    const response = await fetch(`${REACT_APP_API_URL}/hostelwiz/properties/`, {

        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    if(response.ok){
        const data = await response.json()
        return data
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

//rate property
export const rateProperties = async (property_id,token,number_of_stars) => {
    const response = await fetch(`${REACT_APP_API_URL}/hostelwiz/properties/${property_id}/rate_property/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' ,
               'Authorization':token 
             }
               ,
               body: JSON.stringify({ stars:number_of_stars })
    })
    if(response.ok){
      
        return true
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

//save property
export const saveProperties = async (property_id,token,) => {
    const response = await fetch(`${REACT_APP_API_URL}/hostelwiz/properties/${property_id}/save_property/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' ,
               'Authorization':token 
             }
               
    })
    if(response.ok){
        return true
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

//final Step to create hostelmanager or change customer to hostel manager

export const add_to_hostel_manager_table = async (subscriptionType,status,token,) => {
const response = await fetch(`${REACT_APP_API_URL}/hostelwiz/hostel_managers/create_hostel_manager/`, {
    method: 'POST',
    headers: {

        'Content-Type': 'application/json',
        'Authorization':token 
    },
    body: JSON.stringify({ subscriptionType:subscriptionType, status:status })
})
  

if (response.ok) {
    const { token } = await response.json()
    return token
}

const errMessage = await response.text()
throw new Error(errMessage)
}

//final Step to add to customer group or table


