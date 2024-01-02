// import axios from 'axios'

export function PostsShow(props) {
  const updatePost = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onUpdatePost(props.post.id, params)
    console.log('updating post...')
  }

  const destroyPost = () => {
    console.log('destroying post...')
    props.onDestroyPost(props.post)
  }

  return (
    <div>
      {/* <p><b>id: </b>{props.post.id}</p>
      <p><b>title: </b>{props.post.title}</p> */}

      <div>
        <form onSubmit={updatePost}>
          <p>title: <input type="text" name="title" defaultValue={props.post.title} /></p>
          <p>body: <input type="text" name="body" defaultValue={props.post.body} /></p>
          <p>image: <input type="text" name="image" defaultValue={props.post.image}/></p>
          <button>Update Post</button>
        </form>
        <br />
        <button onClick={destroyPost}>Remove Post</button>
      </div>
    </div>
  );
}