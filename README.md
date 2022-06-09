# NYT Top Stories

[New York Times News Reader](https://newyorktimes-newsreader.netlify.app/) was built using the [New York Times Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview) and features live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world.

![gif](https://user-images.githubusercontent.com/88151743/172921235-b418c538-7d75-4832-887e-399e005a0cc8.gif)

## Endpoints 
These are examples of the API's endpoints:

```
https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
```

The [home](https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey) endpoint is the one featured for this application.

### API Key
An API key is required to utilize the API. The [instructions](https://developer.nytimes.com/get-started) can be found here to get started using the API. Once you create a developer account on New York Times, you'll have to register your application to access the API key.

## Project Management
- Spec sheet can be found [here](https://mod4.turing.edu/projects/take_home/take_home_fe)
- GitHub Project Board can be found [here](https://github.com/gjax78/new-york-times-news-reader/projects/1)
- Figma Wireframe can be found [here](https://www.figma.com/file/7Wml8o4G65oIcMHV8ZVcih/NYT-take-home?node-id=0%3A1)

## Technologies 
- React
- React Router
- Javascript
- HTML
- CSS
- React Dev Tools (Chrome Dev Tools)

## Installation
- Run `git@github.com:gjax78/new-york-times-news-reader.git` in your command line
- Run `cd new-york-times-news-reader` to navigate into the repository
- Run `npm install`
- Run `npm start`
- The webpage will open in separate browser

## Features 
- Search feature to search through articles
- 100% Lighthouse Accessibility score
- Responsive Design
- Error handling

## Future Additions
- Add a favoriting functionality to articles
- Utilize the additional endpoints 

## Author
- [Geena Jackson](https://github.com/gjax78)