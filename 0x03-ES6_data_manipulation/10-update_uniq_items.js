export default function updateUniqueItems(mMap) {
    if (!mMap instanceof Map) throw new Error('Cannot process');
    let mArray = Array.from(mMap);
    const map1 = new Map();
    

    for (const item of mArray){
        if (item[1] === 1){
            item[1] = 100;
        }
        map1.set(item);
    }
    return map1;
}