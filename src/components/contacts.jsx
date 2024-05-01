import {users} from '../hooks/user'

export const Contacts = ({ userData, onDelete }) => {
    let usersList
    let user = users(userData)
        
    usersList = user.map((user, index) => (
        <div key={user.id}>
        <li >{user.name}: {user.number}</li>
            <button id={user.id} onClick={onDelete} type='button'>Delete</button>
         </div>
        ));
    

    return (
        <div>
            <p>Contacts</p>
            <ul>{usersList}</ul>
        </div>
    );
}