import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom'
import TenantForm from './Pages/TenantForm';

const Temp = () => {
  return(
    <>
  <div>home sweet home</div> 
  <Link to="/hoodie-form">back to form</Link>
  </>
  )
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/hoodie-form" element={<TenantForm/>}/>
          <Route path="/" element={<Temp/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
