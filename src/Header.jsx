import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All Posts</a> | <a href="#posts-new">New Post</a> | <Link to="/about">About</Link>
    </header>
  );
}
