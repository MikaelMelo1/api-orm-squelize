const database = require("../models");

class PessoaController {
  //pega todas as pessoas
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json({ todasAsPessoas });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Aconteceu o seguinte erro ${error}` });
    }
  }

  // procura uma pessoa database
  static async pegaUmaPessoa(req, res) {
    try {
      const { id } = req.params; //parametro da requisição
      const UmaPessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json({ UmaPessoa });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  //cria pessoa
  static async criaPessoa(req, res) {
    try {
      const novaPessoa = req.body;
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //apaga pessoa
  static async deletePessoa(req, res) {
    try {
      const { id } = req.params;
      const deletePessoa = await database.Pessoas.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).json(`O id${id} deletado com sucesso!`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  //atualizando pessoa
  static async AtualizaPessoa(req, res) {
    try {
      const novaInfos = req.body;
      const { id } = req.params;

      await database.Pessoas.update(novaInfos, { where: { id: Number(id) } });
      const pessoaAtualiza = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualiza);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
