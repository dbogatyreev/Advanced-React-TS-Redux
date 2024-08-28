import './App.css';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

function App() {


  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;
