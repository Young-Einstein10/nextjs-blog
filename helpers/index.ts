const categories = ["people", "pets", "landmarks", "cities", "nature", "food", "premium"];

const imageUrls = [
  "https://res.cloudinary.com/young-einstein/image/upload/v1619536750/Rectangle_2_kgiwhv.png",
  "https://res.cloudinary.com/young-einstein/image/upload/v1619536749/Rectangle_2.4_sosme5.png",
  "https://res.cloudinary.com/young-einstein/image/upload/v1619536749/Rectangle_2.1_zopgmt.png",
  "https://res.cloudinary.com/young-einstein/image/upload/v1619536747/Rectangle_10_gna1lr.png",
];

export const getRandomImage = () => imageUrls[Math.floor(Math.random() * imageUrls.length)];
export const getRandomCategory = () => categories[Math.floor(Math.random() * categories.length)];
