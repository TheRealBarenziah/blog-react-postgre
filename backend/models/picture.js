'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    url: DataTypes.STRING,
    belongsTo: DataTypes.STRING
  }, {});
  Picture.associate = function(models) {
    Picture.belongsToMany(models.OriginalPost, { as: 'pictures', through: 'OriginalPostPictures'});
    Picture.belongsToMany(models.Commentary, { as: 'pictures', through: 'CommentaryPictures'});
    Picture.belongsToMany(models.BlogPost, { as: 'pictures', through: 'BlogPostPictures'});
  };
  return Picture;
};