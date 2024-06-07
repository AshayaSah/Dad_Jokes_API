const apiBody = document.querySelector(".api_body");

const apiUrl = "https://icanhazdadjoke.com/";

//   -> Use of fetch(api) then and catch method to get data and trim down to the actual needed data <- 
// const fetchData = () => {
//     fetch(apiUrl,{
//         headers: {
//             Accept: "application/json",
//         },
//     }).then((response)=>{
//         return response.json();
//     }).then((data)=> {
//         // console.log(data);
//         apiBody.innerText = data.joke; 
//     }).catch((error)=> {
//         apiBody.innertext = "Api is not working";
//         console.log('Api is not working');
//     });
// };


// -> Using the async await method to get the data from the api <-
const fetchData = async () => {
    try{
    let responseFromApi = await fetch(apiUrl, {
        headers: {
            Accept: 'application/json',
        },
    });
    let jsonData = await responseFromApi.json();
    // console.log(jsonData.joke);

    apiBody.innerText = jsonData.joke;
    } catch(error){
        // console.log(error);
        apiBody.innerText = error;

    }
};

fetchData();

document.getElementById("fetchJoke").addEventListener('click',fetchData);

