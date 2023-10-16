import axios from 'axios';

export const getPlacesData = async (sw, ne) => {
  
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },

      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });

    // return data from the api
    return data;

  } catch (error) {
    console.log(error);
  }
};

