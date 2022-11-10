export const setLoginJWT = (user) => {
    const cUser = {
        email: user.email
    }

    //get jwt token
    fetch(`http://localhost:5000/jwt`, {
        method: 'POST',
        headers: {
            'content-type': ' application/json'
        },
        body: JSON.stringify(cUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('token', data.token);

        })
}