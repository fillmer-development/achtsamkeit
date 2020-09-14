export const getOffsetDay = offset => timestamp => {
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
    // return `${d.getDay()}.${d.getMonth()}.${d.getFullYear()}`
}

export const scale = (range, target) => input => {
    const [min, max] = range
    const [tMin, tMax] = target
    return ((input - min) / max) * (tMax - tMin) + tMin
}

export const mapProductivityToHSL = prod => {
    const hue = scale([0, 100], [240, 360])(prod)
    return `hsl(${hue}, 100%, 75%)`
}