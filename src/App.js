import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nave from "./Components/Nave";
import Favourite from "./Pages/Favourite";
import Homepage from "./Pages/Homepage";
import Notfound from "./Pages/Notfound";

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const contactsFormServer = await fetchContacts();
      setContacts(contactsFormServer);
    };

    getContacts();
  }, []);
  
  const formSub = async (data) =>{
    const res = await fetch("http://localhost:3004/contacts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newdata = await res.json();
    if(res.ok){
    setContacts([...contacts, newdata]);
    }};

  const fetchContacts = async () => {
    const res = await fetch("http://localhost:3004/contacts");
    const data = await res.json();

    return data;
  };

  const deleteContact = async (id) => {

    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "DELETE",
    });
    if(res.status===200){

    let newContact = contacts.filter((singleContact) => {
      return singleContact.id !== id;
    })
    setContacts(newContact);
  }
  };


  const getCon = async (id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`);
    const data = await res.json();

    return data;
  };

  const favToggle = async (id)=>{

    const singleCon = await getCon(id);

    const updTask = {...singleCon, fav:!singleCon.fav};

    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    if(res.status === 200) {
    let updateContact = contacts.map((singleContact)=>{
      return singleContact.id === id
      ? { ...singleContact, fav: !singleContact.fav }
      : singleContact;
    });
    setContacts(updateContact)
  }
};

  return (
    <Router>
      <div className="App">
        <Nave/>
      </div>
      <Routes>
        <Route exact path="/" element={<Homepage formSub={formSub}  
        contacts={contacts} favToggle={favToggle} deleteContact={deleteContact}/>} />

        <Route path="/fav" element={<Favourite
        contacts={contacts} favToggle={favToggle} deleteContact={deleteContact} />} />

        <Route path="/*" element={<Notfound/>} />
      </Routes>
    </Router>
  );
}

export default App;
