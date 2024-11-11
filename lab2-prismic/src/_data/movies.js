// import Prismic client library to interact with the Prismic API
const prismic = require("@prismicio/client");

// initialize a prismic client instance with repository name
const client = prismic.createClient("my-prismic-app-one", {
});

// export an async function to fetch data
module.exports = async () => {
  try {
    // get all entries of type 'movie' from Prismic
    const movies = await client.getAllByType("movie");
    // return array of movies
    return movies; 
  } catch (error) {
    // if theres an error, show in console
    console.error("Error fetching movie data from Prismic:", error);
   
  }
};
