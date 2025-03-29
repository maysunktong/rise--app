const getGreeting = () => {
  const hours = new Date().getHours();
  if (hours < 12) {
    return "Good morning";
  } else if (hours < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

const Greeting = () => {
  return <h1>{getGreeting()}!</h1>;
};

export default Greeting;
