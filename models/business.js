module.exports = function(sequelize, Sequelize) {
  var Business = sequelize.define("business", {
    biz_id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    biz_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    biz_type: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    biz_address: {
      type: Sequelize.STRING
    },

    biz_zip: {
      type: Sequelize.INTEGER
    },

    LAT: {
      type: Sequelize.DECIMAL,
      validate: {
        isEmail: true
      }
    },

    LNG: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },

    is_small_biz: {
      type: Sequelize.BOOLEAN
    },

    year_est: {
      type: Sequelize.DATE
     
    },
    has_profile: {
      type: Sequelize.BOOLEAN
    } 
  }, 
  {
    freezeTableName: true,
  });
  return Business;
};
