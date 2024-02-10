const { CityService } = require("../services/index");

const cityService = new CityService(); // Changed variable name to avoid conflict

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body); // Updated to use cityService
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (err) {
    console.error(err); // Changed to console.error for consistency
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create city",
      err: err,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const city = await cityService.deleteCity(req.params.id); // Updated to use cityService
    return res.status(200).json({
      data: city, // Updated variable name to be consistent
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (err) {
    console.error(err); // Changed to console.error for consistency
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: err,
    });
  }
};

const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: err,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body); // Updated to use cityService
    return res.status(200).json({
      // Changed status code to 200
      data: response,
      success: true,
      message: "Successfully updated the city",
      err: {},
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: err,
    });
  }
};

const getAll = async (req, res) => {
  try {
    console.log(req.params);
    const cities = await cityService.getAllcities(req.query);
    return res.status(200).json({
      // Changed status code to 200
      data: cities,
      success: true,
      message: "Successfully fetched all cities",
      err: {},
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get all the cities",
      err: err,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
