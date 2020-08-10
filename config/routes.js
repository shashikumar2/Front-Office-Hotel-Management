const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const customersController = require('../app/controllers/customersController')
const roomsController = require('../app/controllers/roomsController')
const bookingsController = require('../app/controllers/bookingsController')
const workersController = require('../app/controllers/workersController')
const servicesController = require('../app/controllers/servicesController')
const billsController = require('../app/controllers/billsController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.delete('/users/logout',authenticateUser,  usersController.logout)
router.get('/users/account', authenticateUser, usersController.account)

router.get("/customers", customersController.list);
router.get("/customers/:id", customersController.show);
router.post("/customers/new", customersController.create);
router.put("/customers/:id", customersController.update);
router.delete("/customers/:id", customersController.destroy);

router.get("/rooms", roomsController.list);
router.get("/rooms/:id", roomsController.show);
router.post("/rooms/new", roomsController.create);
router.put("/rooms/:id", roomsController.update);
router.delete("/rooms/:id", roomsController.destroy);

router.get("/bookings", bookingsController.list);
router.get("/bookings/:id", bookingsController.show);
router.post("/bookings/new", bookingsController.create);
router.put("/bookings/:id", bookingsController.update);
router.delete("/bookings/:id", bookingsController.destroy);

router.get("/workers", workersController.list);
router.get("/workers/:id", workersController.show);
router.post("/workers/new", workersController.create);
router.put("/workers/:id", workersController.update);
router.delete("/workers/:id", workersController.destroy);

router.get("/services", servicesController.list);
router.get("/services/:id", servicesController.show);
router.post("/services/new", servicesController.create);
router.put("/services/:id", servicesController.update);
router.delete("/services/:id",servicesController.destroy);

router.get("/billings", billsController.list);
router.get("/billings/show/:id", billsController.show);
router.post("/billings/new", billsController.create);
router.put("/billings/:id", billsController.update);
router.delete("/billings/:id", billsController.destroy);

module.exports = router