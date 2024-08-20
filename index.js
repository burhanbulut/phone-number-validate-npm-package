function validatePhoneNumber(phoneNumber) {
    const phoneRegex =/^(\+90|0)?\s*(\(\d{3}\)[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}|\(\d{3}\)[\s-]*\d{3}[\s-]*\d{4}|\(\d{3}\)[\s-]*\d{7}|\d{3}[\s-]*\d{3}[\s-]*\d{4}|\d{3}[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2})$/;
    if (!phoneNumber.match(phoneRegex)) {
      return { isValid: false, message: "Geçersiz telefon numarası formatı." };
    }    
    return { isValid: true, message: "Geçerli telefon numarası." };
  }
  
  export default validatePhoneNumber;