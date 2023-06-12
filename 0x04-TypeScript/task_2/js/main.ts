interface DirectorInterface {

    workFromHome(): string;
    getCoffeebreak(): string;
    workDirectorTasks(): string;
}
interface TeacherInterface {
    
    workFromHome(): string;
    getCoffeebreak(): string;
    workTeacherTasks(): string;
}
class Director implements DirectorInterface {

    workFromHome(): string{
        return `Working from home`;
    }
    getCoffeebreak(): string{
        return `Getting a coffee break`;
    }

    workDirectorTasks(): string{
        return `Getting to director tasks`;
    }
}
class Teacher implements TeacherInterface {
    
    workFromHome(): string {
        return `Cannot work from home`;
    }
    
    getCoffeebreak(): string {
        return `Cannot have a break`;
    }
    
    workTeacherTasks(): string {
        return `Getting to work`;
    }
}

function createEmployee(salary: string | number): Director | Teacher {
    

    if (typeof salary === "number"){
        if (salary < 500) {
            return new Teacher();
        } else {
            return new Director();
        }
    } else return new Director();
}

function isDirector(employee: Director): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher){
    if (employee instanceof Director){
        employee.workDirectorTasks();
    }
    if (employee instanceof Teacher){
        employee.workTeacherTasks();
    }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string{
    if (todayClass === "Math"){
        return `Teaching Math`;
    }
    if (todayClass === "History"){
        return `Teaching History`;
    }
}