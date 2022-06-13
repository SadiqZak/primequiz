import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Pages/Home/Home';
import {Routes, Route} from 'react-router-dom';
import {QuizPage} from './Pages/QuizPage/QuizPage'
 
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/quizpage" element={<QuizPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
