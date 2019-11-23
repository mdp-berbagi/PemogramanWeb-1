const resAPI = {
    format: "json",
    base: "https://gorest.co.in/public-api",
    Authorization: "Bearer hhfqx3QclCh70kvz2IukBWMwqkuptY5sWHum",
    activePage: 1,
    activeUserID: null
}

document.getElementById('user_searcher').addEventListener('change',function() {
    getUser(1, this.value)
})

document.getElementById('user-form').addEventListener('submit', (evt) => {
    let thisEl = evt.target;
    let isFor = thisEl.getAttribute('formfor');
    let serializeData = new URLSearchParams(new FormData(thisEl)).toString();

    editOrUpdate(serializeData, isFor == 'edit' ? resAPI.activeUserID : null)
    evt.preventDefault();
})

document.getElementById('delete-data').addEventListener('click', () => {
    deleteUser(resAPI.activeUserID)
    formReadOnly(true)
})

document.getElementById("view-data").addEventListener('click', (evt) => {
    let thisEl = evt.target
    
    formReadOnly(true)
    removeActiveClass(thisEl.parentElement.parentElement)

    thisEl.parentElement.classList.add('active')
})

document.getElementById("edit-data").addEventListener('click', (evt) => {
    let thisEl = evt.target
    
    formReadOnly(false, "Edit")
    removeActiveClass(thisEl.parentElement.parentElement)
    thisEl.parentElement.classList.add('active')

    document.getElementById('user-form').setAttribute('formfor', 'edit');
})

document.getElementById("add-data").addEventListener('click', (evt) => {
    let thisEl = evt.target
    
    formReadOnly(false, "Add")
    removeActiveClass(thisEl.parentElement.parentElement)
    thisEl.parentElement.classList.add('active')

    document.getElementById('user-form').setAttribute('formfor', 'add');
})



document.getElementById('btn-prev-data').addEventListener('click', (evt) => {
    resAPI.activePage = resAPI.activePage - 1;
    getUser(resAPI.activePage);
})

document.getElementById('btn-next-data').addEventListener('click', (evt) => {
    resAPI.activePage = resAPI.activePage + 1;
    getUser(resAPI.activePage);
})


// membuang class aktif dari anak kontainer yang di tuju
function removeActiveClass(containerEl) {
    let child = containerEl.children;

    for (let x = 0; x < child.length; x++) {
        child[x].classList.remove('active')
    }
}

// toggle untuk formulir dapat di edit atau tidak
function formReadOnly(isReadOnly, buttonSubmitName) {
    let formEl = document.getElementById('user-form')
    let inputField = formEl.getElementsByTagName('input');

    for(let x = 0; x < inputField.length; x++) {
        inputField[x].disabled = isReadOnly
    }

    document.getElementById('btn-submit-container').style.display = isReadOnly ? "none" : "";
    if(buttonSubmitName) {
        document.getElementById('btn-submit').textContent = buttonSubmitName;
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
    console.log(data);
    document.getElementById('user-photo').setAttribute('src', data._links.avatar.href)
    document.getElementById('avatar').value = data._links.avatar.href
    document.getElementById('first-name').value = data.first_name
    document.getElementById('last-name').value = data.last_name
    document.getElementById('email').value = data.email
    document.getElementById('site').value = data.website
    document.getElementById('gender-' + data.gender).checked = true
    document.getElementById('dob').value = data.dob
}

function editOrUpdate(newData, userID) {
    let config = {
        method: userID ? 'PUT' : 'POST',
        headers: {
            Authorization: resAPI.Authorization,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: newData
    }

    userID = userID ? `/${userID}` : ''
    
    fetch(`${resAPI.base}/users${userID}`, config)
        .catch(() => {console.log('Method tidak dapat digunakan');})
        .then(res => res.json())
        .then(obj => {
            console.log(obj);

            if(obj._meta.success) {
                alert('Data saved')
            }else{
                obj.result.forEach(function(row) {
                    alert(row.message)
                })
            }
        })

}

function deleteUser(userID) {
    let config = {
        method: 'DELETE',
        headers: {
            Authorization: resAPI.Authorization
        }
    }

    fetch(`${resAPI.base}/users/${userID}`, config)
        .catch(() => console.error('cant delete off'))
        .then((res) => res.json())
        .then((obj) => {
            if(obj._meta.success) {
                alert('hapus berhasil!')
                getUser(resAPI.activePage);
            }
        })
}

// fungsi mengambil data user dari server
function getUser(page, firstName) {
    if(resAPI < 1) {
        alert('Page tidak boleh kurang dari 0');
        return;
    }

    let fetchConfig = {
        method: 'GET',
        headers: {
            Authorization: resAPI.Authorization
        }
    }

    let searchFirstName = '';
    if(firstName) {
        searchFirstName = `&first_name=${firstName}`
    }

    fetch(
        `${resAPI.base}/users?_format=${resAPI.format}&page=${page}${searchFirstName}`, 
        fetchConfig
    )
        .catch(() => console.error("gagal menggambil user dari server"))
        .then((res) => res.json())
        .then((obj) => {

            resAPI.activePage = page;

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
                listEl.setAttribute('class', 'list-group-item py-1')
                listEl.textContent = row.first_name

                // membuat element list ini memiliki event
                listEl.addEventListener('click', (evt) => {
                    resAPI.activeUserID = row.id
                    listUserClicked(evt, row)
                })

                // Meletakanya pada element penampung
                listElContainer.append(listEl);
            })

            // untuk trigger click list user pertama
            listElContainer.getElementsByTagName('li')[0].click()
        })
}

getUser(resAPI.activePage);