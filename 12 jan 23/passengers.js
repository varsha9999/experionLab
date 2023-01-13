const passenger = ['bibin','varsha vm','varsha v','gokul','varun','comet','kriti','abhay','amal','shredha','jomet'];
console.log("before sorting");
console.log(passenger);
passenger.sort();
console.log("after sortinhg");
console.log(passenger);
passenger.reverse();
console.log("printing in reverse order");
console.log(passenger);
// searching a name and display
const searchKey= 'comet'; 
for (let i = 0; i < passenger.length;i++){
    if(passenger[i]== searchKey){
       console.log(searchKey,'is present in passenger array at',i+1,'th position');
    }
}

for (let i = 0; i<passenger.length;i++){
    console.log('length of the name:',passenger[i],'is',passenger[i].length);
}
for(let i = 0; i < passenger.length; i++){
    for(let j =0; j <passenger.length - i - 1; j++){
        if(passenger[j] < passenger [j+1]){
           let temp = passenger[j];
           passenger[j] = passenger[j+1];
           passenger[j + 1] = temp;
        }
    }
    
}
console.log(passenger);

for(let i = 0; i < passenger.length; i++){
    for(let j =0; j <passenger.length - i - 1; j++){
        if(passenger[j] > passenger [j+1]){
           let temp = passenger[j];
           passenger[j] = passenger[j+1];
           passenger[j + 1] = temp;
        }
    }
    
}
console.log(passenger);
let values = [];
console.log('duplicate values are:');
for (let i = 0; i < passenger.length; i++){
  for(let j = i+1; j < passenger.length; j++)  {
    if(passenger[i] == passenger[j])
    {
        values.push(passenger[i]);
    }
  }
   
}
console.log(values);
  
console.log('splited name:')
for(let i = 0; i < passenger.length; i++){
    for(let j = 0; j < passenger.length; j++){
        if(passenger[i][j] === ' ')
        {
            // console.log(passenger[i]);
            const nameArray = passenger[i];
            const lastname = nameArray.split(' ');
            console.log(lastname[1]);
        }
    }
}
// 2nd question 
const flight_fare = 2000;
const booking_time = 7;

if(booking_time >6 && booking_time <9){
   let fare = ((flight_fare*10)/100)+flight_fare;
   console.log(fare);
}
else if (booking_time > 9 && booking_time < 17){
   let fare = ((flight_fare*20)/100)+flight_fare;
   console.log(fare);
}
else if (booking_time > 17 && booking_time < 23){
    let fare = ((flight_fare*7)/100)+flight_fare;
    console.log(fare);
 }
 else 
 {
    let fare = ((flight_fare*5)/100)+flight_fare;
    console.log(fare);
 }