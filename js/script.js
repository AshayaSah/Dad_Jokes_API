const apiBody = document.querySelector(".api_body");

const apiUrl = "https://icanhazdadjoke.com/";

const fetchData = () => {
    fetch(apiUrl,{
        headers: {
            Accept: "application/json",
        },
    }).then((response)=>{
        return response.json();
    }).then((data)=> {
        // console.log(data);
        apiBody.innerText = data.joke; 
    }).catch((error)=> {
        apiBody.innertext = "Api is not working";
        console.log('Api is not working');
    });
};

fetchData();

document.getElementById("fetchJoke").addEventListener('click',fetchData);

