import { Link } from "react-router-dom";


export function Header() {
  return (
    <header>
      {/* <a href="#">Home</a> | <a href="#posts-index">All Posts</a> |  */}
      <Link to="/">Home</Link> | <Link to="/posts/new">New Post</Link> | <Link to="/about">About</Link> | <Link to="/login">Log In</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/logout">Log Out</Link> 
    </header>
  );
}
