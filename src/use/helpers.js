export const getImageUrl = (folderName, imgName, extension = 'png') => {
    return new URL(`../assets/${folderName}/${imgName}.${extension}`, import.meta.url).href//`../../src/assets/${folderName}/${imgName}.${extension}` //new URL(`../../src/assets/${folderName}/${imgName}.png`, import.meta.url).href
}

export const doFirstLetterUppercase = (str) => {
    const splitted = str.split("")
    const first = splitted[0].toUpperCase()
    const rest = [...splitted] 
    rest.splice(0, 1)

    return [first, ...rest].join("")
}

export const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

//new URL(`../assets/${folderName}/${imgName}.${extension}`, import.meta.url).href