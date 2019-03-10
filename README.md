# react-webpack-min

```
mkdir react-app && cd rect-app && yarn init -y
```

```
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader \
    css-loader style-loader @babel/preset-env @babel/core @babel/preset-react
```

```
yarn add react react-dom
```

(optional)
remove `"main": "index.js"` from _package.json_

```
touch src/styles.css
```

```
cat > src/index.js << EOF
import "./style.css";

import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    return (
      <div className="app">
        <p>
          Perfection is achieved not when there is nothing more to add, but rather when 
          there is nothing more to take away.
        </p>
        <p>-- Antoine de Saint-Exupery</p>
      </div>
    );
  };
  
ReactDOM.render(<App />, document.getElementById('root'));
EOF
```

```
cat > src/index.html << EOF
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
EOF
```

Add scripts to package.json
```
  "scripts": {
    "dev": "webpack-dev-server --mode development --open"
  }
```