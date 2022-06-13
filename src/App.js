import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Pages/Home/Home';
import {Routes, Route} from 'react-router-dom';
import {QuizPage} from './Pages/QuizPage/QuizPage'
import { Results } from './Pages/Results/Results';
import { Rules } from './Pages/Rules/Rules';
 
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/quizpage" element={<QuizPage/>}/>
          <Route path="/resultspage" element={<Results/>}/>
          <Route path="/rulespage" element={<Rules/>}/>
        </Routes>
    </div>
  );
}

export default App;
