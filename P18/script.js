function userListGetter(paging) {
    fetch("https://reqres.in/api/users?page=" + paging)
        .catch((result) => console.error(result))
        .then(res => res.json())
        .then((obj) => {
            console.log(obj);
            
            // pagination
            const paginationEl = document.getElementById('pagination-container');
            paginationEl.innerHTML = '';

            for(let x = 1; x <= obj.total_pages; x++) {
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

            //lising user data
            let listUserContainer = document.getElementById('user-list')
            listUserContainer.innerHTML = ''

            obj.data.forEach(row => {

                let listEl = document.createElement('li')
                listEl.setAttribute('class', 'list-group-item')
                listEl.textContent = row.first_name
                listEl.addEventListener('click', () => {
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

userListGetter(1);