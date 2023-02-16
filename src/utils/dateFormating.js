const formatDateYYYMMDD = (date) => {
    const splitDate = date.split("T")
    let concatDate = splitDate[0]
    let year = ""
    let month = ""
    let day = ""
    for (let i = 0; i < concatDate.length; i++) {
        if (i <= 3) {
            year = year.concat(concatDate[i])
        }
        if (i > 3 && i <= 5) {
            month = month.concat(concatDate[i])
        }
        if (i > 5) {
            day = day.concat(concatDate[i])
        }
    }

    let newDate = `${year}/${month}/${day}`

    return newDate
}

export {
    formatDateYYYMMDD
}