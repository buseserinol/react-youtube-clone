import axios from "axios";

// istek için gerekli ayarlar
const options = {
  headers: {
    "X-RapidAPI-Key": "904c48073cmsh1a970402b7b31e7p1e9bf9jsn2585cd12bbe8",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
  params: {
    lang: "tr",
    geo: "TR",
  },
};

//base URL

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

//parametre olarak aldığı url'e istek atıp geriye elde ettiği verileri döndüren fonksiyon.

export const getData = async (endpoint) => {
  try {
    //api isteği atıldı
    const res = await axios.get(endpoint, options);
    //fonk. çağırıldığı yere veriyi döndür
    return res.data;
  } catch (err) {
    console.log("Verileri çekerken bir hata oluştu", err);
  }
};
