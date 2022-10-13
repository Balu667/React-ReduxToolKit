import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PostList } from './components/Posts/PostList';
import {PostForm} from './components/PostForm';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PostForm />
     <PostList />
    </div>
    </Provider>
  );
}

export default App;
