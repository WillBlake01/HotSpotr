module.exports = (sequelize, DataTypes) => {
    var Test = sequelize.define('Test', {
      name: {
          type: DataTypes.STRING
      }
    });
    return Test;
  };
