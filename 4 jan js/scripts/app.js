
        // function doThisLongRunningTask(callback){
        //     // a long  task
        //     setTimeout(() => {
        //         const name = 'javaScript';
        //         callback(name);
        //     },5000);
        // }

        // function showResult(res){
        //     console.log(res);
        // }
        // doThisLongRunningTask(showResult);
        // console.log('i am done');


        // const p = new Promise((resolve, reject) =>{
        //     const name = 'java';
        //     resolve(name);
        // });
        // p.then(res=>console.log(res));
//     document.write('hello');
//     fetch('https://reqres.in/api/users')
//     .then(response => response.json())
//     .then(result =>
//          {console.log(result.data[0]);
//             result.data.forEach(element => {
//         console.log(element.email);
        
//     });
// });
    // .then(data => console.log(data));

const tbody = document.querySelector('#target');
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(result =>{
        const users = result.data;
        users.forEach(user => {
            const row = `
            <tr>
            <td>${user.id}</td>
            <td><img src=
                "${user.avatar}" height="50"></td>
            <td>${user.first_name} ${user.last_name}</td>
            <td>${user.email}</td>
            </tr>
            `;
            tbody.innerHTML += row;
        });
    });



        