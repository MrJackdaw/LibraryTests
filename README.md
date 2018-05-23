# Sample Application

This is a sample application for demonstrating concepts in the [RaphsDucks](#https://github.com/JACK-COM/raphsducks) and [NetworkLayer](#https://github.com/JACK-COM/NetworkLayer) libraries. 

## Installation

    git clone https://github.com/MrJackdaw/LibraryTests.git
    npm install 
    npm start

The application should open at `localhost:7878` in a browser tab

## Usage

There are two sections, accessible via the top-most button group on the page. The architecture emphasizes ReactJS as a view layer only.

* The **Counters** section shows the [RaphsDucks](#https://github.com/JACK-COM/raphsducks) library
    * It shows how to set up a centralized state object, which holds subscribers and notifies them on update
    * The code for this section is in **/src/state**. 
* The  **Network** section shows the [NetworkLayer](#https://github.com/JACK-COM/NetworkLayer) library
    * It shows how to set up and fetch data via a centralized "network layer" in an application
    * The code for this section is in **/src/network**
    * **Note**: One current (but easily remedied) shortcoming of this library is that it assumes a JSON response for all requests,
    and will try to access that via `fetch`'s built in `data.json()` response method.