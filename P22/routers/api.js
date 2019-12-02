exports.router = {

    "POST /product": (req, res) => {
        res.json({
            success: false,
            message: "please send data for this method"
        })
    },

    "DELETE /product": (req, res) => {
        res.json({
            success: false,
            message: "Cant delete, please send data for this method"
        })
    }

}