import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer rsCXRiRAirUiRwzwrht-oOZEkyueHmSYbj6JUGdvgVWrYMYJuMULuDy8OvCzW19KahVSlY4CR8OQQyOfK4Oj8PNjNz2_VfVosvLtWprp3IFe84MbFKSMf4zG5bYcZXYx",
  },
});
