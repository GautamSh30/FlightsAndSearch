const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
    } catch (err) {
      console.log("Something went wrong at service layer");
      throw err;
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.CityRepository.deleteCity(cityId);
      return response;
    } catch (err) {
      console.log("Something went wrong at service layer");
      throw err;
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.CityRepository.updateCity(cityId, data);
      return city;
    } catch (err) {
      console.log("Something went wrong at service layer");
      throw err;
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.CityRepository.getCity(cityId);
      return city;
    } catch (err) {
      console.log("Something went wrong at service layer");
      throw err;
    }
  }
}

module.exports = CityService;