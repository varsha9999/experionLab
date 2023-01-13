
const inputbox = document.getElementById('inputBox');
inputbox.addEventListener('keyup',() =>{
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(result =>{
        document.getElementById('target').innerHTML = '';
        result.data.forEach(element => {
            const row = `
            <tr>
            <td>${element.id}</td>
            <td>
                <img src="${element.avatar}" height="50">
            </td>
            <td>${element.first_name} ${element.last_name}</td>
            <td>${element.email}</td>
            </tr>
            `;
            const value = inputbox.value;
            const choice = element.email.slice(0,(value.length));
            console.log(choice,value);
            if(value == choice){
             document.getElementById('target').innerHTML += row;
            }
        });
    });

});

const tbody = document.querySelector('#target');
fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(result => {
        const users = result.data;
        users.forEach(user => {
            const row = `<tr>
            <td> <img src = '${user.avatar}' height="50"></td>
            <td>${user.first_name} ${user.last_name}</td>
            <td>${user.email}</td>`;
            tbody.innerHTML += row;
        });
    });

        