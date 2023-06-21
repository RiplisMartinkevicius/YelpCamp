if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/yelp-camp";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Datbase connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const img = [
  {
    url: "https://res.cloudinary.com/dgjvbnsdm/image/upload/v1687339509/YelpCamp/pcnvjbz6c1tac3osw0yq.jpg",
    filename: "YelpCamp/pcnvjbz6c1tac3osw0yq",
  },
  {
    url: "https://res.cloudinary.com/dgjvbnsdm/image/upload/v1687342588/YelpCamp/dnmjdpbdopbjyzvi5bdf.jpg",
    filename: "YelpCamp/dnmjdpbdopbjyzvi5bdf",
  },
  {
    url: "https://res.cloudinary.com/dgjvbnsdm/image/upload/v1687339968/YelpCamp/mdxskxfhqmdmul9xjiny.jpg",
    filename: "YelpCamp/mdxskxfhqmdmul9xjiny",
  },
  {
    url: "https://res.cloudinary.com/dgjvbnsdm/image/upload/v1687340009/YelpCamp/avvihk47iwbzuf4ttj1y.jpg",
    filename: "YelpCamp/avvihk47iwbzuf4ttj1y",
  },
  {
    url: "https://res.cloudinary.com/dgjvbnsdm/image/upload/v1687340143/YelpCamp/ity80yfwgfcx999cf38v.jpg",
    filename: "YelpCamp/ity80yfwgfcx999cf38v",
  },
  {
    url: "https://res.cloudinary.com/dgjvbnsdm/image/upload/v1687342661/YelpCamp/hrlbhbvgpiwcem9tzhg0.jpg",
    filename: "YelpCamp/hrlbhbvgpiwcem9tzhg0",
  },
  {
    url: "https://res.cloudinary.com/dgjvbnsdm/image/upload/v1687340304/YelpCamp/u5eljlmyjrtbayndxznr.jpg",
    filename: "YelpCamp/u5eljlmyjrtbayndxznr",
  },
];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random100 = Math.floor(Math.random() * 100);
    const randomImage = img[Math.floor(Math.random() * img.length)];
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "6492ae5d17b604a36f141fc6",
      location: `${cities[random100].city}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Immerse yourself in Lithuania's enchanting campsite, surrounded by natural beauty. Experience warm hospitality, breathtaking landscapes, and the magic of Lithuanian culture. Explore pristine forests, indulge in authentic cuisine, and let Lithuania's spirit captivate you.",
      price,
      geometry: {
        type: "Point",
        coordinates: [cities[random100].lng, cities[random100].lat],
      },
      images: [randomImage],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
