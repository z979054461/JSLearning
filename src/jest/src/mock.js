function forEach(items, callback, thisArg) {
    for (let index = 0; index < items.length; index++) {
        const bound = callback.bind(thisArg)
        bound(items[index]);
    }
}

export {
    forEach
}