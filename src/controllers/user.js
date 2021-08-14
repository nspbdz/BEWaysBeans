const { user,listAs,Houses } = require('../../models')

exports.users = async (req, res) => {
    try {

        const path = process.env.PATH_FILE

        let users = await user.findAll({
            include: [
                { 
                  model: listAs,
                  as: "listas",
                  attributes: {
                    exclude: [ "id", "createdAt", "updatedAt"],
                  },
                },
               
              ],
              attributes: {
              exclude: ['password', "createdAt", "updatedAt"],
            },

        })

        const parseJSON = JSON.parse(JSON.stringify(users))

        users = parseJSON.map(user => {
            return {
                ...user,
                image: user.image ? path + user.image : null
            }
        })

        res.send({
            status: 'success',
            data: {
                users
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.Profile = async (req, res) => {
  
    try {
    const path = process.env.PATH_FILE

        const { idUser } = req
        console.log(idUser)
        

        let myData = await user.findOne({
          
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
            }
        })
        myData = JSON.parse(JSON.stringify(myData));
        myData = {
          ...myData,
          image: path + myData.image,
        };
        res.send({
            status: 'success',
            data: {
                myData
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { idUser } = req
        console.log(idUser)
        let data = req.body
        const image = req.files.imageFile[0].filename 

        data = {
            ...data,
            image
        }

        await user.update(data, {
            where: {
                id: idUser
            }
        })

        res.send({
            status: 'success',
            message: 'Update user data succcess'
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// delete
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      await user.destroy({
        where: {
          id,
        },
      });
  
      res.send({
        status: "success",
        message: "resource has successfully deleted",
        data:"user dengan id"+id +"telah terhapus ",
      });
    } catch (error) {
      res.status(500).send({
        status: "failed",
        message: "internal server error",
      });
    }
  };

