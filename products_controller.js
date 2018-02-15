module.exports = {

    create: (req, res, next) => {
        const db = req.app.get('db')

        db.create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl]).then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    },
        
    getOne:  (req, res, next) => {
        const db = req.app.get('db')

        db.read_product([req.params.id]).then(product => res.status(200).send(product))
        .catch(() => res.status(500).send())
    },

    getAll:  (req, res, next) => {
        const db = req.app.get('db')

        db.read_products().then(products => res.status(200).send(products))
        .catch(() => res.status(500).send())
    },

    update:  (req, res, next) => {
        const db = req.app.get('db')
        console.log(req.query)

        db.update_product([req.params.id, req.query.desc]).then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    },

    delete:  (req, res, next) => {
        const db = req.app.get('db')

        db.delete_product([req.params.id]).then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    }

}