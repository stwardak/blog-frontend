import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';
import { Modal } from './Modal';
import { PostsShow } from './PostsShow';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Login } from './Login';
import { LogoutLink } from './LogoutLink';
import { Signup } from './Signup';



export function Content() {
  const [posts, setPosts] = useState([]);  
  const [currentPost, setCurrentPost] = useState({})
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);  

  const handleIndexPosts = () => {    
    axios.get('http://localhost:3000/posts.json').then(response => {         
      console.log(response.data)
      setPosts(response.data)
    })
  }

  const showModal = (thePost) => {
    console.log(thePost)
    setCurrentPost(thePost);
    console.log('showing modal');
    setIsPostsShowVisible(true)
  }

  const closeModal = () => {    
    setIsPostsShowVisible(false)
  }

  const handlePostCreate = (params) => {
    console.log('handling posts create')
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      setPosts([...posts, response.data])
    })
  }

  const handleUpdatePost = (id, params) => {
    console.log('handling update post')
    axios.patch("http://localhost:3000/posts/" + id + ".json", params).then(response => {
      console.log(response.data)
      setPosts(
        posts.map(post => {
          if (post.id === response.data.id) {
            return response.data
          } else {
            return post
          }
        })
      )
      closeModal()
    })
  }

  const handleDestroyPost = (post) => {
    console.log(post)
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then(response => {
      console.log(response.data)
      setPosts(posts.filter(r => r.id !== post.id))
      closeModal()
    })
  }
  useEffect(handleIndexPosts, [])

  return (
    <div>
      <Routes>
       <Route path="/about" element={<About />} />
      </Routes>
      <Signup/>
      <Login/>
      <LogoutLink/>
      <PostsNew onPostCreate={handlePostCreate}/>
      <br />
      <br />
      <br />
      <br />
      {/* { <button onClick={handleIndexPosts}>posts from API</button> } */}
      
      <PostsIndex posts={posts} onShowPost={showModal}/>
      <Modal show={isPostsShowVisible} onClose={closeModal}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
    </div>
  );

}