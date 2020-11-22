import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer jUa71fF2pR5d_IUp_oOl_7KZlxtMeM6-4dr5-GdWUcIG86y_iUkYehMuZI7TL8NZZc8H05STyBjumbfSCiZE_NIdhIFCKaeEkMRDFclpeY9fC2Ds48YXmNMmfNq5X3Yx",
  },
});
