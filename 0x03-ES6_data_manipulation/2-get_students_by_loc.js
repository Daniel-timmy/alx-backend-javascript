export default function getStudentsByLocation(list, city) {
    const object = list.filter((obj) => obj.location === city);
    return object;
}