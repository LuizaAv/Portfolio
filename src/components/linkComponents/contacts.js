import React from "react"
import "./contacts.css"

import ContactMailIcon from '@material-ui/icons/ContactMail';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';



export default function Contacts(){


    return(
        <div className="contactsContainer">
            <h1 className="contactHeader"><ContactMailIcon className="iconHeader"/> Here is my contacts</h1>
            <p className="contactsPTags"><MailOutlineIcon className="tickIcon"/>Email- l.avetisyan7777@gmail.com</p>
            <p className="contactsPTags"><PhoneIcon className="tickIcon"/>Mobile number: +37498550027, +37499716240
            </p>
            <p className="contactsPTags"><HomeIcon className="tickIcon"/>Address - 24 home 20 str., Nor - Aresh, Yerevan, Armenia</p>
            <div>
            </div>
        </div>
    )
}
