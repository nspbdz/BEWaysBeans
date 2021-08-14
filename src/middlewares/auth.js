const jwt = require('jsonwebtoken')
const { verifyToken } = require("../utils/jwt");

exports.auth = (req, res, next) => {
    try {

        let header = req.header("Authorization")

        //jika token tidak dimasukan
        if (!header) {
            return res.send({
                status: 'failed',
                message: 'Access Failed'
            })
        }

        // agar bearer di pindahkan
        let token = header.replace("Bearer ", "") 


        // const secretKey = "process.env.SECRET_KEY"
        // diambil dari .env
        const secretKey = process.env.SECRET_KEY
 

        const verified = jwt.verify(token, secretKey, (error, decoded) => {
            if (error) {
                return res.send({
                    status: 'failed',
                    message: 'user not verified'
                })
            } else {
                return decoded
            }
        })

        req.idUser = verified.id

        next()

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.authentication = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
      return res.status(401).send({
        status: "error",
        message: "access denied, token is missing",
      });
  
    try {
      const payload = verifyToken(token, process.env.SECRET_KEY);
      req.userId = payload.id;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res
          .status(401)
          .send({ status: "error", message: "Token Expired" });
      } else if (error.name === "JsonWebTokenError") {
        return res
          .status(401)
          .send({ status: "error", message: "Invalid Token" });
      } else {
        return res.status(400).send({ status: "error", message: error });
      }
    }
  };