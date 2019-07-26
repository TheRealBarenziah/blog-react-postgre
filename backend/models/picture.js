'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    url: DataTypes.STRING,
    belongsTo: DataTypes.STRING
  }, {});
  Picture.associate = function(models) {
    // Picture.belongsTo(models.OriginalPost, { as: 'originalPost', foreignKey: 'originalPostId'});
    // Picture.belongsTo(models.Commentary, { as: 'commentary', foreignKey: 'commentaryId'});
    // Picture.belongsTo(models.BlogPost, { as: 'blogPost', foreignKey: 'blogPostId'});
  };
  return Picture;
};