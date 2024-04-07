// make a function take a string and return just the digits


export function getDigitsFromString(str: string): string {
    try {
        return str.replace(/\D/g, '');
    } catch (error) {
        return "";
    }
}