import logo from './logo.svg';
import './App.css';
import InterStudent from './classes/InterStudent';

function App() {
  let govardhan = new InterStudent();
  govardhan.studentName = "Govardhan.K"
  govardhan.englishMarks = 78
  govardhan.sanskritMarks = 98
  govardhan.maths1AMarks = 65
  govardhan.maths1BMarks = 60
  govardhan.physicsMarks = 50
  govardhan.chemistryMarks = 45
  govardhan.calculateResult()

  
  let sathish = new InterStudent("Sathish Gowd.K",71,96,72,70,55,52)
  sathish.calculateResult()

  let nagendra = new InterStudent("Nagendra.N",90,98,75,74,58,55)
  nagendra.calculateResult()

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
