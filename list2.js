const list = [{id}]
const headers = [
    {
        key: 'id'
    },
    {key: 'name'}
]

const keys = ['id', 'name']


Object.keys(list[0]).forEach(key => {
    headers.push({key: key, title: key.toUpperCase()})
})





document.querySelector('body').innerHTML = <table></table>
let title = document.createElement('tr')
title.innerHTML = `
<th>ID</th>
<th>NAME</th>
<th>AGE</th>
`
headers.forEach(header => {
    let th = document.createElement('th')
    th.innerHTML = header.title
    title.appendChild(th)
})

list.forEach(item => {
    let row = document.createElement('tr')
    headers.forEach(header => {
        let td = document.createElement('td')
        td.innerHTML = item[header.key]
        row.appendChild(td)
    })
    row.innerHTML = `
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.age}</td>
    `
    document.querySelector('table').appendChild(row)
})