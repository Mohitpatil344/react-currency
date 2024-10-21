import { useState } from 'react';
import './App.css';
import { useFetch } from '../hooks/useFetch';
import { usePrev } from '../hooks/useprev';

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
    <div>
      <h1>Posts</h1>
      <button onClick={() => setCurrentPost(1)}>Post 1</button>
      <button onClick={() => setCurrentPost(2)}>Post 2</button>
      <button onClick={() => setCurrentPost(3)}>Post 3</button>

      <div style={{ marginTop: '20px' }}>
        <h2>Post Details</h2>
        <p><strong>Title:</strong> {finalData?.title}</p>
        <p><strong>Body:</strong> {finalData?.body}</p>
      </div>
    </div>
  );
}

export default App;
