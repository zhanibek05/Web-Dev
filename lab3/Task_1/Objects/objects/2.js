function isEmplty(obj){
    for(let key in obj){
        return false; // if loop started then object has attributes
    }
    return true;
}