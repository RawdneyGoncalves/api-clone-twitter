import axios from "axios";

axios.get('http://localhost:3030').then(resp => {

    console.log(resp.data);
});

export default api;