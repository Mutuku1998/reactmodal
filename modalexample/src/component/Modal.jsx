import React from 'react'

const Modal = ({closeModal}) => {
  return (
    <div className='modalbackground'>

<div className='modalcontainer'>
    <button onClick={()=>{
        closeModal(false)
    }}>X</button>
    <div className='title'>
     Fill the Application form Below
         </div>
    <div className='container'> 

<form>

    <div className='row'>
        <div className='col-25'>
            <label htmlFor='fname'>
               Full Name
            </label>
        </div>
        <div className='col-75'>
<input type='text' placeholder='Your  Name ...'/>
        </div>
    
    </div>
    <div className='row'>
        <div className='col-25'>
            <label htmlFor='fname'>
           Email Address
            </label>
        </div>
        <div className='col-75'>
<input type='text' placeholder='email'/>
        </div>
    </div>
    <div className='row'>
        <div className='col-25'>
            <label>County of Birth</label>
        </div>
        <div className='col-75'>
            <select id='county'>

                <option>Makueni</option>
                <option>Machakos</option>
                <option>Kitui</option>
                <option>Nairobi</option>
            </select>
        </div>
    </div>
<div className='row'>
    <div className='col-25'>
        <label>Profile Summary</label>
    </div>
    <div className='col-75'>
        <textarea id='summary' placeholder='Write Your Career Summary ....'style={{height:'200px'}}></textarea>
    </div>
</div>

<div className='row'>
    <button className='modelbtn'> Save & submit</button>
</div>
</form>
    </div>
   
</div>
    </div>
  )
}

export default Modal