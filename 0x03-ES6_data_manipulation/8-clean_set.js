export default function cleanSet(mSet, mString) {
    const mlen = mString.length;
    let str = '';
    for (const item of mSet){
        if (item.startsWith(mString)) {
            str = str.concat(item.slice(mlen), '-');
        }
    }
    return str.slice(0, str.length - 2);
}