import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }
  }
  return (
<>
<Navbar title="amirsarfraz" mode={mode} toggleMode={toggleMode}/>
<div className='container'>
  <Alert alert="This is Alert"/>
<TextForm heading ="Enter the text to analiyze" mode={mode} />
{/* <About /> */}
</div>
</>
  );
}

export default App;
