// controllers/ArtefactController.js
const Artefact = require('../models/artefact'); // Adjust the path as necessary

class ArtefactController {
  // Fetch and return a list of all artefacts
  static async listArtefacts(req, res) {
    try {
      const artefacts = await Artefact.find({});
      res.status(200).json(artefacts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Fetch and return details of a specific artefact
  static async getArtefactDetails(req, res) {
    const { artefactId } = req.params;
    try {
      const artefact = await Artefact.findById(artefactId);
      if (!artefact) {
        return res.status(404).json({ message: 'Artefact not found' });
      }
      res.status(200).json(artefact);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = ArtefactController;
