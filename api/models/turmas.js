'use strict';
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Turmas', {
  data_inicio: DataTypes.DATEONLY
  }, {});
  Turmas.associate = function(models) {

    Turmas.hasMany(models.matriculas, {foreignKey: 'turma_id'})
    Turmas.belongsTo(models.Pessoas)
    Turmas.belongsTo(models.niveis)
  };
  return Turmas;
};