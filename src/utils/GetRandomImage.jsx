const SportImageLinks = [
  "https://res.cloudinary.com/maysunktong/image/upload/v1743536315/rise-app/Person_with_Barbell_evnya2.jpg",
  "https://res.cloudinary.com/maysunktong/image/upload/v1743593575/rise-app/Sporty_Woman_Abs_Exercises_vmjnaq.jpg",
  "https://res.cloudinary.com/maysunktong/image/upload/v1743593574/rise-app/Bodybuilder_Exercises_with_Rubber_Band_nofspw.jpg",
  "https://res.cloudinary.com/maysunktong/image/upload/v1743534429/rise-app/exercise_r0aypk.jpg",
];

const GetRandomImage = () => {
  return SportImageLinks[Math.floor(Math.random() * SportImageLinks.length)];
};

export default GetRandomImage;
