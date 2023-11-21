const {showTattooArtistController} = require("./tattooartists.controller");
const {showClientController} = require("./clients.controller");

exports.showLandingPage = async (req, res) => {
    res.render('landingpage')
}


exports.showInformation = async (req,res) =>{
    res.render('information')
}

exports.showTattoArtists = async (req,res) =>{
    res.render('tattoartists')
}

exports.showTattooArtistsCrud = async (req, res) => {
    const tattooartists = await showTattooArtistController();
    res.render('tattoartistcrud', {
        tattooartists: tattooartists.success,
    });
};

exports.showClientCrud = async (req, res) => {
    const clients= await showClientController();
    res.render('clientscrud', {
        clients: clients.success,
    });
};

