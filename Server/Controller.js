module.exports = {

    getTheInventory: (req, res) => {
        // console.log('HOLY COW IT WORKED!!!')
        const db = req.app.get('db')
        db.get_inventory()
        .then(inventory => {
            res.status(200).send(inventory)
        })
    },

    addItem: (req, res) => {
        let {imgURL, pName, pPrice} = req.body
        res.status(200).send("pName")
        console.log(pName)

    }




}