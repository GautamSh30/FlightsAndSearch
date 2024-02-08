const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (err) {
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
    } catch (err) {
      throw { err };
    }
  }
}

module.exports = CityRepository;
