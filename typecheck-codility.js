function typeCheck(object) {
    // Use console.log() for debugging
    let proxy_obj =  new Proxy(object, {
        set(object,property,value){
            let datatype =  property.split('_');
            if(datatype[1]){
                switch(datatype[1]){
                    case 'string':
                        if(typeof value !== 'string' )
                            throw new Error('Value must be string');
                        break;
                    case 'int':
                        if(typeof value != 'number' || value%2>0 )
                            throw new Error('Value must be integer');
                        break;
                    case 'float':
                        if(typeof value != 'number' || value%2 === 0 )
                            throw new Error('Value must be float');
                        break;
                    case 'number':
                        if(typeof value !== 'number')
                            throw new Error('Value must be number');
                        break;
                    case 'bool':
                        if(typeof value !== 'boolean' )
                            throw new Error('Value must be boolean');
                        break;
                }
            }
                object[property] = value;
            
        }
    })
    console.log(proxy_obj);
    return proxy_obj
}

module.exports = typeCheck;

