module.exports = {
    products: (req, res)=> {
        res.send ('Futura Carta del resto')
    } ,
    product: (req, res)=> {
        res.render('productDetail')
    } ,
    carrito: (req, res) => {
        res.render('carrito-compra')
    }

}