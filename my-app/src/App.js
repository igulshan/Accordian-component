import './App.css';
import Accordian from './accordian';

const Databook = [{
  'text': "wgat us fkf fufnke kgjfwe,g ewfekfdmfl jhyf jjddm uji kjg has great taste in mudic , i have been a fan of",
  'title':"First Accordian"},
  {'text' : 'wgat us fkf fufnke kgjfwe,g ewfekfdmfl jhyf jjddm uji kjg ',
   'title' : 'Second Accordian'},
   {'text' : 'wgat us fkf fufnke kgjfwe,g ewfekfdmfl jhyf jjddm uji kjg ',
   'title' : 'Third Accordian'}
  
]

function App() {
  return (
    <div className="App">
      <div className='container'>
        {Databook.map((data)=>(
        <Accordian  databook ={data}/>
        ))}
      </div>

    </div>
  );
}

export default App;
