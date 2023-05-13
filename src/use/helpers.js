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
        case '01':
          month = 'января'
          break;
        case '02':
          month = 'февраля'
          break;
        case '03':
          month = 'марта'
          break;
        case '04':
          month = 'апреля'
          break;
        case '05':
          month = 'мая'
          break;
        case '06':
          month = 'июня'
          break;
        case '07':
          month = 'июля'
          break;
        case '08':
          month = 'августа'
          break;
        case '09':
          month = 'сентября'
          break;
        case '10':
          month = 'октября'
          break;
        case '11':
          month = 'ноября'
          break;
        case '12':
          month = 'декабря'
          break;
        default:
            month = ''
          break;
    }

    return month
}

//new URL(`../assets/${folderName}/${imgName}.${extension}`, import.meta.url).href