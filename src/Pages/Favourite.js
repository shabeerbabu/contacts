import React from 'react'
import Contacts from '../Components/Contacts'

function Favourite({contacts, deleteContact, favToggle}) {
  return (
    <>
    <div className='container my-5'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5'>
      {contacts.map((singleContact) =>{
        
          return ( 
            singleContact.fav && (
          <Contacts key={singleContact.id} contact={singleContact} 
          favToggle={favToggle} deleteContact={deleteContact}/>
            )
          );
        })}

      {contacts.filter(single=>single.fav).length === 0 && <h3>No Contacts to Show </h3>}

      </div>
      
    </div>
    </>
  )
}

export default Favourite
