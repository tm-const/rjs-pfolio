const settings = {
  "name": "react-frontity-wordpress-app",
  "state": {
    "frontity": {
      "url": "http://localhost:8888/wordpress",
      "title": "Manny Q. Website",
      "description": "This is a wordpress website that shows some work."
    }
  },
  "packages": [
    {
      "name": "mq-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://localhost:8888/wordpress",
          postTypes: [
            {
              type: "movies", // type slug
              endpoint: "movies", // REST API endpoint
              archive: "/movies" // link where this custom posts are listed
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
