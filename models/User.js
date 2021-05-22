const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      localemail: DataTypes.STRING,
      localpassword: DataTypes.STRING
    },
    {
      classMethods: {
        generateHash: (password) => {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        validPassword: (password) => {
          return bcrypt.compareSync(password, this.localpassword);
        },
        getterMethods: {
          someValue: () => {
            return this.someValue;
          }
        },
        setterMethods: {
          someValue: (value) => {
            this.someValue = value;
          }
        }
      }
    }
  );
  return User;
};
