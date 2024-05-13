# Backend Setup

## Initial Setup
1. Right-click on the backend folder and select "Open in Integrated Terminal".
2. Run `npm init` and enter all necessary details.
    ```json
    {
      "name": "backend",
      "version": "1.0.0",
      "description": "A production-level backend",
      "main": "server.js",
      "scripts": {
        "start": "node server.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [
        "backend"
      ],
      "author": "Vaibhavi Upreti",
      "license": "ISC"
    }
    ```

## Install Dependencies
3. Install Express for routing:
    ```
    npm i express
    ```

## Create Server
4. Create a file named `server.js` manually or using the command:
    ```
    touch server.js
    ```

5. Add a start script in `package.json` to invoke the server:
    ```json
    "start": "node server.js"
    ```

6. Import Express and create a basic server using the `app.get` method.
    ```javascript
    import express from 'express';

    const app = express();

    app.get('/', (req, res) => {
        res.send('Server is ready');
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    ```

7. If you encounter a `SyntaxError: Cannot use import statement outside a module`, add `"type": "module"` to `package.json` to indicate that all JavaScript files should be treated as modules.

8. After `app.listen`, run `npm run start` to start the server.

## Create Routes
9. Create additional routes as needed. For example:
    ```javascript
    app.get('/movies', (req, res) => {
        // Logic to fetch and send list of movies
    });
    
    or  more professionaly/standardized approach
        more... api slash versioning etc

    app.get('/api/movies', (req, res) => {
        // Logic to fetch and send list of movies
    });
    ```

<!-- ----------------------------------------------------------- -->
# Frontend Setup

## Initial Setup
1. For a React application, choose a toolchain (e.g., Create React App, Vite, Parcel).
    - In this example, Vite is used:
      ```
      npm create vite@latest .
      ```

2. Select "React" and then "JavaScript" when prompted.

## Install Dependencies
3. Navigate into the frontend directory and install dependencies:
    ```
    cd frontend
    npm install
    npm run dev
    ```

4. Install and import Axios package for making web requests: 
    to fetch data from server

    ```
    npm install axios
    ```

    Azios library has several extra features than fetch:
    (features: web request, data handle, fail, loading, adding api keys in between of request, plus no need to JSON.parse) 
    [read more (https://www.npmjs.com/package/axios), [github](https://github.com/axios/axios)]

    ## Handling CORS Issues
    ** write axios.get('url') in useEffect(), and set data in setMovies state, then run


6. If you encounter CORS issues (e.g., access blocked by CORS policy), consider using a proxy or configuring CORS settings on the backend server. 
    - For Vite, add a proxy in `vite.config.js`:
    ```javascript
    server: {
      proxy: {
        '/api': 'http://localhost:3000'
      }
    }
    ```

## Best Practices
7. Avoid copying the build (`dist`) folder of your frontend application into the backend server. Instead, serve the frontend and backend separately to allow for easier deployment and updates.



    faced error: access blocked by cors policy(due to different origins):different port,url 
    explaination: anyone cannot access data from server : unwanted requests(data security), multiple requests(will increase cost)
    solution: 
    (i): whitelist URL (with port number): work of backend developer: can * starmark (everyone is allowed)
      IP/Domain whitelist
      in whitelisting : check on which port your app is running (production level: different for different: vercel, netlify etc..)
    (ii): install CORS package in backend [read more: https://www.npmjs.com/package/cors]
    (iii): use proxy: no need for cors

7. Concept of proxy:
    need of a proxy: due to dynamic url: as it will not always be like : http://localhost:3000/api/movies
    so cut: "http://localhost:3000" and remaining "/api/movies"
    check documentation, how to add proxy in create react app, vite app, etc
    for vite:  add in <vite.config.js>
    // proxy will identify /api and automatically append this url (that the req is coming from this url)
    server will think req is originated from this url only
    proxy:{
      '/api':'http://localhost:3000'   as server is also running on same url
    }

BAD PRACTICE: 
- npm run build : this will create a folder "dist" which will contain all your html,css,js code(bundled)
- mistake: copying this dist folder into backend (this will save your dev. cost but if any changes done to frontend it will not reflect/propagate there-you then need to rebuilt and retransfer dist to backend server and re start the server)