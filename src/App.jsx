import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './style.css';

const App = () =>  {

  return (
    <div>
      <Header />
      Notes Manager Starter +  
      <Outlet/>
    </div>
  )
}

export default App;

