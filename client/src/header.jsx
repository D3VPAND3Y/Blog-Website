import { useEffect, useContext } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { userContext } from "./userContext";

export default function Header() {
  // const [user,setUser] = useState(null);
  const {user,setUser} = useContext(userContext);

  useEffect(() => {
      fetch("https://blog-website-api-rho.vercel.app/profile", {
        credentials: "include",
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => {
            console.log(user);
            setUser(user);
          });
        }
      });
    // getUser();
  }, [setUser]);

  function logout(){
    fetch("https://blog-website-api-rho.vercel.app/logout",{
      method: "POST",
      credentials: "include",
    }).then((resp) => {
      if(resp.ok){
        setUser(null);
      }
    });
  }


    return(
        <header>
        <Link to="/" className="logo">
          MyBlog
        </Link>
        <nav>
          {user && (
            <>
            <Link to="/create" className="create">
              Create Post
            </Link>
            <a onClick={logout}>Logout</a>

            </>
          )}
          {!user && (
            <>
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/register" className="register">
                Register
              </Link>
            </>
          )}
        </nav>
      </header>
    );
}