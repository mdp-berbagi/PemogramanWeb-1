var ul = document.getElementById('users');
var cari = document.getElementById('cari');
var btnReset = document.getElementById('btnReset');
var btnSave = document.getElementById('btnSave');
var btnUpdate = document.getElementById('btnUpdate');
var btnDelete = document.getElementById('btnDelete');
var avatar = document.getElementById('avatar');
var name = document.getElementById('name');
var name2 = document.getElementById('name2');
var email = document.getElementById('email');
var date = document.getElementById('birth');
var gender = document.getElementsByName('JK');
var phone = document.getElementById('phone');
var address = document.getElementById('address');
getdata(1);

//MEMBUAT BUTTON SAVE
btnSave.addEventListener('click', function () {
    var gender = document.getElementsByName('JK');
    var name = document.getElementById('name');
    if (gender[0].checked == true) {
        gender.value = 'male';
    }
    else {
        gender.value = 'female';
    }
    var date = document.getElementById('birth');

    var data = {
        'first_name': name.value,
        'last_name': name2.value,
        'email': email.value,
        'dob': date.value,
        'gender': gender.value,
        'phone': phone.value,
        'address': address.value
    }
    SaveData(data);
})

function SaveData(formData) {
    fetch('https://gorest.co.in/public-api/users', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
            "Authorization": "Bearer F_XqU3m7l1hsFwmnHURXgOh_-QRyIC3BRes_"
        },
        'body': JSON.stringify(formData)
    })
        .then(response => {
            return response.json();
        })
        .then(result => {
            if (result['_meta']['success'] == true) {
                alert("Berhasil Menyimpan Data");
            }
            else {
                alert("Data Sudah Ada Di penyimpanan");
            }
        })
}

//MEMBUAT BUTTON UPDATE
function UpdateData(x) {
    btnUpdate.addEventListener('click', function () {
        var gender = document.getElementsByName('JK');
        var name = document.getElementById('name');
        if (gender[0].checked == true) {
            gender.value = 'male';
        }
        else {
            gender.value = 'female';
        }
        var date = document.getElementById('birth');
        fetch('https://gorest.co.in/public-api/users/' + x, {
            'method': 'PUT',
            'headers': {
                'Content-Type': 'application/json',
                "Authorization": "Bearer F_XqU3m7l1hsFwmnHURXgOh_-QRyIC3BRes_"
            },
            'body': JSON.stringify({
                'first_name': name.value,
                'last_name': name2.value,
                'email': email.value,
                'dob': date.value,
                'gender': gender.value,
                'phone': phone.value,
                'address': address.value
            })
        })
            .then(response => {
                ul.innerHTML = "";
                getdata(1);
            })
            .then(result => {
                console.log(result);
            })

    })
}

//MEMBUAT BUTTON RESET
btnReset.addEventListener('click', function () {
    var avatar = document.getElementById('avatar');
    var name = document.getElementById('name');
    avatar.setAttribute('src', null);
    name.value = null;
    name2.value = null;
    email.value = null;
    date.value = null;
    gender.value = null;
    phone.value = null;
    address.value = null;
})

//MEMBUAT BUTTON DELETE
function DeleteData(a) {
    btnDelete.addEventListener('click', function () {
        fetch('https://gorest.co.in/public-api/users/' + a, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
                "Authorization": "Bearer F_XqU3m7l1hsFwmnHURXgOh_-QRyIC3BRes_"
            }
        })
            .then(response => {
                ul.innerHTML = "";
                getdata(1);
            })
    })
}


//UNTUK MENGAMBIL NILAI ID
function getNoData(a) {
    for (var j = 0; j < a.length; j++) {
        a[j].addEventListener('click', function () {
            var x = this.value;
            DeleteData(x);
            UpdateData(x);
            console.log(x);
            fetch('https://gorest.co.in/public-api/users/' + x, {
                'method': 'GET',
                'headers': {
                    "Authorization": "Bearer F_XqU3m7l1hsFwmnHURXgOh_-QRyIC3BRes_"
                }
            })
                .then(response => response.json())
                .then(result => {
                    var data2 = result['result'];
                    var name = document.getElementById('name');
                    var name2 = document.getElementById('name2');
                    avatar.setAttribute('src', data2['_links']['avatar']['href']);
                    name.value = data2['first_name'];
                    name2.value = data2['last_name'];
                    email.value = data2['email'];
                    date.value = data2['dob'];
                    if (data2['gender'] == 'male') {
                        gender[1].checked = false;
                        gender[0].checked = true;
                    }
                    else {
                        gender[1].checked = true;
                        gender[0].checked = false;
                    }
                    phone.value = data2['phone'];
                    address.value = data2['address'];

                })

        })
    }
}

//MEMBERIKAN NILAI UNTUK LIST NAMA
function getdata(a) {
    fetch('https://gorest.co.in/public-api/users', {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
            "Authorization": "Bearer F_XqU3m7l1hsFwmnHURXgOh_-QRyIC3BRes_"
        }
    })
        .then(response => {
            return response.json();
        })
        .then(result => {
            var data = result['result'];

            for (var i = 0; i < data.length; i++) {
                var li = document.createElement('li');
                li.textContent = data[i]['first_name'];
                li.setAttribute('class', "list-group-item");
                li.setAttribute('value', data[i]['id']);
                ul.appendChild(li);
            }
            var list = document.getElementById('users').getElementsByTagName('li');
            getNoData(list);
        })
}

//CARI
cari.addEventListener('change', function () {
    ul.innerHTML = "";
    users.forecah(function (v, i) {
        if (v.data['first_name'].search(cari.value) == 0) {
              var li = document.createElement('li');
            li.textContent = v.data['first_name'];
            ul.appendChild(li);
        }
    })
})