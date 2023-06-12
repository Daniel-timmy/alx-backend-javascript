interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;  
    
}

interface Directors extends Teacher {
    numberOfReports: number;
}
function printTeacher(firstName: string, lastName: string): string {
    return (`${firstName[0]}. ${lastName}`);
}

interface StudentClass {
    firstName: string;
    lastName: string;
}
class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return `Currently working`;
    }

    displayName() {
        return `${this.firstName}`;
    }
}