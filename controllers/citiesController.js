const cities = require('../data/cities.json');
const attractions = require('../data/attractions.json');

exports.getAllCities = (req, res) => {

 try{

  // returning all the cities 
      return res.status(200).json({
        status:true , 
        data: cities
      })

 } catch(error){
     return res.status(500).json({
        status:false , 
        message:"Interal server error"
     })
 }
};

exports.getCityAttractions = (req, res) => {

 try{

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

    // filtering all the city attraction 
    const allAttraction = attractions.filter(
      (att) => att.cityId === parseInt(cityId)
    );

     return res.status(200).json({
      status:true , 
      data: allAttraction
     })
   

 } catch(error){
     return res.status(500).json({
        status:false , 
        message:"Interal server error"
     })
 }
};
