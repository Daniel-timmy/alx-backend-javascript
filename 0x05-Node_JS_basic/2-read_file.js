const fs = require('fs');

function countStudents(path) {
    const results = [];
    try {
        const file = fs.readFileSync(path, 'utf-8');
        const lines = file.split('\n');

        for (let i = 1; i < lines.length; i++) {
        const row = lines[i].trim().split(',');
        const obj = {'firstname': row[0], 'lastname': row[1], 'age': row[2], 'field': row[3]}
        results.push(obj);
        }
        console.log(`Number of students: ${results.length}`);

        list = []
        for (let j = 0; j < results.length; j++) {
            list.push(results[j]['field']);
        }
        
        const uniqueList = list.filter((item, index) => list.indexOf(item) === index);
        for(let k = 0; k < uniqueList.length; k++){
            let cnt = 0;
            nlist = []
            for (let n = 0; n < results.length; n++){
                if (uniqueList[k] === results[n]['field']){
                    cnt++;
                    nlist.push(results[n]['firstname']);
                }
            }
            console.log(`Number of students in ${uniqueList[k]}: ${cnt}. List: ${nlist.join(', ')}`);
        }
        } catch (error) {
            throw new Error('Cannot load the database');
        } 
}
countStudents(nam)
module.exports = countStudents;