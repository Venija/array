
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
const headers = [
]

const keys = ['id', 'name', 'age']

Object.keys(list[0]).forEach(key => {
    headers.push({key: key, title: key.toUpperCase()})
})


document.querySelector('body').innerHTML = `<table></table>`
let title = document.createElement('th')

headers.forEach(header => {
    let th = document.createElement('th')
    th.innerHTML = header.title
    title.appendChild(th)

    document.querySelector(`table`).appendChild(th)
})

list.forEach(item => {
    let row = document.createElement('tr')
    headers.forEach(header => {
        let td = document.createElement('td')
        td.innerHTML = item[header.key]
        row.appendChild(td)
    })
    document.querySelector('table').appendChild(row)
})

let createbtn123 = document.createElement('button')
createbtn123.className = 'button123'
createbtn123.innerHTML = "сделать 123"

document.body.appendChild(createbtn123)



createbtn123.addEventListener('click', () => {
    if(document.querySelector('.table2')) {
        document.querySelector('.table2').remove()
        return
    }
let createtable2 = document.createElement('div')
if(document.querySelector('.table2')) return;
createtable2.className = 'table2'
document.body.appendChild(createtable2)
document.querySelector('.table2').innerHTML = `<table2></table2>`
let title2 = document.createElement('th')

headers.forEach(header => {
    let th = document.createElement('th')
    th.innerHTML = header.title
    title2.appendChild(th)
    
    document.querySelector(`table2`).appendChild(th)
})

const newList = list.map(item => {
    let row = document.createElement('tr')
        headers.forEach(header => {
        let td = document.createElement('td')
        td.innerHTML = item[header.key] + '+123'
        row.appendChild(td)
})
    document.querySelector('table2').appendChild(row)
})
})

let createbtnsort = document.createElement('button')
createbtnsort.className = 'buttonsort'
createbtnsort.innerHTML = "до 30"

document.body.appendChild(createbtnsort)

createbtnsort.addEventListener('click', () => {
    if(document.querySelector('.table3')) {
        document.querySelector('.table3').remove()
        return
    }
    let createtable3 = document.createElement('div') 
    createtable3.className = 'table3'
    createtable3.id = 'filtred-table'
    document.body.appendChild(createtable3)
    document.querySelector('.table3').innerHTML = `<table3></table3>`
    let title3 = document.createElement('th')
    
    headers.forEach(header => {
        let th = document.createElement('th')
        th.innerHTML = header.title
        title3.appendChild(th)
        
        document.querySelector(`table3`).appendChild(th)
        })
    
    const young = list.filter(item => {
        let row = document.createElement('tr')
        headers.forEach(header => {
            let td = document.createElement('td')
            td.innerHTML = item[header.key]
            if (item.age <= 30)
            row.appendChild(td)
            })
    document.querySelector('table3').appendChild(row)
        })  
    })
    

const allAge = list.reduce((total, item) => {
    return  total + item.age
}, 0)

// console.log('Общий возраст '+ +allAge)

let createbtnallage = document.createElement('button')
createbtnallage.className = 'buttonallage'
createbtnallage.innerHTML = "Общий возраст"
document.body.appendChild(createbtnallage)

createbtnallage.addEventListener ('click', () => {
    if(document.querySelector('.totalage')) {
        document.querySelector('.totalage').remove()
        return
    }
    let row1 = document.createElement('tr')
    row1.className = 'totalage'
    row1.innerHTML = 'Общий возраст '+ +allAge
    document.querySelector('table').appendChild(row1)
})

