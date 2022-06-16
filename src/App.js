import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
<>
<Navbar title="amirsarfraz"/>
<div className='container'>
<TextForm heading ="Enter the text to analiyze" />
</div>
</>
  );
}

export default App;
