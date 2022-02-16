export default function Welcome({user}) {
console.log(user) //emil,displayName,photoURL
    return( 
        <>
    <h1> Welcome</h1>
    <h2>{user.displayName || user.email}</h2>
    {user.photoURL &&
    <img src={user.photoURL}
     alt="profile picture of logged-in user"/>}
    </>
    )  
    }  