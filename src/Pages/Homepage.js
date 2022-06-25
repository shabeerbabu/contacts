import React from 'react'
import Contacts from '../Components/Contacts'
import Form from '../Components/Form'

function Homepage({formSub,contacts,deleteContact,favToggle}) {
  // console.log(contacts)
  return (
    <div className='container my-5'>
        <div className='row justify-content-sm-center my-5'>
        <Form formSub={formSub}/>
        </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
         
        {contacts.map((singleContact) =>{
          return <Contacts key={singleContact.id} contact={singleContact} 
          favToggle={favToggle} deleteContact={deleteContact}/>
        })}

        {contacts.length === 0 && <div>No Contacts to Show </div>}
        </div>
    </div>
  )
}

export default Homepage
