module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("business", {
    biz_id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    biz_name: {
      type: DataTypes.STRING,
      notEmpty: true
    },

    biz_type: {
      type: DataTypes.STRING,
      notEmpty: true
    },

    biz_address: {
      type: DataTypes.STRING
    },

    biz_zip: {
      type: DataTypes.INTEGER
    },

    LAT: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: false
    },

    LNG: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: false
    },

    is_small_biz: {
      type: DataTypes.BOOLEAN
    },

    year_est: {
      type: DataTypes.DATE
     
    },
    has_profile: {
      type: DataTypes.BOOLEAN
    } 
  }, 
  {
    freezeTableName: true,
  });

  Business.sync({force: true})
  .then(function() {
    // Table created
    return Business.bulkCreate([
      
      {      
        biz_name: "Emily's Pork Store",
        biz_type: "Butcher",
        biz_address: "426 Graham Ave, Brooklyn, NY",
        biz_zip: 11211,
        LAT: 40.717650,
        LNG: -73.944570   
      },
      {
        biz_name: "The Meat Hook",
        biz_type: "Butcher",
        biz_address: "397 Graham Ave, Brooklyn, NY",
        biz_zip: 11211,
        LAT: 40.716800,
        LNG: -73.944930
      },
      {
        biz_name: "Model T Meats Corporation",
        biz_type: "Butcher",
        biz_address: "404 Graham Ave, Brooklyn, NY",
        biz_zip: 11211,
        LAT: 40.716911,
        LNG: -73.944542
      },
      {
        biz_name: "Driggs Meat Market",
        biz_type: "Butcher",
        biz_address: "160 Driggs Ave, Brooklyn, NY",
        biz_zip: 11222,
        LAT: 40.723230,
        LNG: -73.944800
      },
      {
        biz_name: "Sikorski Meat Market",
        biz_type: "Butcher",
        biz_address: "603 Manhattan Ave, Brooklyn, NY",
        biz_zip: 11222,
        LAT: 40.723160,
        LNG: -73.950770
      },
      {
        biz_name: "W-Nassau Meat Market",
        biz_type: "Butcher",
        biz_address: "915 Manhattan Ave, Brooklyn, NY",
        biz_zip: 11222,
        LAT: 40.730600,
        LNG: -73.954630
      },
      {
        biz_name: "Paradise Florist",
        biz_type: "Florist",
        biz_address: "104 Norman Ave, Brooklyn, NY",
        biz_zip: 11222,
        LAT: 40.725620,
        LNG: -73.950660
      },
      {
        biz_name: "Greenpoint Floral Co.",
        biz_type: "Florist",
        biz_address: "703 Manhattan Ave, Brooklyn, NY",
        biz_zip: 11222,
        LAT: 40.725550,
        LNG: -73.952060
      }
    ]); 
    
  });
  
  return Business;
};
