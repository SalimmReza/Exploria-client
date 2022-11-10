export const setLoginJWT = (user) => {
    const cUser = {
        email: user.email
    }

    //get jwt token
    fetch(`https://assignment-11-server-xi.vercel.app/jwt`, {
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