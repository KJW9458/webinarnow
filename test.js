const axios = require('axios');

axios({
    method:"POST",
    url: 'https://reqres.in/api/login',
    data:{
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
}).then(function(res){
    console.log(res.data);
}).catch(function(error){
    console.log(error);
    throw new Error(error);
});

// axios.post("https://reqres.in/api/login", {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }).then((res)=>{
//     console.log(res.data);
// }).catch(error=>{
//     console.log(error);
// });

axios.get("https://reqres.in/api/user?page=2")
.then(function(data){
    console.log(data.data);
}).catch(function(error){
    console.log(error);
})