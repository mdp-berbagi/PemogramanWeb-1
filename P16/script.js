// Rest API server by http://dummy.restapiexample.com/

// ID OTOTMATIS BEUBAH, BIAR DK ERROR, APINYO INI HARUS BERUBAH-BERUBAH
const ID = (Math.floor(Math.random() * 99999) + 1);

// GET
const listContainer =  document.getElementById('employee')

fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then(res => res.json())
    .then(obj => {
        for(let x = 0; x <=100; x++) {
            let newList =  document.createElement('li')

            newList.textContent = obj[x].employee_name
            newList.setAttribute('value', obj[x].id)
            newList.addEventListener('click', (event) => {
                console.log(event.target.value,  obj[x].id)
            })

            listContainer.appendChild(newList)
        }
    });

// POST
fetch("http://dummy.restapiexample.com/api/v1/create", {
    method: "post",
    body: JSON.stringify({
        "name": "Miss Fortune Leona " + ID,
        "salary": "3022",
        "age": 30,
        "id": ID
    })
})
.then(res => res.json())
.then(obj => console.log(obj));

// UPDATE
fetch("http://dummy.restapiexample.com/api/v1/update/" + ID, {
    method: "put",
    body: JSON.stringify({
        "name": "Miss Fortune Leona Particia " + ID,
        "salary": "4000",
        "age": 12
    })
})
.then(res => res.json())
.then(obj => console.log(obj));

// DELETE
fetch("http://dummy.restapiexample.com/api/v1/delete/"+ ID, {
    method: "delete"
})
.then(res => res.json())
.then(obj => console.log(obj));

