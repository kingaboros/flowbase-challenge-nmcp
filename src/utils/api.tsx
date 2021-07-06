const fetchData = async () => {
  try {
    const response = await fetch(
      'https://rent-challenge-api.herokuapp.com/rents'
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default fetchData;
