export const fsc = (media, fontSize) => {
    if (media.mobile)
        return fontSize > 16
            ? Math.ceil(fontSize * 3 / 5) : Math.ceil(fontSize * 4 / 5)
    else return fontSize
}