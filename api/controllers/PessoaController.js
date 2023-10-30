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
      return res.status(200).json(deletePessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  //atualizando pessoa
  static async AtualizaPessoa(req, res) {
    try {
      const novaInfos = req.body;
      const { id } = req.params;
//procura na database e atualiza
      await database.Pessoas.update(novaInfos, { where: { id: Number(id) } });
      const pessoaAtualiza = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualiza);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //pega matricula
  static async pegaUmaMatricula(req, res) {
    try {
      const { esudanteId, matriculaId } = req.params; //parametro da requisição
      const UmaMatricula = await database.matriculas.findOne({
        where: { id: Number(matriculaId), estudante_id: Number(esudanteId) },
      
      });
      return res.status(200).json({ UmaMatricula });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criandoMatricula(req,res) {
    try {
      const { estudanteId } = req.params;
      const novaMatricula = {...req.body, estudante_id: Number(estudanteId)}
      const novaMatriculaCriada = await database.matriculas.create(novaMatricula)
      return res.status(200).json(novaMatriculaCriada)

    } catch(error) {
      res.status(500).send({message: error.message})

    }
  }

  static async atualizaMatricula(req,res) {
    try {
      const { estudanteId, matriculaId } = req.params;
      const novasInfos = req.body;
      await database.matriculas.update(novasInfos, {where: {id: Number(matriculaId), estudante_id: Number(estudanteId)}})
      const matriculaAtualizada = await database.matriculas.findOne({where: {id: Number(matriculaId)}})
      return res.status(200).json(matriculaAtualizada)
    } catch(erorr) {
      res.status(500).send({message: erorr.message})
    }
  }

  static async deletaMatricula(req,res) {
    try {
const {estudanteId, matriculaId} = req.params
await database.matriculas.destroy({where: {id: Number(matriculaId), estudante_id: Number(estudanteId)}})
return res.status(200).json({message: `id ${matriculaId} deletado`})
    } catch (error) {
      res.status(500).send({message: error.message})
    }
  }
}

module.exports = PessoaController;
