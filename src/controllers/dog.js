var Dog =  require('../models/dog');

/**
 * List Dogs
 */
exports.list = (req, h) => {
  return Dog.find({}).exec().then((dog) => {

    return { dogs: dog };

  }).catch((err) => {

    return { err: err };

  });
}

/**
 * Get Dog by ID
 */
exports.get = (req, h) => {
  
  return Dog.findById(req.params.id).exec().then((dog) => {

    if(!dog) return { message: 'Dog not Found' };

    return { dog: dog };

  }).catch((err) => {

    return { err: err };

  });
}


/**
 * POST a Dog
 */
exports.create = (req, h) => {

  const dogData = {
    name: req.payload.name,
    breed: req.payload.breed,
    age: req.payload.age,
    image: req.payload.image
  };

  return Dog.create(dogData).then((dog) => {

     return { message: "Dog created successfully", dog: dog };

  }).catch((err) => {

    return { err: err };

  });
}

/**
 * PUT | Update Dog by ID
 */
exports.update = (req, h) => {

  return Dog.findById(req.params.id).exec().then((dog) => {

    if (!dog) return { err: 'Dog not found' };

    dog.name = req.payload.name;
    dog.breed = req.payload.breed;
    dog.age = req.payload.age;
    dog.image = req.payload.image;

    dog.save(dogData);

  }).then((data) => {

      return { message: "Dog data updated successfully" };

  }).catch((err) => {

      return { err: err };

  });
}

/**
 * Delete Dog by ID
 */
exports.remove = (req, h) => {
  
  return Dog.findById(req.params.id).exec().then((dog) => {

    if (!dog) return { err: 'Dog not found' };

    dog.remove();

  }).then((data) => {

    return { message: "Dog deleted successfully" };

  }).catch((err) => {

    return { err: err };
    
  });
}