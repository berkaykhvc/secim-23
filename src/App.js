import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PartiesScreen from './screens/PartiesScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/milletvekili" element={<PartiesScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
