import { useState } from "react";
import Validation from "./Validate";

function Form({ card, onChange, onFocus }) {

    const [errors, setErrors] = useState({});

    const validate = Validation(card);
    console.log(validate);
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate);
        if(Object.keys(validate).length === 0){
            alert("Payment Succecesful");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    type="number"
                    name="number"
                    className="form-control"
                    placeholder="Card Number"
                    value={card.number}
                    onChange={onChange}
                    onFocus={onFocus} 
                    required 
                />
                {errors.number && <span className="error">{errors.number}</span>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    onChange={onChange}
                    onFocus={onFocus}
                    required
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="row">
                <div className="col-6 mb-3">
                    <input
                        type="text"
                        name="expiry"
                        className="form-control"
                        placeholder="Valid date"
                        value={card.expiry}
                        onChange={onChange}
                        onFocus={onFocus}
                        required
                    />
                    {errors.expiry && <span className="error">{errors.expiry}</span>}
                </div>
                <div className="col-6 mb-3">
                    <input
                        type="number"
                        name="cvc"
                        className="form-control"
                        placeholder="CVC"
                        value={card.cvc}
                        onChange={onChange}
                        onFocus={onFocus} 
                        required
                    />
                    {errors.cvc && <span className="error">{errors.cvc}</span>}
                </div>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-dark">Confirm</button>
            </div>
        </form>
    )
}

export default Form;