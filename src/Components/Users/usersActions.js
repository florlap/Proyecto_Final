export const GET_ALL_USERS = "GET_ALL_USERS";


export const getAllUsers = () => async dispatch => {
    try {
        return await fetch(`http://localhost:3001/users/`)
            .then(r => r.json())
            .then(data => dispatch({ type: "GET_ALL_USERS", payload: data }))
            .catch(error => console.log('Error de fetch API'))
    }
    catch (error) {
        console.log('Error de try API');
        throw new Error({ error: error.messege })
    }
}

export async function userActDes(data) {
    return await fetch('http://localhost:3001/users/ActDes', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        //  .then(res => JSON.parse(res))
        .catch(error => console.error('Error:', error))
}