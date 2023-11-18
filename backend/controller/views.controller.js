exports.showLandingPage = async (req, res) => {
    res.render('landingpage')
}





exports.showInformation = async (req,res) =>{
    res.render('information')
}

exports.showTattoArtists = async (req,res) =>{
    res.render('tattoartists')
}

exports.showTattoArtistCrud = async (req,res) =>{
    res.render('tattoartistcrud')
}

