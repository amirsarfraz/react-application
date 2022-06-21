import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
 const showAlert = (message, type) => {
setAlert({
  meg: message,
  type: type
})
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode is enable", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Dark mode is enable", "success");

    }
  }
  return (
<>
<Navbar title="amirsarfraz" mode={mode} toggleMode={toggleMode}/>
<div className='container'>
  <Alert alert={alert}/>
<TextForm heading ="Enter the text to analiyze" mode={mode} />
{/* <About /> */}
</div>
</>
  );
}

export default App;
