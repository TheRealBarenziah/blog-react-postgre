'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    isForCaterpillar: DataTypes.BOOLEAN,
    postedAt: DataTypes.DATE,
    category: DataTypes.STRING
  }, {});
  BlogPost.associate = function(models) {
    BlogPost.belongsTo(models.User, { foreignKey: 'authorId', as: 'author' });
    BlogPost.hasMany(models.Picture, { as: 'pictures' });
  };
  return BlogPost;
};