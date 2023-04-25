import Fishing from '../models/CapturedEmail';

class UserController {
  async handleFishing(req, res) {
    try {
      const { email } = req.params;
      console.log(email);
      await Fishing.create({ email });
      return res.json({ response: email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
