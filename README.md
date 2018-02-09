# Airbnweee

[Live Site](https://airbnweee.herokuapp.com)

## Basic Overview

Airbnweee is a single page web application inspired by Airbnb. It allows users to book homes near any resort around the world. They can look at all the homes listed and check out details about each one without logging in but once logged in, the user can leave reviews and book any home they desire. Currently, our product only supports theme parks in southern California, with the opportunity to expand.

## Setup/Build

* Backend: Ruby on Rails
   * ruby 2.3.1 or later
   * rails 5.0 or later
* Frontend: React/Redux
   * node v6.10.1 or later
* Database: PostgreSQL
* Google Maps API

## Features & Implementation

### User Auth

Users can both sign up and login if they've previously signed up. When first signing up, Airbnweee uses the BCrypt gem on the backend to hash the given password to make sure a secure password is stored in the database. Then, when logging in, it assigns a random session token to the user and assigns that value to the session's session token which it sends back to the browser so the user can browse the site without continuously logging in. The user is also bootstrapped to the frontend, since this is a single page application, which also allows them to navigate without hindrance.
Another convenient feature is that both the login and session form are modals that can be rendered on whichever page the user is on. Switching between the two is as easy as clicking a button.

![User Auth](https://i.imgur.com/CzIdVTP.png)

### Spot Feed/Search/Map

The spots index page show a list of all the spots currently in the database. You can search using either search bar: on the main page or the bar rendered on the top of the page, which is seen on every page excluding the main page. The search utilizes a SQL query written into the backend to match whatever the user types into the search bar with the title and description of the listed spots and filters accordingly. If nothing is typed, all spots are rendered, and if something is typed that doesn't match anything in the database, an error page renders telling the user to try a different search.

![Spots Feed/Search](https://i.imgur.com/UOtGnTk.jpg)

The feed also implements a modal which can be seen when the user clicks on any of the listed spots. It shows a quick description about the spot and if the user wants to know more, book the spot, or create a review, they can click anywhere on the modal and they will be taken to the spot's entire page where the reviews and booking form can be seen.

![Spots Feed Modal](https://i.imgur.com/SkznBXu.jpg)

The map is an implementation of the Google Maps API. First, I created a unique API key from Google the linked to my specific implementation of Google Maps. Then, I created a class that extended a React Component which allowed me to pick the coordinates I wanted my map to be initially centered on and at what zoom scale. I then had to create a functional component called MarkerManager and by giving Google the specific longitude and latitude of all the spots loaded, it created markers that could then be rendered on my map.

```  
  componentDidMount(){
    const mapOptions = {
      center: { lat: 34.097392, lng: -118.276408 },
      zoom: 10
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  render(){
    return (
      <div id='map-container' className='sticky' ref={ map => this.mapNode = map }>
      </div>
    );
  }
```

### Spot Show/Review/Booking

The specific show page of each spot includes a React component of both reviews and bookings. The initial view shows the spot's picture. A particularly convenient feature is that when the page is resized, the picture zooms and adjusts accordingly so that the best rendering of the picture is always assured.

![Spot Show Image](https://i.imgur.com/bfx5X43.jpg)

When the user scrolls down, they see the description, host username and picture, and how many bedrooms, bathrooms, and guests can be accommodated. At the bottom of the page, the reviews can be seen. They consist of the user's profile picture, username, and what they wrote. If the user tries to leave a review and is not logged in, an error pops up asking them to login before leaving a review. Once they are logged in, they can leave as many reviews as they like, and also have the option to delete their own reviews. As mentioned previously, by utilizing the fact that the current user is bootstrapped to the frontend, they only get the option to delete their own posts, but not any other users.
To the right side, the booking container has been given the style property of "sticky" so the user can see the booking form no matter where they are on the page. It tells the user the total price and gives them the option to pick the dates they would like and how many guests they have. By clicking "Check Availability", they are told that their booking as been submitted and is pending acceptance by the host, but only if the dates they chose are available; otherwise an error is rendered.

![Spot Show Review/Booking](https://i.imgur.com/0uH2Yw6.png)

## Future Direction

* Expand my listed spots and have the map re-render when the user searches for location rather than just title and description. The map will then show only the search results on the map rather than everything.

* Create user profile that shows all the users reviews, spots booked, and any spots they host.
Include a form to allow a user to become a host.

* Implement a carousel so the user can view multiple pictures of the listing rather than just one.

* Create a rating system so an amount of stars can be given and seen for each spot and review. In addition, the rating can then be seen in the booking form which should also limit the options of guest to whatever the host specified was the max number of people that could stay at their home.

* Messaging system between host and user.
