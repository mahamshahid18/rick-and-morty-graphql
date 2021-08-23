# Rick & Morty API Consumption Coding Challenge
This is a summary of the coding challenge which involves consuming the Rick and Morty API by exposing a graphql API for the frontend to work with. Details about running the project as well as improvements, and a demo (video) are available towards the end of this document.  

## Running the project  
The first thing that you can do before getting into server or frontend specific details is to install all the dependencies. Run `npm i` to install the dependencies.

### Server
To run the server, you will first need to set up a very basic mongodb database. Assuming that mongodb is already installed and available for use, please perform the following to set up the database ready to be used by the server

* The server does not expect any users on the database to connect to. And hence, it connects directly using `localhost:27017` as the default host and port. So, please make sure this configuration is available (the connection string used is `mongodb://localhost:27017/rick-and-morty` -> so the server needs to access the database without specifying username or password)
* The server expects to connect to a database called `rick-and-morty`. Please go ahead and create this. You can follow the screenshots below to create a database (using mongodb compass). P.S => mongodb compass asks for a collection name before it creates the database. Please provide `apiData`  as the collection name as the server will use this collection later on.

![Capture](https://user-images.githubusercontent.com/12479952/130519905-ee17ad01-2e61-4ae1-afe9-bee66397bda1.PNG)  


![Capture-1](https://user-images.githubusercontent.com/12479952/130519914-7ed7cf45-d512-4f71-aff3-9bf0acddb054.PNG)  



Once the db has been created, run the following command to spin up an instance of the server:

* `npm run start-server`

And that's it. The server will now be running on `http://localhost:3600/graphql`. If you want to take a look at the exposed API and query it as well, you can visit `http://localhost:3600/graphql` and then click on `Query your server` to open the sandbox environment.

### Frontend
Run the command `npm start` to run the frontend. You can then navigate to `http://localhost:8080/` to access the interface

## Improvements
* Currently, the server refreshes the data from the Rick & Morty API when the server is restarted. This can be improved by scheduling a job which handles this task
* The server doesn't gracefully handle errors. It just uses console log and throws the error. A proper error handling middleware can be written which logs the errors, and gracefully handles them ensuring that the server doesn't go down due to unexpected errors
* The server can be integrated with an error monitoring system to create error logs which developers can look into to debug problems. This can also be used to create alerts for critical errors
* The UI is not responsive on mobile. For smaller screens (like tablets), the card structure looks ok but can definitely improve. Solution: for smaller screens, a different layout of the card design can be used which arranges sections in rows instead of columns
* To share global data, like login information - the app uses the React context API. But for more data sharing between components, a proper state management tool like redux can be used
* The frontend doesn't react to errors. For example, if the server goes down or there are network issues, the frontend does not provide the necessary feedback to the user. This can be improved by handling these cases and providing user friendly errors and feedback where required
* On the login page, the username field does not validate the input. Validation can be added

## Challenges Faced
* The topic of GraphQL was completely new to me. I had never worked with a graphql API (consumption on the FE) or even created a graphql API myself. So this was definitely something out of the comfort zone for me and it took some time to figure out the underlying principles. I quite enjoyed this journey of learning however. Painful at first but enlightening at the end
* Figuring out apollo-client and how to work with queries & mutations (mostly syntax) was a bit tricky
* Mongodb & mongoose gave me a lot of grief. Probably because I last worked with mongodb back in end of 2018 so it's been quite some time since I worked with it. And as Murphy's law states, whatever could go wrong did go wrong 🙄
* The scope of the task was quite big considering the time slot of 3-4 hours. There were lots of small things to do but each small thing was a smaller feature in its own which takes time to understand and build. It most definitely can be hacked together quicker but to write nicer cleaner code and also handle UI states such as errors, loading states and make the UI nice & clean - it takes time (to be more focused on the smaller details)

## Demo
You can find a demo of the project over here: [https://www.loom.com/share/2fce839b4d5642c89b417e8eeaee7f51](https://www.loom.com/share/2fce839b4d5642c89b417e8eeaee7f51)
