function checkSpam(str) {
    strLower = str.toLowerCase();
    if(str.includes('viagra') || str.includes('xxx'))
        return true;
    return false;
}

console.log(checkSpam("Hey viagra"));
console.log(checkSpam("zhanibek"));