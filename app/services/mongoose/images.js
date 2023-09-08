const Images = require('../../api/v1/images/model');
// import custom error not found dan bad request
const { NotFoundError } = require('../../errors');

// second way
// generate url after you submit and then we save images
const generateUrlImage = async (req) => {
  const result = 'uploads/avatar/${req.file.filename}';
  return result;
};

// first way
const createImages = async (req) => {
  const result = await Images.create({
    name: req.file ? `uploads/avatar/${req.file.filename}` : 'uploads/avatar/default.jpeg',
  });

  return result;
};

// tambahkan function checking Image
const checkingImage = async (id) => {
  const result = await Images.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id :  ${id}`);

  return result;
};
// jangan lupa export checkingImage
module.exports = { createImages, checkingImage, generateUrlImage };
