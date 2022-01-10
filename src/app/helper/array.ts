
export function shuffle(arr: any[]) {
    const newArr = arr.slice();
    for (let i = newArr.length; i; i -= 1) {
        const j = Math.floor(Math.random() * i);
        const x = newArr[i - 1];
        newArr[i - 1] = newArr[j];
        newArr[j] = x;
    }
    return newArr;
}


export function fillArray(inputArr: any, len: number) {
    const outputArr = [];
    for (let i = 0; i < len; i++) {
        for (const v of inputArr) {
            outputArr.push(v);
        }
    }
    return outputArr;
}
