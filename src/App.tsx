import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './Root';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Root/>
      </BrowserRouter>
    </div>
  );
}

export default App;
