const { Router } = require("express");
 
// Controller
const {housesFilter,getHousesParam,updateHouse,getHouses,getHouse,createHouse,deleteHouse} = require("../controllers/houses")
const { register, signin,checkAuth } = require('../controllers/auth')
const { users, Profile, updateUser,deleteUser } = require('../controllers/user')
const { addTransaction,getMyTransaction,createTransaction,StatusUpdate,updateTransaction,getTransaction,getAllTransaction,transactionId } = require('../controllers/transaction')
const { getCity } = require('../controllers/city')
const { getProducts,getProduct,createProduct } = require('../controllers/product')

// Middleware 
// const { auth } = require('../middlewares/auth')
const { auth,authentication } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/uploadFile')

const router = Router();
// router.post("/transaction", auth,uploadFile("imageFile"), addTransaction)
router.post("/transaction", auth,uploadFile("imageFile"), createTransaction)
// 
router.post('/register', register)
router.post('/login', signin)
router.get('/products', getProducts)
router.get("/product/:id", getProduct)
router.post("/product", uploadFile("imageFile"), createProduct, )
// router.post("/product", authentication,uploadFile("imageFile"), createProduct, )
router.get("/mytransaction",auth, getMyTransaction)
router.get("/transaction/:id", getTransaction)
router.post("/transaction", auth,uploadFile("imageFile"), createTransaction)
router.get("/transactions", getAllTransaction)
router.put("/transaction/:id", authentication, StatusUpdate)

router.get('/user/', authentication, Profile)   
router.patch('/user', auth, uploadFile("imageFile"), updateUser)
router.get('/users', users)
router.get("/check-auth", auth, checkAuth);

router.patch("/updatetransaction/:id", uploadFile("imageFile"), updateTransaction)
router.put("/updatetransacti/:id", StatusUpdate)
router.get("/transaction", transactionId)


// transactionId

module.exports = router;
