export const getOffsetDay = offset => timestamp => {
    console.log(timestamp)
    const date = new Date(timestamp)
    date.setDate(date.getDate() + offset)
    return date.getTime()
}

export const getNextDay = getOffsetDay(1)

export const getPrevDay = getOffsetDay(-1)

export const normalizeTimestamp = timestamp => {
    const date = new Date(timestamp)
    return date.setHours(0, 0, 0, 0)
}

export const printDate = timestamp => {
    const d = new Date(timestamp)
    return d.toLocaleDateString()
    return `${d.getDay()}.${d.getMonth()}.${d.getFullYear()}`
}