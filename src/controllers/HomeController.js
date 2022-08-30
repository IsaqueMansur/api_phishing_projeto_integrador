import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Isaque',
      sobrenome: 'Mansur',
      email: 'isaquemansur@gmail.com',
      idade: 21,
      peso: 70.5,
      altura: 1.72,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
