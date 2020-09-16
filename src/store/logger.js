export const logger = store => next => action => {
    const { type, ...rest } = action
    console.log('dispatch', type, rest)
    next(action)
    console.log('next state', store.getState())
}