const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");

// write your handlers here...
const getClientsHandler = (req, res) => {
  res.status(200).json({
    status: 200,
    data: clients,
  });
};

const getClientByIdHandler = (req, res) => {
  const { id } = req.params;

  const filteredClients = clients.filter((client) => {
    if (client.id === id) {
      return true;
    }
  });
  if (filteredClients.length > 0) {
    return res.status(200).json({
      status: 200,
      data: filteredClients[0],
    });
  } else {
    return res.status(400).json({
      status: 400,
      message: "There is no such client with the ID you have entered.",
    });
  }
};

const addClientHandler = (req, res) => {
  const newClientEntry = req.body;

  const {
    isActive,
    age,
    name,
    gender,
    company,
    email,
    phone,
    address,
  } = newClientEntry;

  const isNewClient = clients.filter((client) => {
    if (client.email === newClientEntry.email) {
      return true;
    }
  });

  if (isNewClient.length !== 0) {
    res.status(405).json({
      status: 405,
      message: "Not allowed to add existing client",
    });
  } else if (
    isActive === undefined ||
    age === undefined ||
    name === undefined ||
    gender === undefined ||
    company === undefined ||
    email === undefined ||
    phone === undefined ||
    address === undefined
  ) {
    res.status(406).json({
      status: 406,
      message: "Incomplete new client entry is not accepted.",
    });
  } else {
    newClientEntry.id = uuidv4().replace(/-/g, "").slice(0, 24);
    clients.push(newClientEntry);
    return res.status(201).json({
      status: 201,
      message: `Client ${req.body.name} was successfully added!`,
      clientDetails: req.body,
    });
  }
};

const deleteClientById = (req, res) => {
  const findClientObj = clients.filter((client) => {
    if (client.id == req.query.id) {
      return true;
    }
  });

  if (findClientObj.length === 0) {
    res.status(406).json({
      status: 406,
      message: "There are no clients with the ID entered.",
    });
  } else {
    const findClientIndex = clients.indexOf(findClientObj[0]);
    clients.splice(findClientIndex, 1);
    return res.status(202).json({
      status: 202,
      message: `Client with the id of ${req.query.id} was successfully deleted`,
    });
  }
};

module.exports = {
  getClientsHandler,
  getClientByIdHandler,
  addClientHandler,
  deleteClientById,
};
