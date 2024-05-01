import { nanoid } from "nanoid";

export const Submit = (event, userData, setUserData, setInputValue) => {
    event.preventDefault();
    const { name, number, contacts } = userData;
    const isContact = contacts.some(
      contact => contact.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (isContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    setUserData({
      ...userData,
      contacts: [...contacts, { id: nanoid(),name, number }],
      filter: '',
      name: '',
      number: '',
    });

    setInputValue()
    
  }; 
