import axios from 'axios';
import React, { useState } from 'react';

function Post() {
  const [title, setTitle] = useState('');
  //  const [userId, setUserid] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, content };
    axios.post('https://repechaje-backend.herokuapp.com/posts', post).then((res) => {
      console.log(res);
      // eslint-disable-next-line no-undef
      localStorage.setItem('post', JSON.stringify(res.data));
    });
  };
  return (
    <div className="post">
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="titulo" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input
          type="text"
          id="content"
          placeholder="contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">crear post</button>
      </form>
    </div>
  );
}
export default Post;
