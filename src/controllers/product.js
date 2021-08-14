const { product,House, City } = require("../../models");
const { Op } = require("sequelize");
const joi = require('joi')

exports.getProducts = async (req, res) => {
  try {
    const path = process.env.PATH_FILE
console.log(path);
    let products = await product.findAll();
    const parseJSON = JSON.parse(JSON.stringify(products))
console.log(parseJSON)
products = parseJSON.map(product => {
  return {
      ...product,
      photo: product.photo ? path + product.photo : null
      // photo1: product.photo1 ? path + product.photo1 : null,
      // photo2: product.photo2 ? path + product.photo2 : null,
      // photo3: product.photo3 ? path + product.photo3 : null

  }
})
    res.send({
      status: "success",
      message: "resource has successfully get",
      data: products

    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};

// by id

exports.getProduct = async (req, res) => {
  try {
    const path = process.env.PATH_FILE

    let products = await product.findOne({
      where: {
        id: req.params.id,
      },

    });

    products = JSON.parse(JSON.stringify(products));
    products = {
      ...products,
      // image: path + products.image,
      photo:path + products.photo,
      // image1:path + products.image1,
      // image2:path + products.image2,
      // image3:path + products.image3,
      
    };
    res.send({
      
      status: "success",
      message: "resource has successfully get",
      data: products,
   
    });
  } catch (error) {
    console.log(error);
    // console.log(req.query.amenities)


    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};

//create house
exports.createProduct = async (req, res) => {
  // const path = process.env.PATH_FILE

  try {
    let data = req.body
    const photo = req.files.imageFile[0].filename
 
    data = {
      ...data,
      photo,
  }

    const products = await product.create({
      ...req.body,photo
    });

    const productDataStored = await product.findOne({
      where: {
        name: req.body.name
      },
      
    });


    res.send({
      status: "success",
      message: "resource has successfully created",
      data: productDataStored
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({

      status: "failed",
      message: "internal server error",
    });
  }
};

//update
exports.updateHouse = async (req, res) => {
  const { id } = req.params;
  try {
    
    let data = req.body
        const image = req.files.imageFile[0].filename 
        const image1 = req.files.imageFile[1].filename 
        const image2 = req.files.imageFile[2].filename 
        const image3 = req.files.imageFile[3].filename 

        data = {
            ...data,
            image,image1, image2,image3
        }


    await House.update(data, {
      where: {
        id,
      },
    });
    const houses = await House.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      message: "resource has successfully deleted",
      data: houses,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  } 
};

// delete
exports.deleteHouse = async (req, res) => {
  const { id } = req.params;
  try {
    await House.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: "resource has successfully deleted",
      data: 1,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};

// where: {
//   asset_name: {
//       [Op.like]: '%' + request.body.query + '%'
//   }
// }

exports.getHousesParam = async (req, res) => {
  try {
    const houses = await House.findAll({
      where: {
        typeRent: {
          [Op.like]: '%' + req.query.typeRent + '%'
        },
      },

      include: [
        {
          model: City,
          as: "city",
          attributes: {
            exclude: [ "id", "createdAt", "updatedAt"],
          },
        },
       
      ],
      attributes: {
      exclude: [ "createdAt", "updatedAt"],
    },
      
    });

    res.send({
      status: "success",
      message: "resource has successfully get",
      data: houses

    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      // status: "failed",
      message: "internal server error",
    });
  }
};

exports.getHousesTwoParam = async (req, res) => {
  try {
    const houses = await House.findAll({
      where: {
        typeRent: {
          [Op.like]: '%' + req.query.typeRent + '%'
        },
        price: {
          [Op.lt]: parseInt(req.query.price)
        },
      },
      include: [
        {
          model: City,
          as: "city",
          attributes: {
            exclude: [ "id", "createdAt", "updatedAt"],
          },
        },
       
      ],
      attributes: {
      exclude: [ "createdAt", "updatedAt"],
    },
      
    });

    res.send({
  //  console.log(price);

      status: "success",
      message: "resource has successfully get",
      data: houses
      // data: prices
      // prices

    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      // status: "failed",
      message: "internal server error",
    });
  }
};


exports.housesFilter = async (req, res) => {
  try {
    const houses = await House.findAll({
      where: {
        typeRent: {
          [Op.like]: '%' + req.query.typeRent + '%'
        },
        
        price: {
          [Op.lt]: parseInt(req.query.price)
        },
        bedroom: {
          [Op.eq]: parseInt(req.query.bedroom)
        },
        bathroom: {
          [Op.eq]: parseInt(req.query.bathroom)
        },
        amenities: {
          [Op.like]: '%' + req.query.amenities + '%'
        },
        
        // bedroom
        // bathroom
        // amenities
        // budget
      },
      include: [
        {
          model: City,
          as: "city",
          attributes: {
            exclude: [ "id", "createdAt", "updatedAt"],
          },
        },
       
      ],
      attributes: {
      exclude: [ "createdAt", "updatedAt"],
    },
      
    });

    res.send({
      status: "success",
      message: "resource has successfully get",
      data: houses
      // data: prices
      // prices

    });
  } catch (error) {
    console.log(error)
    console.log(req.query.amenities)
    
    res.status(500).send({
      // status: "failed",
      message: "internal server error",
    });
  }
};
