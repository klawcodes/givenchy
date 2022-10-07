import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Iconic from './components/Iconic'
import Fall from './components/Fall'
import Bag from './components/Bag'
import FFooter from './components/FFooter'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Iconic />
      <Fall />
      <Bag />
    </div>
  );
}

export default App;
