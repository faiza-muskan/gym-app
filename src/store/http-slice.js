import UseHttp from "../hooks/Use-Http";

const fetchApi = () => {
  const { sendRequest } = UseHttp();

  const loadData = (data) => {
    const response = data.results;
    console.log(response);
  };

  return async (dispatch) => {
    const fetchdata = async () => {
      sendRequest(
        {
          url: `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=10&apiKey=4ba25e804c0343df95bdd6787954c236`,
        },
        loadData
      );
    };
  };
};
