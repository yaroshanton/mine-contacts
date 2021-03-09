import React from 'react'
import './ContactList.css'
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({ data }) => (
    <>
        <ul className="nameList">
            {data.map(contact => (
                <li key={uuidv4()}>
                    <p>{contact.name} {contact.lastname}</p>
                    <p>Возраст: {contact.age}</p>
                    {contact.sex === 'f' ? (<p>Пол: мужской</p>) : (<p>Пол: женский</p>)}
                </li>
            ))}
        </ul>
    </>
)

export default ContactList;