import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import ClockTime from './components/ClockTime'
function App() {
  return (
    <center className="App">
      <ClockHeading/>
      <ClockSlogan/>
      <ClockTime/>
    </center>
  );
}

export default App;
