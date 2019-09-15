const splitString = (string) => {

    // 1. Replace all "\n" inside string(the input of the function) with empty space
    // 2. Split the string using "•"
    // 3. Delete the first item from the resultant array 
    let splitedString = string.replace(/\n/g,'').split('•')
    splitedString.shift()
    return splitedString
}

module.exports = splitString
