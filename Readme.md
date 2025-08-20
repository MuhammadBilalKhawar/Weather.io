# Weather.io ⛅

A modern, responsive weather web application built with cutting-edge web technologies. Weather.io provides real-time weather information with a beautiful, user-friendly interface.

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions for any location worldwide
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive interface built with TailwindCSS
- **Location Search**: Search for weather by city name or coordinates
- **Detailed Weather Information**: Temperature, humidity, wind speed, and more
- **Fast & Reliable**: Built on Express.js backend for optimal performance

## 🚀 Tech Stack

- **Frontend**: 
  - HTML5
  - CSS3 with TailwindCSS
  - Vanilla JavaScript
- **Backend**: 
  - Node.js
  - Express.js
- **Data Handling**: JSON manipulation
- **API Integration**: Weather API for real-time data

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MuhammadBilalKhawar/Weather.io.git
   cd Weather.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your weather API key:
   ```env
   WEATHER_API_KEY=your_api_key_here
   PORT=3000
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Weather API Configuration
WEATHER_API_KEY=your_weather_api_key
API_BASE_URL=https://api.openweathermap.org/data/2.5

# Server Configuration
PORT=3000
NODE_ENV=development
```

### Getting Weather API Key

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api) (or your preferred weather service)
2. Generate an API key
3. Add the key to your `.env` file

## 📁 Project Structure

```
Weather.io/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── index.html
├── src/
│   ├── controllers/
│   ├── routes/
│   └── utils/
├── package.json
├── server.js
├── .env.example
└── README.md
```

## 🌐 API Endpoints

### Weather Routes

- `GET /` - Main application page
- `GET /api/weather/:city` - Get weather by city name
- `GET /api/weather/coords/:lat/:lon` - Get weather by coordinates
- `GET /api/forecast/:city` - Get weather forecast

## 📱 Usage

1. **Search by City**: Enter a city name in the search bar
2. **Current Location**: Use geolocation to get weather for your current location
3. **View Details**: Click on weather cards for detailed information
4. **Responsive Design**: Works seamlessly across all devices

## 🎨 Customization

### Styling

The application uses TailwindCSS for styling. To customize the appearance:

1. Modify the `tailwind.config.js` file
2. Update utility classes in HTML files
3. Add custom CSS in `public/css/style.css`

### Features

To add new features:

1. Create new routes in `src/routes/`
2. Add corresponding controllers in `src/controllers/`
3. Update the frontend JavaScript in `public/js/main.js`

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 🚀 Deployment

### Local Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

### Deploy to Heroku

1. Install Heroku CLI
2. Create a Heroku app: `heroku create your-app-name`
3. Set environment variables: `heroku config:set WEATHER_API_KEY=your_key`
4. Deploy: `git push heroku main`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

### Development Guidelines

- Follow ES6+ JavaScript standards
- Use semantic commit messages
- Test your code before submitting
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Muhammad Bilal Khawar**
- GitHub: [@MuhammadBilalKhawar](https://github.com/MuhammadBilalKhawar)
- LinkedIn: [Connect with me](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap API](https://openweathermap.org/)
- Icons and styling inspiration from modern web design trends
- TailwindCSS for the beautiful utility-first styling framework
- Express.js community for the robust web framework

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/MuhammadBilalKhawar/Weather.io/issues) page
2. Create a new issue if your problem isn't already listed
3. Provide detailed information about your setup and the issue

---

⭐ **If you found this project helpful, please give it a star!** ⭐
