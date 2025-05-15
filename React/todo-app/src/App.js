import './App.css';
import AppRouter from './componets/AppRouter';
import Header from './componets/Header';
import Todo from './componets/todo';
import { BrowserRouter  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      {/* Calling Todo components */}
      <BrowserRouter>
        <Header /> 
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
