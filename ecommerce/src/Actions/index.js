export function makeAsFavourite(item) {
    return { payload: item, type: 'ADD-TO-FAVOUTITE' }
}