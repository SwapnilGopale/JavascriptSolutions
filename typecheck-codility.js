function typeCheck(object) {
    
  Object.keys(object).forEach((element)=>{
      let datatype =  element.split('_');
      if(datatype[1]){
          object = checkData(object,datatype[1],object[element],element)
      } else {
          object[element] = object[element];
      }   
  })

  function checkData(object,datatype,value,property){
    switch(datatype){
        case 'string':
            if(typeof value === 'string' )
                object[property] = value;
             else
                    throw new TypeError("not string")
            break;
        case 'int':
            if(typeof value !== 'string' && Number.isInteger(value) )
                object[property] = value;
                else
                    throw new TypeError("not integer")
            break;
        case 'float':
            if(typeof value !== 'string' && typeof value === 'number' && Number(value) === value && value % 1 !== 0)
                object[property] = value;
                else
                    throw new TypeError("not float")
            break;
        case 'number':
            if(typeof value === 'number')
                object[property] = value;
                else
                    throw new TypeError("not number")
            break;
        case 'bool':
            if(typeof value === 'boolean' )
                object[property] = value;
             else
                    throw new TypeError("not boolean")
            break;
        default:
            object[property] = value;
    }
    return object;
  }
  //proxy check
  let proxy_obj =  new Proxy(object, {
      set(object,property,value){
          let datatype =  property.split('_');
          if(datatype[1]){
              object = checkData(object,datatype[1],value,property)
          } else {
              object[property] = value;
          }   
      }
  })
  return proxy_obj
}
// object = {
//   abc_int : 5,
//   abc_string : "5"
// }
// const abc = typeCheck(object);
// abc.abc_string = "2"