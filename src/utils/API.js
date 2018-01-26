import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e95ea7e8bfac4028831ce9a780033fde&page=0&sort=newest&q=";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    console.log(query);
    return axios.get(BASEURL + query);
  }
};
