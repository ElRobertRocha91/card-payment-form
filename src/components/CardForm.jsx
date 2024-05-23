import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Form from "./Form";

function CardForm() {
    const [card, setCard] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCard((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleInputFocus = (e) => {
        setCard((prev) => ({
            ...prev,
            focus: e.target.value
        }));
    }

    return (
        <div>
            {/* Credit Card */}
            <Cards
                number={card.number}
                expiry={card.expiry}
                cvc={card.cvc}
                name={card.name}
                focused={card.focus}
                required 
            />
            {/* Complete Form */}
            <div className="mt-3">
                <Form card={card} onChange={handleInputChange} onFocus={handleInputFocus}/>
            </div>
        </div>
    )
}

export default CardForm;