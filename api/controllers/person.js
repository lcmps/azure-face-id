const uuidv4 = require('uuid/v4');
module.exports = app => {
  const personDB = app.data.person
  const controller = {};

  controller.listPersons = (req, res) => res.status(200).json(personDB);

  controller.createPerson = (req, res) => {
    personMock.data.push({
      id: uuidv4(),
      parentId: uuidv4(),
      name: req.body.name,
      birthDate: req.body.birthDate,
      cellphone: req.body.cellphone,
      phone: req.body.phone,
      email: req.body.email,
      ocupation: req.body.ocupation,
      state: req.body.state,
    });
    res.status(200).json(personDB)
  }

  return controller;
}