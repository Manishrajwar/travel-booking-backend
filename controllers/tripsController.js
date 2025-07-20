const trips = require('../data/trips.json');
const cities = require('../data/cities.json');


exports.getAllTrips = (req ,res)=>{
   try{

      // return all the trips
      return res.status(200).json({
        status:true , 
        data: trips
      })

   } catch(error){
     console.log("eror",error);
        return res.status(500).json({
        status:false, 
        message:"internal server error"
      })
   }
}

exports.getTripByCity = (req ,res)=>{
   try{

    const {cityId} = req.params;

    // check is city id is present
    if(!cityId){
    return  res.status(404).json({ message: 'City Id not found' });
    }
   
    // check is cityId is in our dataset 
     const city = cities.find((currCity)=> currCity.id === parseInt(cityId));


     if(!city){
     return  res.status(404).json({ message: 'City not found' });
     }

   //   filtering all the trips on the basis of cityid
      const allTrips = trips.filter((trip) => trip.cityId === parseInt(cityId));

      return res.status(200).json({
        status:true , 
        data: allTrips
      })

   } catch(error){
     console.log("eror",error);
        return res.status(500).json({
        status:false, 
        message:"internal server error"
      })
   }
}