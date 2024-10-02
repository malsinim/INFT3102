module.exports = function (eleventyConfig) {
  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  eleventyConfig.addCollection("sections", function (collectionApi) {
    // Access the questions from your data file
    const questions = collectionApi.getFilteredByTag("question")[0].data
      .questions;

    // Group questions by section
    let sections = {};
    questions.forEach((question) => {
      let section = question.section;
      if (section) {
        if (!sections[section]) {
          sections[section] = [];
        }
        sections[section].push(question);
      }
    });

    return Object.keys(sections).map((section) => ({ section }));
  });
};
