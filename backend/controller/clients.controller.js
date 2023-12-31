const clientUseCases = require('../usecases/clients.usecase');

exports.showClientController = async (req, res) => {
  try {
    const result = await clientUseCases.showClients();

    if (result.error) {
      return {
        error: result.error,
      };
    } else if (result.success) {
      return {
        success: result.success,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: 'Ocurrió un error al obtener los datos del cliente',
    };
  }
};
exports.createClientController = async (req, res) =>{
  try {
    const result = await clientUseCases.createClient(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateClientController = async (req, res) =>{
  try {
    const result = await clientUseCases.updateClient(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteClientController = async (req, res) => {
  try {
    const result = await clientUseCases.deleteClient(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.loginClientController = async (req, res) => {
  try {
    const result = await clientUseCases.loginClient(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else {
      return res.redirect(result.path)
    }
  } catch (error) {
    console.log(error);
  }
}