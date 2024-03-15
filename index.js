let table = document.querySelector('#table');
const list = [
    {
        id: 1,
        name: 'John Doe',
        age: 25
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 24
    },
    {
        id: 3,
        name: 'John Smith',
        age: 30
    },
    {
        id: 4,
        name: 'Jane Smith',
        age: 29
    },
    {
        id: 5,
        name: 'John Johnson',
        age: 35
    },
    {
        id: 6,
        name: 'Jane Johnson',
        age: 34
    },
    {
        id: 7,
        name: 'John Brown',
        age: 40
    },
    {
        id: 8,
        name: 'Jane Brown',
        age: 39
    },
    {
        id: 9,
        name: 'John White',
        age: 45
    },
    {
        id: 10,
        name: 'Jane White',
        age: 44
    }
]

// function getValue(list, atribut) {
//     let resalt = []
//     for (let i = 0; i < list.length; i++) {
//         resalt.push(list[i][atribut]);
//     }
//     return resalt;
// }

// console.log(getValue(list , 'name'))


// list.forEach(function(item) {
//     let row = document.createElement('tr')
//     row.innerHTML = `
//     <td>${item[0]}</td>
//     <td>${item[1]}</td>
//     <td>${item[2]}</td>
//     `
//     document.querySelector('tbody').appendChild(row)
// })

function ids() {
    let ids = [];
    for(let i = 0; i < list.length; i++) {
        ids.push(
            [list[i]["id"], `${list[i]["name"]}`, `${list[i]["age"]}`]
        )
    }
    return ids
}
document.querySelector('body').innerHTML = `<table></table>`
let title = document.createElement('tr')
title.innerHTML = `
<th>ID</th>
<th>NAME</th>
<th>AGE</th>
`
document.querySelector('table').appendChild(title)
for(let i = 0; i < ids().length; i++) {
    let row = document.createElement('tr')
    row.innerHTML = `
    <td>${ids()[i][0]}</td>
    <td>${ids()[i][1]}</td>
    <td>${ids()[i][2]}</td>
    `
    document.querySelector('table').appendChild(row);
}