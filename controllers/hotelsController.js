const hotels = require("../data/hotels.json");
const cities = require("../data/cities.json");

exports.getHotels = (req, res) => {
  try {
    const { cityId } = req.params;

    // check is city id is present
    if (!cityId) {
      return res.status(404).json({ message: "City Id not found" });
    }

    // check is cityId is in our dataset
    const city = cities.find((currCity) => currCity.id === parseInt(cityId));

    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    // filtering the hotel on the basis of city
    const allHotels = hotels.filter(
      (hotel) => hotel.cityId === parseInt(cityId)
    );

    return res.status(200).json({
      status: true,
      data: allHotels,
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      message: "Internal server error",
    });
  }
};
