
export const required = value => {
    if(value) return undefined
    return 'Введите обязательно какую нибудь чепуху'
}

export const maxLengthCreator = (maxLength) => value => {
    if(value && value.length > maxLength) return `Максимальная длина ${maxLength} символов`
    return undefined
}
