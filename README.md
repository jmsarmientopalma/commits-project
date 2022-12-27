# Simple Commit List (GitHub)

This project corresponds to a simple and fast-developed requirement for an interview with FullTime.<br>
The objective of this project is to demostrate in a general way the knowledge in programming and good practices, in this case, TypeScript (Angular), Javascript (NodeJs) and the use and construction of API Rest.<br><br>

---


## Backend

The backend of this project uses the following frameworks/technologies
- NodeJs
- NestJs
- Octokit (GitHub API library)



### Configuration

The backend uses a <mark>config.json</mark> file to store data that could be variable (in a real and more complex project). Besides, here is stored the apikey to connect to GitHub API. 
This file should be located in:

`
/backend-nestjs/config/
`

and it must have the following structure:

```
{
    "apikey": "GITHUB_PERSONAL_APIKEY",
    "user": "USER",
    "repo": "REPOSITORY"
}
```

For security reasons, **this config file is included in gitignore**, <mark>this means that this file is not in the repository and must be created as detalied in the instructions above</mark> before run the backend.




## Frontend

The frontend of this project uses the following frameworks/technologies/modules
- Angular
- Bootstrap 5
- HttpClientModule (for API call)



### Configuration

To achieve the connection to the backend, the frontend uses and config file, as the backend do. The difference is that this config file is maintained in the code versioning on GitHub. This **confi.json** file is located in:

`
/frontend-angular/config/
`

and its structure is the following:

```
{
    "backendBaseurl" : "http://localhost",
    "backendPort" : "3000"
}
```

**backendBaseurl** : The URL where the backend is running, including the protocol (http:// or https://)
**backendPort** : The port where the backend is serving its contents


---


**Note:**
``` 
The call to the GitHub API to retrieve the commits could have been done directly from the frontend, using some Angular characteristics and/or external libraries. But the requirement was explicitly to use a backend technology to connect to GitHub.
```

<br><br>

## Configuration Resume

Following are detailed the steps to run this project on a developement environment:

1. Clone Repository or download the .zip
2. Create the config file for the backend
3. Check that port 3000 is free on the machine where the backend will run
4. On a terminal, navigate to the backend folder (backend-nestjs) and run the command `npm install` for obtain all dependencies.
5. On a terminal, navigate to the frontend folder (frontend-angular) and run the command `npm install` for obtain all dependencies.
6. Run the backend executing the command `npm run start`
7. Run the frontend executing the command `ng serve -o`. This command will open the website in the browser when is already running.
8. Click on the *Update button* on the Web to obtain all the commits for the same project that you clone or donwload.
9. Be happy and have a nice day. 

<br><br><br>

**Final Note:**
```
This project intend to show a well-structured and modularized project, on its backend and frontend sides, as well as the basic programming on Angular and NestJs considering the Clean Code principle using TypeScript.
In its actual state, the project as so much work that can be done to isolate components, make more strong typing and, of course, make better the security and to implement characteristics in a better way, like lazy loading, child routes, etc.   
```