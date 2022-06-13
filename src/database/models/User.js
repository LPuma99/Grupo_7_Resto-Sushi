module.exports = (sequelize, DataTypes) => {
  let alias = "User";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  };
  let config = {
    tableName: "User",
    timestamp: false,
  };

  const User = sequelize.define(alias, cols, config);

    /* User.associate = (models) => {
    User.hasMany(models.Order, {
        as: "Ordenes",
        foreignKey: "user_id"
    })
}; */



  return User;
};
