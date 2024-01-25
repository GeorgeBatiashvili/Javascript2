// 1

for (let i = 5; i <=100; i++) {
    console.log(i);
}




// 2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i of array1) {
    if (i > 0 && i < 10) {
        console.log(i);
    }
}

// 3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < array2.length; index++) {
    const element = array2[index];
    if (element === 5) {
        console.log('aris');
        break;
    }
    
}

// 4

let array3= [1, 2, 3, 4, 5];

for (let index = 0; index < array3.length; index++) {
    const element = array3[index];
    console.log(sum element);
    
}

???????

// 5

????????


// 6

let array5 = [1, 2, 3, 7, 6, 9];

for (let index = 0; index < array5.length; index++) {
    const element = array5[index];

    if (element === 7) {
        continue;
    }

    console.log(element);
}



// 7
let  user = {
    firstName: 'giorgi',
    lastName: 'smith',
    age: 25,
    studenStatus: 'active'
}

console.log(user.studenStatus);
console.log(user['studenStatus']);

// 8

let user2 = {
    name: 'anna',
    age: 20,
    studentStatus: 'active',
};

if (user2.age < 18 && user2.studentStatus === active) {
    console.log('hello user');
}
else if (user2.name === levan) {
    console.log('hello levan');
}
else if (user2.studentStatus === active || user2.age < 25)  {
    console.log(hello anna);
}
else {
    console.log('error');
}


??

// 9

let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];

for (let i of array6) {
    if (i % 2 === 0 ) {
        console.log(i);
    }
}

// 10

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for (let index = 0; index < users.length; index++) {
    const element = users[index];
    if (element.status === true) {
        console.log(element.username);
    }
}


// 11

let array7 = [32, 14, 10, ‘hello’, null, ‘40’, 50];

for (let number of array7) {
    if (number(number) % 5 === 0) {
        console.log(number);
    }
}

???


// 12

let array8 = [ [2, -3, 5, 11], [1, -35, –11], [12, -36, -24] ];

for (let x of array8) {

    for (y of x) {
        if (y > 0) {
            console.log(y);
        }
    }

}

??



