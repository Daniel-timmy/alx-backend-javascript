export default function getListStudentIds(a) {
    if (!Array.isArray(a)) {
        return [];
    }
    const mp = a.map((obj) => (obj.id));
    return mp;
}