# Technical Test for Trainee People on React

For this test, you will have two APIs:

    - Facts Random: https://catfact.ninja/fact
    - Random Image: https://cataas.com/cat/says/hello

What do you need to do?

You will need to fetch a random fact about cats and display an image of a cat with the first word of the fact.

Limitations: You can use Vite, but you will need to start the project in vanilla JavaScript.

## How to Solve It

### Initializing a React Project from a Vanilla Javascript Setup
First, you need to create a project using vite.js, to complete this step, you will need to open a new terminal. Then, write the next command:

```

npm create@latest

```
Select the following options:
- Framework: React
- Variant: Vanilla Javascript

After the project is generated, navigate into the project folder and run the following commands:

```
cd projectFolder/
npm install
```

These commands will take you into the project folder and install the basic dependencies. Keep in mind that since we created a vanilla project, React isn't yet installed. To continue, you need to install both react and react-dom by running the following command:

```
npm install react react-dom
```

Next, you need to generate a vite.config.js file. Add the following code to the generated file:

```
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()]
});
```

This code imports the react plugin into the vite configuration file. This plugin enables react support in vite. At this point, we almost finished initializing our React.js project from a vanilla setup.

To finalize, we need to modify the main.js file. Open the main.js file and replace its contents with the following code: 

```
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('app'));

root.render(<h1>Hello, World!</h1>)

```

At this point we almost completed the setup. To finish, we just need to change the file extension of main.js to main.jsx. Then, you can run the following command in the terminal to start the project:

```
npm run dev
```

## Develop

First of all, I suggest verifying the API URLs because we need to understand where we are requesting the information from, how we are making the request, and what the endpoint will return. For example, for the image API, the URL will be:

```
https://cataas.com/cat/says/${firstWord}?size=506&color=red
```

To keep this project organized, I created a new folder named "src", where I will store my App.jsx component and App.css file. First, open your app.jsx and let's start by importing all the libraries we will be using for this test:

```
import { useEffect, useState } from "react"
import './App.css'
```

Next, I will create two constants that will store the APIs url we retrieved earlier:

```
const factEndPoint = `https://catfact.ninja/fact`
const imageEndPoint = 'https://cataas.com/cat/says/{firstWord}?size=506&color=red'
```

Once this is done, we can now create our app's export function and use it in main.jsx. The app file at this point should look something like this:

```
import { useEffect, useState } from "react"
import './App.css'

const factEndPoint = `https://catfact.ninja/fact`
const imageEndPoint = 'https://cataas.com/cat/says/{firstWord}?size=506&color=red'

export function App(){
    return(
        <main>
            <h1>test for app component</h1>
        </main>
    )
}
```

Now, in the main.jsx file, we need to import the App.jsx component and update what are we rendering by replacing it with the App component:

```
*Import of App.jsx*

import {App} from './src/App'
 
*New Render*
root.render(<App/>)

```





