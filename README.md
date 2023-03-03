![Alt Text](screenshot.png)

# Front End Developer CSS Practice Project

This is a project that I created as a practice exercise to learn how front-end developers at ABC write CSS for animating Movie poster banners that pan out smoothly. The project was created using JavaScript and a ton of research to retrieve data from a JSON file and LESS for writing the CSS.

## Getting Started

To get started with this project, you will need to have the following tools installed on your computer:

- Git
- Node.js

You will also need to obtain an API key from [themoviedb.org](https://api.themoviedb.org/3) in order to retrieve the movie data for the project.

Once you have these tools and the API key, you can clone the repository to your local machine using the following command:

```
git clone https://github.com/your-username/your-repo.git
```


Next, navigate to the project directory and install the necessary dependencies by running the following command:

```
npm install gulp-less
```

You will also need to create a `config.js` file in the project directory that includes the API key. Here is an example of what the `config.js` file should look like:

```
const apiKey = 'your-api-key-here';

module.exports = { apiKey};
```


This file will be used to export the API key to the `main.js` file.

## Usage

To use this project, you can simply open the `index.html` file in your web browser. This will display the animated mobile poster banners that pan out smoothly. You can also view the source code in the `src` directory to see how the JavaScript and LESS files are written.

Note that there is still a lot of work to do on this project, and it is meant to be a learning exercise rather than a fully functional application.

## Contributing

If you would like to contribute to this project, you can fork the repository and create a new branch for your changes. Once you have made your changes, you can submit a pull request to have your changes reviewed and merged into the main project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was created as a learning exercise to get familiar with JSON, JavaScript, LESS, and Git. Special thanks to the front-end developers at ABC for providing inspiration for the project.
