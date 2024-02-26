import axios from "axios";

/* axios instance - new way of making API calls (besides the 3 methods that was already taught) */
const instance = axios.create({ //variable name 'instance' is user defined  //refer axios page -> getting started -> axios api for syntax

    baseURL : 'https://api.themoviedb.org/3'
})

export default instance 