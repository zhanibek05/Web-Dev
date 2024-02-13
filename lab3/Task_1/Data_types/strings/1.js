function ucFirst(str) {
    if(!str)
        return str;  // check that string is not empty
    
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("zhanibek"));