/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Airports", [
      {
        name: "Kempagoda Aiport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indragandhi Aiport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bisra Munda Aiport",
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rajeev Gandhi Aiport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Add commands to revert seed here.
  },
};
