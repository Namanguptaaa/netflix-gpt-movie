export const LOGO_URL =
    "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const UserLogo_URL =
     "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const Background_URL =
      "https://assets.nflxext.com/ffe/siteui/vlv3/25f808aa-cecb-4753-8541-9a79f40c18ae/web/IN-en-20251006-TRIFECTA-perspective_507f47be-8780-4697-92cb-0f6c78177b6e_large.jpg";     
 
export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2E4ZDJhMjAzYzhlMjAzZTJjNTVjNGM1MTkyMTBjNSIsIm5iZiI6MTc3MTYwMzExMi4wNjIsInN1YiI6IjY5OTg4NGE4NzQyY2Y5NTM2MjMwMjg0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Erz3_I8ekAyaO9X1i4HNHyzq-bDkvwQmH0UwGmEv5Y'
  }
}; 

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "hindi"},
  {identifier: "spanish", name: "spanish"},
  {identifier: "japanies", name: "japanies"}
];

export const OPENAI = process.env.REACT_APP_OPENAI_KEY;;