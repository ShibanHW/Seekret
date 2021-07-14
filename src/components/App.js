import './App.css';
import NavigationBar from './NavigationBar';

const store = { selectedList: [] };


function App() {
  return (
    <div className="App">
      <header className="App-headerr">
      <NavigationBar/>
      </header>
    </div>
  );
}

export default App;
