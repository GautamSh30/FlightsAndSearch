const { CityService } = require("../services/index");

const CityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await CityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (err) {
    console.log(err);
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
    const response = await CityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (err) {
    console.log(err);
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
    const city = await CityService.getCity(req.params.id);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (err) {
    console.log(err);
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
    const city = await CityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully updated the city",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: err,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
};
