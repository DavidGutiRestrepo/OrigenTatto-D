const express = require('express');
const router = express.Router();



// Controllers

const controllerClients = require('../controller/clients.controller');

const controllerTattooArtists = require('../controller/tattooartists.controller');

const controllerViews = require('../controller/views.controller')

router.get('/', controllerViews.showLandingPage);
router.get('/information', controllerViews.showInformation);
router.get('/tattoartists', controllerViews.showTattoArtists);
router.get('/tattoartistcrud', controllerViews.showTattooArtistsCrud);

router.get('/clientcrud', controllerViews.showClientCrud);





router.get('/showclient', controllerClients.showClientController);
router.post('/newclient', controllerClients.createClientController);
router.put('/updateclient', controllerClients.updateClientController);
router.delete('/deleteclient', controllerClients.deleteClientController);
router.post('/loginclient', controllerClients.loginClientController);




router.get('/showtattooartist', controllerTattooArtists.showTattooArtistController);
router.post('/newtattooartist', controllerTattooArtists.createtattooArtistController);
router.put('/updatetattoartist', controllerTattooArtists.updatetattooArtistController);
router.delete('/deletetattoortist', controllerTattooArtists.deletetattooArtistController);
module.exports = router;
