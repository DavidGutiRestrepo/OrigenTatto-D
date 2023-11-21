const express = require('express');
const router = express.Router();



// Controllers
const controllerBooking = require('../controller/booking.controller');
const controllerClients = require('../controller/clients.controller');
const controllerPiercings = require('../controller/piercings.controller');
const controllerTattooArtists = require('../controller/tattooartists.controller');
const controllerTattoos = require('../controller/tattoos.controller');
const controllerUsers = require('../controller/users.controller');
const controllerViews = require('../controller/views.controller')

router.get('/', controllerViews.showLandingPage);
router.get('/information', controllerViews.showInformation);
router.get('/tattoartists', controllerViews.showTattoArtists);
router.get('/tattoartistcrud', controllerViews.showTattooArtistsCrud);

router.get('/clientcrud', controllerViews.showClientCrud);


router.get('/showbooking', controllerBooking.showBookingController);
router.post('/newbooking', controllerBooking.createBookingController);
router.put('/updatebooking', controllerBooking.updateBookingController);
router.delete('/deletebooking', controllerBooking.deleteBookingController);


router.get('/showclient', controllerClients.showClientController);
router.post('/newclient', controllerClients.createClientController);
router.put('/updateclient', controllerClients.updateClientController);
router.delete('/deleteclient', controllerClients.deleteClientController);
router.post('/loginclient', controllerClients.loginClientController);



router.get('/showpiercing', controllerPiercings.showPiercingController);
router.post('/newpiercing', controllerPiercings.createPiercingController);
router.put('/updatepiercing', controllerPiercings.updatePiercingController);
router.delete('/deletepiercing', controllerPiercings.deletePiercingController);


router.get('/showtattoo', controllerTattoos.showTattooController);
router.post('/newtattoo', controllerTattoos.createTattooController);
router.put('/updatetattoo', controllerTattoos.updateTattooController);
router.delete('/deletetattoo', controllerTattoos.deleteTattooController);


router.get('/showuser', controllerUsers.showUserController);
router.post('/newuser', controllerUsers.createUserController);
router.put('/updateuser', controllerUsers.updateUserController);
router.delete('/deleteuser', controllerUsers.deleteUserController);


router.get('/showtattooartist', controllerTattooArtists.showTattooArtistController);
router.post('/newtattooartist', controllerTattooArtists.createtattooArtistController);
router.put('/updatetattoartist', controllerTattooArtists.updatetattooArtistController);
router.delete('/deletetattoortist', controllerTattooArtists.deletetattooArtistController);
module.exports = router;
