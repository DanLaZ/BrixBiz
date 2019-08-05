module.exports = function(sequelize, DataTypes) {
  var SmallBiz = sequelize.define("SmallBiz", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return SmallBiz;
};
