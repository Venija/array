
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


headers.map(header => {
    let th = document.createElement('th')
    th.innerHTML = header.title
    title.appendChild(th)

    document.querySelector(`table`).appendChild(th)
})

list.map(item => {
    let row = document.createElement('tr')
    headers.forEach(header => {
        let td = document.createElement('td')
        td.innerHTML = item[header.key] + 123
        row.appendChild(td)
    })
    document.querySelector('table').appendChild(row)
})

