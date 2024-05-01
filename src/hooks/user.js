export const users=(userData) => {
    
    let letters = (userData.filter)
    let users
    if (userData.filter!=='') {
        const filtredData = userData.contacts.filter(contact =>
            contact.name.toLowerCase().includes(letters.toLowerCase())
        )
        users = filtredData
    }
    else {
        users = userData.contacts
    }

    return users
}