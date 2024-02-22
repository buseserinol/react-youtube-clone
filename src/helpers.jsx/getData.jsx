import axios from "axios";

// istek için gerekli ayarlar
const options = {
  headers: {
    "X-RapidAPI-Key": "351b076da7mshab79d565e596624p1cda1bjsn0e2fc71ff72e",
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
