
export function PostsIndex(props) {
  

  return (
    <div id="posts-index">
      <h1>All Posts</h1>
     
      {props.posts.map(post => (
        <div key={post.id}>
          <h2>title: {post.title}</h2>
          <p>body: {post.body}</p>
         <p><img src={post.image} /></p>
          <button onClick={ () =>props.onShowPost(post)}>Show Post</button>
        </div>
      ))}
    </div>
  );
}
