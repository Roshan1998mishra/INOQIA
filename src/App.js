import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyCard from './Components/MyCard';
import Sidebar from './Components/Sidebar';
import Single from './Components/Single';
import Second from './Components/Second';
import Third from './Components/Third';
import Last from './Last';


function App() {
  return (
    <div className="App">
      <Single/>

      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
              <Sidebar/>
          </div>

          <div className='col-md-6'>
          <MyCard/>
          <Second/>
          <Third/>
          
          </div>

          <div className='col-md-3'>
          <Last/>
          </div>


          

        </div>

      </div>
      
    </div>
  );
}

export default App;
