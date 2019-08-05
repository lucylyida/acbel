import crypto from "crypto"

const algorithm = "aes-256-ctr";
const password = "d6F3Efeq";

export const enc = (objText, isString=false) => {
    try {
        const text = isString ? objText : JSON.stringify(objText)
        const cipher = crypto.createCipher(algorithm, password)
        let encrypted = cipher.update(text, 'utf8', 'hex')
        encrypted += cipher.final('hex')
        return encrypted.toUpperCase()
    } catch(ex) {
        return null
    }
}

export const dec = (encrypted, isString=false) => {
    console.log({ encrypted})
    try {
        const decipher = crypto.createDecipher(algorithm, password)
        let decrypted = decipher.update(encrypted, 'hex', 'utf8')
        decrypted += decipher.final('utf8')
        return isString ? decrypted : JSON.parse(decrypted)
    } catch (ex) {
        console.log({ ex })
        return null
    }
}