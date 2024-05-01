export const Delete=(event, userData, setUserData) => {
    console.log(userData)
     const dataNotToDelete = userData.contacts.filter(contact =>
            !contact.id.toLowerCase().includes(event.target.id.toLowerCase())
    )
    setUserData({
      contacts: dataNotToDelete,
      filter: '',
      name: '',
      number: '',
    });

    try {
    localStorage.setItem('localContacts', JSON.stringify(userData.contacts));
  } catch (error) {
    console.error('Błąd podczas zapisywania danych do local storage:', error);
  }

  } 
