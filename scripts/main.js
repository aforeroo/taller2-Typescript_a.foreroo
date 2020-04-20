import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
var coursesTbody = document.getElementById('courses');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
var btnfilterByCredits = document.getElementById("button-filterByName");
var inputSearchBox2 = document.getElementById("search-box");
var inputSearchBox3 = document.getElementById("search-box");
var studentNombreH1 = document.getElementById('nombreh1');
var studentTbody = document.getElementById('student');
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCredits.onclick = function () { return applyFilterByCredits(); };
renderStudentInfo(dataStudent);
renderCoursesInTable(dataCourses);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderStudentInfo(students) {
    students.forEach(function (student) {
        studentNombreH1.innerHTML = "" + student.name;
        var trElement2 = document.createElement("tr");
        var trElement3 = document.createElement("tr");
        var trElement4 = document.createElement("tr");
        var trElement5 = document.createElement("tr");
        var trElement6 = document.createElement("tr");
        var trElement7 = document.createElement("tr");
        trElement2.innerHTML = "<td>Nombre</td><td>" + student.name + "</td>";
        trElement3.innerHTML = "<td>Codigo</td><td>" + student.code + "</td>";
        trElement4.innerHTML = "<td>cedula</td><td>" + student.id + "</td>";
        trElement5.innerHTML = "<td>Edad</td><td>" + student.age + "</td>";
        trElement6.innerHTML = "<td>Direcci\u00F3n</td><td>" + student.address + "</td>";
        trElement7.innerHTML = "<td>Telefono</td><td>" + student.phone + "</td>";
        studentTbody.appendChild(trElement2);
        studentTbody.appendChild(trElement3);
        studentTbody.appendChild(trElement4);
        studentTbody.appendChild(trElement5);
        studentTbody.appendChild(trElement6);
        studentTbody.appendChild(trElement7);
    });
}
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function applyFilterByCredits() {
    var text1 = inputSearchBox2.value;
    var text2 = inputSearchBox3.value;
    text1 = (text1 == null) ? '' : text1;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByCredits(text1, text2, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function searchCourseByCredits(minKey, maxKey, courses) {
    return minKey === '' || maxKey === '' ? dataCourses : courses.filter(function (c) {
        return (c.credits >= parseInt(minKey) && c.credits <= parseInt(maxKey));
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
