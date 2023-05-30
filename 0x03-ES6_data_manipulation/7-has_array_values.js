export default function hasValuesFromArray(mSet, mArray) {
    for (const item of mArray) {
        if (!mSet.has(item)) {
            return false;
        }
    }
    return true;
}