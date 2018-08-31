module.exports = {

    getTheInventory: (req, res) => {
        // console.log('HOLY COW IT WORKED!!!')
        const db = req.app.get('db')
        db.get_inventory()
        .then(inventory => {
            res.status(200).send(inventory)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    },

    addItem: (req, res) => {
        let {imgURL, pName, pPrice} = req.body
        const db = req.app.get('db')
        db.add_to_inventory({imgURL, pName, pPrice})
            .then(inventory => {
                res.status(200).send(inventory)
            })
            .catch(err => {
                res.status(500).send(err)
            })

        // res.status(200).send()
        console.log(pName)

    }




}