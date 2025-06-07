const Expediente = require('../models/Expediente');

exports.getAllExpedientes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await Expediente.findAndCountAll({
      limit: limit,
      offset: offset,
      order: [['id', 'ASC']]
    });

    res.json({
      expedientes: rows,
      totalExpedientes: count,
      totalPaginas: Math.ceil(count / limit),
      paginaActual: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getExpedienteById = async (req, res) => {
  try {
    const expediente = await Expediente.findByPk(req.params.id);
    if (expediente) {
      res.json(expediente);
    } else {
      res.status(404).json({ message: 'Expediente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createExpediente = async (req, res) => {
  try {
    const nuevoExpediente = await Expediente.create(req.body);
    res.status(201).json(nuevoExpediente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateExpediente = async (req, res) => {
  try {
    const [updated] = await Expediente.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedExpediente = await Expediente.findByPk(req.params.id);
      res.json(updatedExpediente);
    } else {
      res.status(404).json({ message: 'Expediente no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteExpediente = async (req, res) => {
  try {
    const deleted = await Expediente.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.json({ message: 'Expediente eliminado' });
    } else {
      res.status(404).json({ message: 'Expediente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};