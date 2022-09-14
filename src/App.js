import { Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting/Greeting';

function App() {
  return (
    <div className="App">
      <div>Served via Rails, Consumed via React/Redux</div>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
