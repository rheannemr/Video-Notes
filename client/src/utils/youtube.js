import axios from "axios";
const KEY = "AIzaSyBKICRC6SJGnNup-l5KTuZPMKtZd3dP3ik";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});