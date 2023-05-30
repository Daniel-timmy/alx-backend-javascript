export default function createInt8TypedArray(length, pos, val) {
    const buffer = new ArrayBuffer(length);

    if (pos >= length || pos < 0) throw new Error('Position outside range');
    const array = new Int8Array(buffer, 0, length);
    array.set([val], position)
    return new DataView(buffer);
}