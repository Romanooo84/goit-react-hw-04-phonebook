import { TextInput } from "./textinput";
import { Contacts } from "./contacts";
import { Filter } from "./filter";
import React, { useState, useEffect } from 'react';
import {LockalStorageData} from '../hooks/dataFromLocalStorage'
import { Delete } from "hooks/delete";
import { Submit } from "hooks/submit";


export const App = () => {
  
  const INITIAL_DATA= [
    { id: 'id-1', name: 'Rsie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }]
  
  let getLocalStorageData = LockalStorageData(INITIAL_DATA)
  
  const state = {
    contacts:getLocalStorageData,
    filter: '',
    name: '',
    number: '',
  };
  const [userData, setUserData] = useState(state);
  const [inputValue, setInputValue] = useState();

  const onChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  const onDelete = event => 
  Delete(event, userData, setUserData);


  const onSubmit = event =>
    Submit(event, userData, setUserData, setInputValue);
    

  useEffect(() => {
    try {
    localStorage.setItem('localContacts', JSON.stringify(userData.contacts));
  } catch (error) {
    console.error('Błąd podczas zapisywania danych do local storage:', error);
  }
  },[userData.contacts])

  return (
    <div>
      <h1>Phonebook</h1>
      <TextInput onChange={onChange} onSubmit={onSubmit} value={inputValue}/>
      <h2>Contacts</h2>
      <Filter onChange={onChange}/>
      <Contacts userData={userData} onDelete={onDelete} />
    </div>
  );
  };
  
