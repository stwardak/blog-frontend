

export function PostsNew(props) {
  const createPost = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onPostCreate(params)
    event.target.reset()
    
    console.log('creating post')
  }

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={createPost}>

        
        <p>Title: <input type="text" name = "title" /></p>
        <p>Body: <input type="text" name = "body" /></p>
        <p>Image URL: <input type="text" name = "image" /></p>




        <button>Submit</button>
      </form>
    </div>
  );
}
