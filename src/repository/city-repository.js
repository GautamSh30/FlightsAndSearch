const { Op } = require("sequelize");

const { City } = require("../models/index");

class CityRepository {
  // constructor() {}

  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }

  async deleteCIty({ cityId }) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }

  async UpdateCity(cityId, data) {
    try {
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (err) {
      console.log("Something went wrong in the repository layer");
      throw { err };
    }
  }
}

module.exports = CityRepository;
