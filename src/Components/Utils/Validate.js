 
 export const checkValidata=(email , password)=>{

    const isEmailValid= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not Valid";
    if(!isPasswordValid) return "Please Enter A Valid Password";

    return null;

 }