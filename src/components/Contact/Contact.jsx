import css from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact ({ data: {id, name, number}, onDelete}) {
    return (
        <div>
            <p className={css.contactName}><BsFillPersonFill />{name}</p>
            <p className={css.contactNumber}><BsFillTelephoneFill />{number}</p>
            <button className={css.contactBtn} onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}



export default Contact;