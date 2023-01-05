const languages = ['c','c++','java','python'];
languages.forEach((item,index)  => {
    console.log(index, item);
});
const person = {
    name: 'joe',
    age: 20,
    experience: [
        {
            company: 'company ABC',
            years: 2

        },
        {
            company: 'company XYZ',
            years: 3
        }
    ]
   
};
person.name = 'yamaha ';
person.email = null ;
console.log(person['email']);
console.log(person.experience[1].years);
person.experience.forEach(exp=>console.log(exp.company));







// const rows = 3;
// const cols = 3;
// const m = new Array(rows);
const m1  = [
    [1,2],
    [3,4]
];
console.log(m1);





const student = {
    name: 'student 1',
    mark1: 40,
    mark2: 50,
    total:  function(){
        const extraMark = 5;
        console.log(this.mark1 + this.mark2 + extraMark);
    }

};

student.total();
 const copy = Object.assign({ age: 15},student);
 copy.name = 'New Name';
 console.log(student);
 console.log(copy);


 const students = {
    name: 'Student 1'
 };

 const marks = {
marks1: 40,
mark2: 50
};

const copi = Object.assign({},students,marks);
console.log(copi);


const stud = {
    mark0: 40,
    mark2: 50,
    fullName:'student 1'
    };
    // const keys = Object.keys(stud);
    // keys.forEach(keys=>{
    //     console.log(stud[keys]);
    // });

    const values = Object.values(stud);
    values.forEach(value=>{
        console.log(value);
    });



//     const {fullName, mark0} = stud;
//     console.log(fullName);



    