const database = require('../models')


class PessoaController {
static async  pegaTodasAsPessoas (req,res) {
 try {
  const todasAsPessoas = await database.Pessoas.findAll()
  //tem que por o res e o return
  return res.status(200).json({todasAsPessoas})
   
 } catch( error) {
  return res.status(500).json({message: `Aconteceu o seguinte erro ${error}`})
 }
}

}

module.exports = PessoaController