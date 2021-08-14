const { House, City } = require("../../models");
const { Op } = require("sequelize");
exports.getCity = async (req, res) => {
  try {
    const path = process.env.PATH_FILE
console.log(path);
    let citys = await City.findAll()
    
    res.send({
      status: "success",
      message: "City has successfully get",
      data: citys

    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};

// by id

exports.getHouse = async (req, res) => {
  try {
    const path = process.env.PATH_FILE

    let house = await House.findOne({
      where: {
        id: req.params.id,
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
        exclude: [ "cities_id","house_id","createdAt", "updatedAt"],
      },

    });

    house = JSON.parse(JSON.stringify(house));
    house = {
      ...house,
      image: path + house.image,
    };
    res.send({
      
      status: "success",
      message: "resource has successfully get",
      data: house,
    //   data: [{
    //     // id: HouseDataStored.id,
    //     address: houses.address,
    //     name: houses.name,
    //     price: houses.price,
    //     typeRent: houses.typeRent,
    //     amenities: houses.amenities.split(","),
    //     bathroom: houses.bathroom,
    //     bedroom: houses.bedroom,
    //     city:{
    //       id:houses.city.id,
    //       name:houses.city.name,
    //     }
    //   },
    // ]
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
exports.createHouse = async (req, res) => {
  try {
    const houses = await House.create({
      ...req.body,
    });
    const HouseDataStored = await House.findOne({
      where: {
        name: req.body.name
      },
      include:{
        model:City,
        as:"city",
        attributes:{
          exclude:["id","houses_id","createdAt", "updatedAt"],
        },
      },
      attributes:{
        exclude:["createdAt", "updatedAt"],
      },
    });


    res.send({
      status: "success",
      message: "resource has successfully created",
      // data:HouseDataStored
      data: {
        // id: HouseDataStored.id,
        address: HouseDataStored.address,
        price: HouseDataStored.price,
        price: HouseDataStored.price,
        typeRent: HouseDataStored.typeRent,
        amenities: HouseDataStored.amenities.split(","),
        bathroom: HouseDataStored.bathroom,
        bedroom: HouseDataStored.bedroom,
        
        city:{
          id:HouseDataStored.city.id,
          name:HouseDataStored.city.name,
        }
      },
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

        data = {
            ...data,
            image
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
