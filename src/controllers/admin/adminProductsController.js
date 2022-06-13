const { validationResult } = require('express-validator');
const db = require('../../database/models');
const fs = require('fs');
const path = require('path');



module.exports = {
    /* Envia la vista de listado de productos */
    list: (req, res) => {
        db.Product.findAll()
        .then(product => {
          res.render('admin/products/listProducts', {
              titulo: "Productos"
          })
        } )
      },
   

    /* Envia la vista de formulario de creación de emprendimiento */
    productAdd: (req, res) => {
        res.render('admin/products/addProduct', { titulo: "Agregar Producto"})
    },


    /* Recibe los datos del form de creación y guarda el emprendimiento en la DB */
    productCreate: (req, res) => {
    let errors = validationResult(req);
        
    if(errors.isEmpty()){
        db.Product.create({
            ...req.body,
            user_id: 4 
        })
        .then((project) => {
            let arrayImages = req.files.map(image => {
            return {
                imageName: image.filename,
                product_id: product.id
            } 
            })

            db.ProductImage.bulkCreate(arrayImages)
            .then(() => res.redirect('/admin/productos'))
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    }else{
        res.render('admin/products/addProduct', { 
        titulo: "Agregar Producto",
        errors: errors.mapped(),
        old: req.body
        })
    } 
    },


    /* Envia la vista de form de edición de producto */
    
    productEdit: (req, res) => {
        let productId = +req.params.id;
  
        db.Product.findByPk(productId)
        .then(producto => {
          res.render('admin/products/editProduct', {
            titulo: "Editar producto",
            producto
          })
        })
        .catch(error => console.log(error))
      },


    /* Recibe los datos actualizados del form de edición */
   
    productUpdate: (req, res) => {
        let errors = validationResult(req);
  
        if(errors.isEmpty()){
          db.Product.update({
            ...req.body,
            user_id: 4 /* req.session.user.id */
          },{
            where: {
              id: req.params.id,
            }
          })
          .then(() => {
            if(req.files !== undefined){
              //1 - Preguntar si está subiendo imagenes
              if(req.files.length > 0){
                //2 - Traer imágenes del project
                //2 - a. obtener todas las imágenes del proyecto
                db.Product.findAll({
                  where: {
                    image: req.params.id
                  }
                })
                .then((image) => {
                  //2 - b. hacer un array con los nombres de las imagenes.
                  let imageNames = images.map(image => image.imageName);
                  //3 - Eliminar imagenes del servidor
                  imageNames.forEach(image => {
                    if(fs.existsSync(path.join(__dirname, `../../../public/images/products/${image}`))){
                      fs.unlinkSync(path.join(__dirname, `../../../public/images/products/${image}`))
                    }else{
                      console.log("-- No se encontró el archivo");
                    }
                  });
                  //4 - Eliminar las imágenes de la tabla
                  db.Product.destroy({
                    where: {
                      image: req.params.id,
                    }
                  })
                  .then(() => {
                    //5 - Cargar nuevas imágenes
                    let arrayImages = req.files.map(image => {
                      return {
                        imageName: image.filename,
                        product_id: req.params.id
                      } 
                     })
         
                     db.Product.bulkCreate(arrayImages)
                     .then(() => res.redirect('/admin/productos'))
                     .catch(error => console.log(error))
                  })
                  .catch(error => console.log(error))
                })
                .catch(error => console.log(error))
              }else{
                res.redirect('/admin/productos')
              }
            }
          })
          .catch(error => console.log(error))
        }else{
          let productId = +req.params.id;
  
          
          db.Product.findByPk(productId)
          .then(producto => {
            res.render('admin/products/editProduct', {
              titulo: "Editar Producto",
              producto,
              errors: errors.mapped(),
              old: req.body
            })
          })
          .catch(error => console.log(error))
        }
      },

    /* Recibe la info del producto a eliminar */
    productDelete: (req, res) => {
        let productId = +req.params.id;
  
        db.Product.findAll({
          where: {
            product_id: productId,
          }
        })
        .then((images) => {
          let imageNames = images.map(image => image.imageName);
  
          imageNames.forEach(image => {
            if(fs.existsSync(path.join(__dirname, `../../../public/images/products/${image}`))){
              fs.unlinkSync(path.join(__dirname, `../../../public/images/products/${image}`))
            }else{
              console.log("-- No se encontró el archivo");
            }
          });
  
          db.Product.destroy({
            where: {
              product_id: productId,
            }
          })
          .then(() => {
            //Eliminar los productos
            db.Product.destroy({
              where: {
                product_id: productId,
              }
            })
            .then(() => {
              db.Product.destroy({
                where: {
                  id: productId
                }
              })
              .then(() => res.redirect('/admin/productos'))
              .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error))
          })
        })
        .catch((error) => console.log(error))
      },
}
