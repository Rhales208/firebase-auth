import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut} from "firebase/auth"

function Welcome({ user, setUser }) {
  const navigate = useNavigate();
const auth = getAuth()
  const handleLogout = () => {
      signOut(auth)
      .then(() => {
    localStorage.clear();
    navigate('/login');
  })
  .catch(err => {
      console.error(err)
  })
}

  return (
    <>
      <h1>Welcome!</h1>
      <h2>{localStorage.getItem('displayName') || user.email}</h2>
      {localStorage.getItem('uid') && (
        <img src={localStorage.getItem('avatar')} alt={"Profile picture of logged-in user"} />
      )}
      <button onClick={handleLogout}>Sign out</button>
    </>
  );
}

export default Welcome;
