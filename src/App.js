import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Pages/Home/Home';
import {Routes, Route} from 'react-router-dom';
import {QuizPage} from './Pages/QuizPage/QuizPage'
import { Results } from './Pages/Results/Results';
 
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/quizpage" element={<QuizPage/>}/>
          <Route path="/resultspage" element={<Results/>}/>
        </Routes>
    </div>
  );
}

export default App;
