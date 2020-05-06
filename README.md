# webdev_try
- This is my tryouts for frontend+backend dev
- Overall TODO:
  - [x] Basic frontend using AngularJS
  - [x] Basic backend using nodeJS+mongoDB
  - [ ] Dockerize
  
-----------------

## frontend_try
- Followed this step by step, until the end of adding new component https://www.youtube.com/watch?v=1tRLveSyNz8
- Learned:
    - How to init a frontend project using AngularJS
    - Basic structure of an AngularJs project
    - How to create a new component (f. ex. for creating new posts)

### Steps followed
#### Init
1. Install nodeJS and mongoDB: https://tecadmin.net/setup-nodejs-with-mongodb-on-ubuntu/
- Install AngularJs CLI ` sudo npm install -g @angular/cli  ### g means global `
- Create new project using AngularJS CLI ` ng new test-project `
- Deploy local inside the new project folder ` ng serve `
- (IDE related) Install "angular essentials" and "material icon theme" extensions inside vscode 

#### Add a new Angular component for creating new posts:
1. Create new folders src/app/posts/post-create
- Create and fill .component.ts and .component.html
  - Selector inside component determines the HTML tag
- New class using @Component decorator inside .component.ts 
- Register it to app.module.ts
- Add textarea and button to .component.html
- **Event binding** to button, pass a function from the class
- **string interpolation** ( access class variable in "{{ }}") and **property binding** (set a html attrib inside "[]") 
- Add a marker to html tag (#variable), pass it to button click 
- TODO: **two way binding** with [(ngModel)]

### Some notes from the video
- package.json: Package dependencies are inside 
- e2e/: for end to end testing
- node_modules/: stores dependecies, to update use `npm install`
- src/app/: frontend components
- HTML tag "<app-root>" inside src/index.html is a placeholder for src/app/app.component.html (follow main.ts)


-----------------

## backend_try
- Followed video https://www.youtube.com/watch?v=vjf774RKrLc
- Learned:
  - How to init a backend project Node.js express
  - Basic structure of the project
  - Connect to a mongoDB database on cloud
  - Save/read data to/from database 


### Steps followed
1. New folder _test-project-backend_
- `npm init`
- `npm install express nodemon mongoose`
- Create new _app.js_ file, give starting point in _package.json_
  - Fill inside..
- Set up new sandbox on [mlab.com](https://mlab.com/)
  - `npm install dotenv` for storing env variables (database access)
  - Set up db connection
- New folder _routes_
  - Create _posts.js_ inside
  - Import it from _app.js_
- New folder _models_
- New schema _models/Post.js_
  - Update _posts.js_ inside _routes_
  - (optional) Download [postman app](https://www.postman.com/downloads/) to test 
  - `npm install body-parser` to handle JSON post request
    - Add it to _app.js_
  - Implement saving posts as a **async** post function in _posts.js_
  - Update get function (also async) to get posts

-----------------

## resources
- https://www.youtube.com/watch?v=1tRLveSyNz8
- https://pro.academind.com/p/angular-nodejs-the-mean-stack-guide-2020-edition
- https://www.youtube.com/watch?v=vjf774RKrLc
