# Youtube Clone Project

This project is a web application that mimics the basic functionality of Youtube. It is developed using React and provides routing with React Router. User interface is designed using Tailwind CSS.

## Features

- **Header:** Contains fundamental functionalities such as home, search, notifications, and live streaming.
- **SideBar:** Represents the category list on the left side of Youtube. Users can click on a category to view relevant content.
- **Feed:** Main content area where users can view videos based on the selected category. Videos are listed using the VideoCard component.
- **SearchResult:** Page displaying results based on the search term entered by the user. Search results are listed using the VideoCard component.
- **VideoDetail:** Page displaying a single video and its related comments. It includes a video player, video information, and related videos.
- **StringArea:** Component used to present text areas in a user-friendly manner. It provides functionality to expand and shorten text when necessary.
- **Comments:** Represents the comments below videos. Users can reply to comments or like them.
- **Loader:** Component displayed to the user while data is being loaded. It ensures that the user waits for content to load.

## Technologies Used

- React
- React Router
- Axios
- Tailwind CSS
- Millify

## How to Run

1. Navigate to the project directory.
2. Run `npm install` command in the terminal or command prompt to install dependencies.
3. Then, use the `npm start` command to start the project.
4. The project will run by default at `http://localhost:3000` in your web browser.

# Preview

![](./src/images/yt-clone.gif)

## Contributing

- If you would like to contribute, you can open an issue for suggestions or bug reports, or directly submit a pull request.

## License

This project is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.
