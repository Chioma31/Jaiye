import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://tickeneft.onrender.com/api/";



export const CreateAd = (formdata) => {
  return axios.post(
    API_URL + "partners/create-ad", formdata,
    {
      headers: authHeader(),
    }
  );
};

export const EditAd = ({
  a_id,
  name,
  text,
  url,
  duration,
  reach,
  forClicks
}) => {
  return axios.post(API_URL + "partners/update-ad", 
    {
      a_id,
      name,
      text,
      url,
      duration,
      reach,
      forClicks,
    },
    {
      headers: authHeader(),
    }
  );
};



export const EditImage = (formdata) => {
    return axios.post(
      API_URL + "partners/update-ad-image", formdata,
      {
        headers: authHeader(),
      }
    );
  };

export const GetAd = (a_id) => {
  return axios.get( API_URL + `partners/ad/${a_id}`,
    { 
      headers: authHeader() 
    }
  );
};

export const GetAds = () => {
  return axios.get(
    API_URL + "partners/ads",
    { headers: authHeader() }
  );
};


