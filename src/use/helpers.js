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

export const getMonthName = (val) => {
    let month = ''

    switch (val) {
        case 0:
          month = 'января'
          break;
        case 1:
          month = 'февраля'
          break;
        case 2:
          month = 'марта'
          break;
        case 3:
          month = 'апреля'
          break;
        case 4:
          month = 'мая'
          break;
        case 5:
          month = 'июня'
          break;
        case 6:
          month = 'июля'
          break;
        case 7:
          month = 'августа'
          break;
        case 8:
          month = 'сентября'
          break;
        case 9:
          month = 'октября'
          break;
        case 10:
          month = 'ноября'
          break;
        case 11:
          month = 'декабря'
          break;
        default:
            month = ''
          break;
    }

    return month
}

//new URL(`../assets/${folderName}/${imgName}.${extension}`, import.meta.url).href