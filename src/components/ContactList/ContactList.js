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
                    <p>Пол: {contact.sex}</p>
                </li>
            ))}
        </ul>
    </>
)

export default ContactList;