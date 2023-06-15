const { readFile } = require('fs');

const results = [];
const nam = 'dataase.csv';

function countStudents(path) {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (error, data) => {
            if (error) {
                reject(Error('Cannot load database'));
            } else {
                const lines = data.split('\n');
    
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
                    console.log(`Number of students in ${uniqueList[k]}: ${cnt}. List: ${nlist}`);
                }
            }
            resolve(data);
        });
    });
}

module.exports = countStudents;