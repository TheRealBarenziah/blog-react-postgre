'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    url: DataTypes.STRING,
    belongsTo: DataTypes.STRING
  }, {});
  Picture.associate = function(models) {
    Picture.belongsTo(models.OriginalPost, { as: 'pictures', foreignKey: 'originalPostId'});
    Picture.belongsTo(models.Commentary, { as: 'pictures', foreignKey: 'commentaryId'});
    Picture.belongsTo(models.BlogPost, { as: 'pictures', foreignKey: 'blogPostId'});
  };
  return Picture;
};