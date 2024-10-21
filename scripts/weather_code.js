const weatherConditions = [
    {
        day: { description: "Sunny", image: "../assets/sunny.png" },
        night: { description: "Clear", image: "../assets/night.png" }
    },
    {
        day: { description: "Mainly Sunny", image: "../assets/sunny.png" },
        night: { description: "Mainly Clear", image: "../assets/night.png" }
    },
    {
        day: { description: "Partly Cloudy", image: "../assets/partly_cloudy.png" },
        night: { description: "Partly Cloudy", image: "../assets/cloudy_night.png" }
    },
    {
        day: { description: "Cloudy", image: "../assets/cloudy.png" },
        night: { description: "Cloudy", image: "../assets/cloudy.png" }
    },
    null, // 4
    null, // 5
    null, // 6
    null, // 7
    null, // 8
    null, // 9
    null, // 10
    null, // 11
    null, // 12
    null, // 13
    null, // 14
    null, // 15
    null, // 16
    null, // 17
    null, // 18
    null, // 19
    null, // 20
    null, // 21
    null, // 22
    null, // 23
    null, // 24
    null, // 25
    null, // 26
    null, // 27
    null, // 28
    null, // 29
    null, // 30
    null, // 31
    null, // 32
    null, // 33
    null, // 34
    null, // 35
    null, // 36
    null, // 37
    null, // 38
    null, // 39
    null, // 40
    null, // 41
    null, // 42
    null, // 43
    null, // 44
    {
        day: { description: "Foggy", image: "http://openweathermap.org/img/wn/50d@2x.png" },
        night: { description: "Foggy", image: "http://openweathermap.org/img/wn/50n@2x.png" }
    },
    {
        day: { description: "Rime Fog", image: "http://openweathermap.org/img/wn/50d@2x.png" },
        night: { description: "Rime Fog", image: "http://openweathermap.org/img/wn/50n@2x.png" }
    },
    {
        day: { description: "Light Drizzle", image: "../assets/rainy.png" },
        night: { description: "Light Drizzle", image: "../assets/rainy_night.png" }
    },
    null, // 52
    {
        day: { description: "Drizzle", image: "../assets/rainy.png" },
        night: { description: "Drizzle", image: "../assets/rainy_night.png" }
    },
    null, // 54
    {
        day: { description: "Heavy Drizzle", image: "../assets/rainy.png" },
        night: { description: "Heavy Drizzle", image: "../assets/rainy_night.png" }
    },
    {
        day: { description: "Light Freezing Drizzle", image: "../assets/rainy.png" },
        night: { description: "Light Freezing Drizzle", image: "../assets/rainy_night.png" }
    },
    {
        day: { description: "Freezing Drizzle", image: "../assets/rainy.png" },
        night: { description: "Freezing Drizzle", image: "../assets/rainy_night.png" }
    },
    {
        day: { description: "Light Rain", image: "../assets/rainy.png" },
        night: { description: "Light Rain", image: "../assets/rainy_night.png" }
    },
    null, // 62
    {
        day: { description: "Rain", image: "../assets/rainy.png" },
        night: { description: "Rain", image: "../assets/rainy_night.png" }
    },
    null, // 64
    {
        day: { description: "Heavy Rain", image: "../assets/rainy.png" },
        night: { description: "Heavy Rain", image: "../assets/rainy.png" }
    },
    {
        day: { description: "Light Freezing Rain", image: "../assets/rainy.png" },
        night: { description: "Light Freezing Rain", image: "../assets/rainy.png" }
    },
    {
        day: { description: "Freezing Rain", image: "../assets/rainy.png" },
        night: { description: "Freezing Rain", image: "../assets/rainy.png" }
    },
    {
        day: { description: "Light Snow", image: "http://openweathermap.org/img/wn/13d@2x.png" },
        night: { description: "Light Snow", image: "http://openweathermap.org/img/wn/13n@2x.png" }
    },
    null, // 72
    {
        day: { description: "Snow", image: "http://openweathermap.org/img/wn/13d@2x.png" },
        night: { description: "Snow", image: "http://openweathermap.org/img/wn/13n@2x.png" }
    },
    null, // 74
    {
        day: { description: "Heavy Snow", image: "http://openweathermap.org/img/wn/13d@2x.png" },
        night: { description: "Heavy Snow", image: "http://openweathermap.org/img/wn/13n@2x.png" }
    },
    {
        day: { description: "Snow Grains", image: "http://openweathermap.org/img/wn/13d@2x.png" },
        night: { description: "Snow Grains", image: "http://openweathermap.org/img/wn/13n@2x.png" }
    },
    null, // 78
    null, // 79
    {
        day: { description: "Light Showers", image: "../assets/rainy.png" },
        night: { description: "Light Showers", image: "../assets/rainy.png" }
    },
    {
        day: { description: "Showers", image: "../assets/rainy.png" },
        night: { description: "Showers", image: "../assets/rainy.png" }
    },
    {
        day: { description: "Heavy Showers", image: "../assets/rainy.png" },
        night: { description: "Heavy Showers", image: "../assets/rainy.png" }
    },
    null, // 83
    null, // 84
    {
        day: { description: "Light Snow Showers", image: "http://openweathermap.org/img/wn/13d@2x.png" },
        night: { description: "Light Snow Showers", image: "http://openweathermap.org/img/wn/13n@2x.png" }
    },
    {
        day: { description: "Snow Showers", image: "http://openweathermap.org/img/wn/13d@2x.png" },
        night: { description: "Snow Showers", image: "http://openweathermap.org/img/wn/13n@2x.png" }
    },
    null, // 87
    null, // 88
    null, // 89
    null, // 90
    {
        day: { description: "Thunderstorm", image: "../assets/thunder.png" },
        night: { description: "Thunderstorm", image: "../assets/thunder.png" }
    },
    null, // 92
    {
        day: { description: "Light Thunderstorms With Hail", image: "../assets/thunder.png" },
        night: { description: "Light Thunderstorms With Hail", image: "../assets/thunder.png" }
    },
    null, // 94
    {
        day: { description: "Thunderstorm With Hail", image: "../assets/thunder.png" },
        night: { description: "Thunderstorm With Hail", image: "../assets/thunder.png" }
    }
];
