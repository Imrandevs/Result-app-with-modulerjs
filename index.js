//import class

import Validate from "./app/Validate.js";
import Regex from "./app/Regex.js";
import Result from "./app/Result.js";

//get elements

const resultForm = document.querySelector('#result_form');
let msg = document.querySelector('.msg');
let tmsg = document.querySelector('.tmsg');

//number value set
let marks_field = document.querySelectorAll('.marks_field');

for (let i = 0; i < marks_field.length; i++) {

    marks_field[i].addEventListener('keyup', function() {

        if (Regex.numCheck(this.value)) {

            return true;

        } else {

            this.value = '';

        }
    });

}

//form submit

resultForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = this.querySelector('input[name = "name"]').value;
    let roll = this.querySelector('input[name = "roll"]').value;
    let bang = this.querySelector('input[name = "bang"]').value;
    let eng = this.querySelector('input[name = "eng"]').value;
    let math = this.querySelector('input[name = "math"]').value;
    let science = this.querySelector('input[name = "science"]').value;
    let soscience = this.querySelector('input[name = "soscience"]').value;
    let rel = this.querySelector('input[name = "rel"]').value;

    let result_box = document.querySelector('.result_box');


    if (Validate.empty(name) || Validate.empty(roll) || Validate.empty(bang) || Validate.empty(eng) || Validate.empty(math) || Validate.empty(science) || Validate.empty(soscience) || Validate.empty(rel)) {

        msg.innerHTML = Validate.setMsg('All fields are required');

    } else if (Regex.numCheck(roll) == false) {

        msg.innerHTML = Validate.setMsg('Roll should be a number', 'warning');

    } else {

        result_box.innerHTML = `<div class="card">
                                <div class="card-header">
                                    <h5 class="card-title">Student Result</h5>
                                </div>
                                <div class="card-body">
                                    <h6>Name : ${name}</h6>
                                    <p>Roll : ${roll}</p>
                                    <table  class="table table-bordered table-striped text-center">
                                        <thead>
                                            <tr>
                                                <th>Subject</th>
                                                <th>Marks</th>
                                                <th>GPA</th>
                                                <th>Grade</th>
                                                <th>CGPA</th>
                                                <th>Final Grade</th>
                                            </tr>
                                        </thead>
                                        <tbody id="fail">
                                            <tr>
                                                <td>Bangla</td>
                                                <td>${bang}</td>
                                                <td>${Result.gpa(bang)}</td>
                                                <td>${Result.grade(bang)}</td>
                                                <td rowspan="6">
                                                ${Result.cgpa(bang,eng,math,science,soscience,rel)}
                                                </td>
                                                <td rowspan="6">
                                                ${Result.fgrade(bang,eng,math,science,soscience,rel)}</td>
                                            </tr>
                                            <tr>
                                                <td>English</td>
                                                <td>${eng}</td>
                                                <td>${Result.gpa(eng)}</td>
                                                <td>${Result.grade(eng)}</td>

                                            </tr>
                                            <tr>
                                                <td>Math</td>
                                                <td>${math}</td>
                                                <td>${Result.gpa(math)}</td>
                                                <td>${Result.grade(math)}</td>

                                            </tr>
                                            <tr>
                                                <td>Science</td>
                                                <td>${science}</td>
                                                <td>${Result.gpa(science)}</td>
                                                <td>${Result.grade(science)}</td>

                                            </tr>
                                            <tr>
                                                <td>Social Science</td>
                                                <td>${soscience}</td>
                                                <td>${Result.gpa(soscience)}</td>
                                                <td>${Result.grade(soscience)}</td>

                                            </tr>
                                            <tr>
                                                <td>Religion</td>
                                                <td>${rel}</td>
                                                <td>${Result.gpa(rel)}</td>
                                                <td>${Result.grade(rel)}</td>

                                            </tr>
                                            
                                        </tbody>
                                            
                                    </table>
                                    <p > You will got  :${Result.fgrade(bang,eng,math,science,soscience,rel)}</p>
                                </div>
                            </div>`;
    }
});