export const getImageUrl = (folderName, imgName) => {
    return new window.URL(`../../src/assets/${folderName}/${imgName}.png`, import.meta.url).href
}

export const doFirstLetterUppercase = (str) => {
    const splitted = str.split("")
    const first = splitted[0].toUpperCase()
    const rest = [...splitted] 
    rest.splice(0, 1)

    return [first, ...rest].join("")
}