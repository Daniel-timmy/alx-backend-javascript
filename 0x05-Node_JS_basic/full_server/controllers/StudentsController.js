const readDatabase = require('../utils')

class StudentsController {
    static getAllStudents(request, response){
        response.status(200).send("Hello Holberton School");
        readDatabase(process.argv[2].toString()).then((output) => {
            const outString = output.slice(0, -1);
            res.write('This is the list of our students'); 
            res.end(outString);
          }).catch(() => {
            res.statusCode = 500;
            res.end('Cannot load the database');
          });      
    }

    static getAllStudentsByMajor(request, response) {
        response.status(200).send("Hello Holberton School");
        readDatabase(process.argv[2].toString()).then((output) => {
            const outString = output.slice(0, -1);
            res.write('This is the list of our students'); 
            res.end(outString);
          }).catch(() => {
            res.statusCode = 500;
            res.end('Major parameter must be CS or SWE');
          });    
    }
}