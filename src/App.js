import './App.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from './components/Header';
import Primary from './components/Primary';
import Secondary from './components/Secondary';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <div className="row">
        <div className="primary">
          <Primary  />
        </div>
        <div className="secondary">
          <Secondary />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
