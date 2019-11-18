var maxPagination = 0;
function paginationControl(newPaginationMax) {
    console.log('Fungsi paginationControl dipanggil')
    
    if(newPaginationMax == maxPagination) {
        console.log('Tidak dijalankan karna jumlah pagination sama')
        return;
    }

    console.log('Fungsi paginationControl Dijalankan')

    const paginationEl = document.getElementById('pagination-container')
    paginationEl.innerHTML = ''

    for(let x = 1; x <= newPaginationMax; x++) {
        let newLink = document.createElement('a')
        newLink.setAttribute('href', '#')
        newLink.setAttribute('class', 'page-link ')
        newLink.addEventListener('click', () => {
            userListGetter(x);
        });
        newLink.textContent = x
        
        let newList = document.createElement('li')
        newList.setAttribute('class', 'page-item')
        newList.appendChild(newLink)

        paginationEl.appendChild(newList)
    }

    maxPagination = newPaginationMax
}

function userListGetter(paging) {
    fetch("https://reqres.in/api/users?page=" + paging)
        .catch((result) => console.error(result))
        .then(res => res.json())
        .then((obj) => {

            // pagination
            paginationControl(obj.total_pages)


            //lising user data
            let listUserContainer = document.getElementById('user-list')
            listUserContainer.innerHTML = ''

            obj.data.forEach(row => {

                let listEl = document.createElement('li')
                listEl.setAttribute('class', 'list-group-item')
                listEl.textContent = row.first_name
                listEl.addEventListener('click', (evt) => {
                    document
                        .getElementById('user_name')
                        .textContent = row.first_name + " " + row.last_name

                    document
                        .getElementById('user_email')
                        .textContent = row.email

                    document
                        .getElementById('user_avatar')
                        .setAttribute('src', row.avatar)
                })

                listUserContainer.appendChild(listEl)
            })
        })
}

userListGetter(1)
