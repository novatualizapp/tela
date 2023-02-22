import './App.css';

import IndexPage from './Pages';
// import alertify from 'alertifyjs'

function App() {

  // Alertify
  // alertify.alert('Alerta Urgente', 'Para desbloquear sua conta digite seu Usuario!');

  return (
    <div className="App">
      <header className="App-header">

        
        <IndexPage />
      </header>
    </div>
  );
}

export default App;
