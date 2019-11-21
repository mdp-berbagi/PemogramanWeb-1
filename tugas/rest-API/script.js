const resAPI = {
    token: "hhfqx3QclCh70kvz2IukBWMwqkuptY5sWHum",
    format: "json",
    base: "https://gorest.co.in/public-api"
}

document.getElementById("view-data").addEventListener('click', (evt) => {
    let thisEl = evt.target
    
    formReadOnly(true)
    removeActiveClass(thisEl.parentElement.parentElement)

    thisEl.parentElement.classList.add('active')
})


// membuang class aktif dari anak kontainer yang di tuju
function removeActiveClass(containerEl) {
    let child = containerEl.children;

    for (let x = 0; x < child.length; x++) {
        child[x].classList.remove('active')
    }
}

// toggle untuk formulir dapat di edit atau tidak
function formReadOnly(isReadOnly) {
    let formEl = document.getElementById('user-form')
    let inputField = formEl.getElementsByTagName('input');

    for(let x = 0; x < inputField.length; x++) {
        inputField[x].readOnly = isReadOnly
    }
}

// event setelah list user ter click
function listUserClicked(evt, userData) {
    let listEl = evt.target;
    removeActiveClass(listEl.parentElement)
    listEl.classList.add('active')
    document.getElementById("view-data").click();
    setFormData(userData)
}

// set nilai ke formulir
function setFormData(data) {
    document.getElementById('first-name').value = data.first_name
    document.getElementById('last-name').value = data.last_name
    document.getElementById('email').value = data.email
    document.getElementById('site').value = data.website
    document.getElementById('about').textContent = ""
}

// fungsi mengambil data user dari server
function getUser(page) {
    fetch(`${resAPI.base}/users?access-token=${resAPI.token}&_format=${resAPI.format}&page=${page}`)
        .catch(() => console.error("gagal menggambil user dari server"))
        .then((res) => res.json())
        .then((obj) => {

            // check sukses atau tidak
            if (!obj._meta.success) {
                console.error(`error : ${obj._meta.message}`)
                return
            }

            // memilih penampung element list
            let listElContainer = document.getElementById('user-list')
            // membuatnya kosong
            listElContainer.innerHTML = ''

            // Melooping hasil data
            obj.result.forEach((row) => {
                // Membuat Element
                let listEl = document.createElement('li')
                listEl.setAttribute('class', 'list-group-item p-1')
                listEl.textContent = row.first_name

                // membuat element list ini memiliki event
                listEl.addEventListener('click', (evt) => {
                    listUserClicked(evt, row)
                })

                // Meletakanya pada element penampung
                listElContainer.append(listEl);
            })

            // untuk trigger click list user pertama
            listElContainer.getElementsByTagName('li')[0].click()
        })
}

getUser(1);