// CONTOH AJAX - HTML
fetch("./sumber/produk.html")
    .catch(() => {
        console.error('Cant get data product from HTML!');
    })

    .then((res) => res.text())
    .then((DOC) => {
        console.log("Hasil DOC : ", DOC);
    });

// CONTOH AJAX - XML
fetch('./sumber/produk.xml')
    .catch(() => {
        console.error('Cant get product data from XML!');
    })

    .then((res) => new DOMParser().parseFromString(res, 'text/xml'))
    .then((DOM) => {
        console.log("Hasil XML : ", DOM);
    })

// CONTOH AJAX - JSON
fetch('./sumber/produk.json')
    .catch(() => {

    })

    .then((res) => res.json())
    .then((obj) => {
        console.log("Hasil JSON : ", obj);
    })