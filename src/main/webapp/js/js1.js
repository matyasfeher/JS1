function firstExercise() {
    var name = "Hans";
    var numbOfStudents = 10;
    var isFemale = true;
    var students = ["Matyas", "Daniel", "Edmond"];
    var student = {studentid: 1, studentname: "Matyas", age: 22};
    console.log(name, numbOfStudents, isFemale, students, student);
}
function secondExercise() {
    var str = ["some", "strings", "in", "an", "array"];
    var nmb = [1, 2, 3, 4, 5, 6];
    var boo = [true, false, false, false, true];
    var obj = [car = {model: "Fiat", year: 2000}, student = {studentid: 1, studentname: "Matyas", age: 22}];
    console.log(typeof str);
    console.log(typeof nmb);
    console.log(typeof boo);
    console.log(typeof obj);
}
function ThirdExercise() {
    var students = [student = {studentId: 1, studentName: "Matyas"}, student = {studentId: 2, studentName: "Daniel"}, student = {studentId: 3, studentName: "Emil"}];
    var toString = function () {
        var whole = student.studentId + " " + student.studentName;
        console.log(whole);
        return whole;
    };
    students.forEach(toString());
}
function FourthExercise() {
    var students = [student = {name: "Matyas", age: 22, isFemale: false}, student = {name: "Emil", age: 22, isFemale: false}, student = {name: "Diana", age: 24, isFemale: true}];
    var youngest = function () {
        for (var i = 0; i < students.length; i++) {
            if (students[i].age < students[i + 1].age) {
                youngest = students[i];
            }
            if (students[i] === students[i + 1]) {
                youngest = students[i] + students[i + 1];
            }
            return youngest;
        }
        function allMyLadies() {
            var ladies = [];
            students.forEach(function () {
                if (student.isFemale === true) {
                    ladies.push(student);
                    console.log(ladies);
                }
            });
        }
    };

}
;
function FifthExercise() {
    var students = [student = {name: "Matyas", age: 22, isFemale: false}, student = {name: "Emil", age: 22, isFemale: false}, student = {name: "Diana", age: 24, isFemale: true}, student = {name: "Dennis", age: 32, isFemale: false}];
    function withdrawStundent(sortedArray, obj) {
        students.sort();
        students.remove(obj);
    }
    withdrawStundent(students, students[1]);
}
;
function SixthExercise() {
    var students = [student = {name: "Matyas", age: 22, isFemale: false}, student = {name: "Emil", age: 22, isFemale: false}, student = {name: "Diana", age: 24, isFemale: true}, student = {name: "Dennis", age: 32, isFemale: false}];
    students.forEach(function () {
        if (student.age > 30) {
            console.log(student + "is older then 30");
        }
    });
}
;
function EighthExercise() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    return n;
}
;
function TenthExercise() {
    var animals = [animal = {name: "snake", isMammal: false}, animal = {name: "cow", isMammal: true}, animal = {name: "butterfly", isMammal: false}, animal = {name: "dog", isMammal: true}, animal = {name: "cat", isMammal: true}, animal = {name: "sheep", isMammal: true}, animal = {name: "crocodile", isMammal: false}];
    function checkMammal(animal) {
        if (animal.isMammal === true) {
            return animal;
        }
    }
    var mammals = [];
    mammals = animals.filter(checkMammal());
}
;