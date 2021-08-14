const { User, Profile, Product } = require("../../models");
const { v4: uuidv4 } = require("uuid");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Profile, 
          as: "profile",
          attributes: {
            exclude: ["user_id", "createdAt", "updatedAt"],
          },
        },
        {
          model: Product,
          as: "products",
          attributes: {
            exclude: ["user_id", "createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      message: "resource has successfully get",
      data: users,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      message: "resource has successfully get",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create({
      id: uuidv4(),
      ...req.body,
    });
    res.send({
      status: "success",
      message: "resource has successfully created",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.update(req.body, {
      where: {
        id,
      },
    });
    const user = await User.findOne({
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
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
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

// profile
exports.createProfile = async (req, res) => {
  const { id } = req.params;
  try {
    await Profile.create({
      ...req.body,
      user_id: id,
    });

    const profile = await Profile.findOne({
      where: {
        user_id: id,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
      ],
      attributes: {
        exclude: ["user_id", "createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      message: "resource has successfully deleted",
      data: profile,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};
