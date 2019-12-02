exports.router = {

    "GET /": (req, res) => {
        res.view("index.html")
    },

    "GET /product": (req, res) => {
        res.view("product/index.html")
    },

    "GET /product/create": (req, res) => {
        res.view("product/create.html")
    }
}