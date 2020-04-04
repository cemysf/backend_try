# webdev_try
- This is my tryouts for frontend+backend dev
- Overall TODO:
  - [x] Basic frontend using AngularJS
  - [ ] Basic backend using nodeJS+mongoDB

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
- TODO



-----------------

## resources
- https://www.youtube.com/watch?v=1tRLveSyNz8
- https://pro.academind.com/p/angular-nodejs-the-mean-stack-guide-2020-edition
- https://www.youtube.com/watch?v=vjf774RKrLc
