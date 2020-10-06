export const required = (value)=>{
    if(value) return undefined;
    return "Field is required";
}

export const maxlengthCreator =(maxlength)=>(value)=>{
    if( value.length > maxlength) return `Field max length is ${maxlength}`
    return undefined;
}