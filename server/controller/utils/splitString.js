const splitString = (string) => {

    const splitedString = string.replace(/\n/g,'').split('•')
    splitedString.shift()
    return splitedString
}

module.exports = splitString
