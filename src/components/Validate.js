export default function Validation(card){
    let errors = {};

    // Validate
    if(!/^\d{16}$/.test(card.number)){
        errors.number = "Card number must be 16 digits";
    }
    if(!/^[a-zA-Z\s]{3,30}$/.test(card.name)){
        errors.name = "Name myst be between 3 and 30 characters";
    }
    if(!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(card.expiry)){
        errors.expiry = "Valid date must be in MM/YY format";
    }
    if(!/^\d{3,4}$/.test(card.cvc)){
        errors.cvc = "CVC must be 3 or 4 digits";
    }

    return errors;
}