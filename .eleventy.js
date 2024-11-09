module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/services");
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
    
  };
};
