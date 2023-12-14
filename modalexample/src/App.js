
import { useState } from 'react';
import './App.css';
import Modal from './component/Modal';

function App() {

  const [openModal,setOpenModal] = useState(false)

  return (
    <div className="App">

      <h1>Welcome Apply Job Online</h1>
    <h2>Apply for job here</h2>
    <button className='modelbtn' onClick={()=>{setOpenModal(true)}}> Apply </button>
{openModal &&  <Modal closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;
