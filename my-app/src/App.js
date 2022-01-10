
import './App.css';
import Accordian from './accordian'

const databook = [
  {'title':'First Accordian',
   'content':'a musical instrument played by stretching and squeezing   sounded by buttons or keys '},
  {'title':'Second Accordian',
   'content':'a musical instrument played by stretching and squeezing   sounded by buttons or keys'},
  {'title':'Second Accordian',
  'content':'a musical instrument played by stretching and squeezing   sounded by buttons or keys'}
]

function App(){
  return(
    <div className="App">
      {
      databook.map((data)=>(
        <Accordian data={data}/>
      ))}
    </div>
  );
}

export default App;
