export default function createInt8TypedArray(length, pos, val) {
    const buffer = new ArrayBuffer(length);
    const array = new Int8Array(buffer);

    if (pos >= length || pos < 0) throw new Error('Position outside range');
    array[pos] = val;
    return array;
}