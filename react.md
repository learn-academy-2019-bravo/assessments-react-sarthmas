# React Assessments

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework.  (Yes it was initially described this way but there appear to be varying views on this - see https://medium.com/javascript-inside/what-if-react-was-really-only-the-v-in-mvc-5854fd6f601c)


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer.  Smart components contain state.  They can change when state changes, and pass those changes down to the dumb components as props.  Dumb components are primarily responsible for presentation of website elements.  Dumb components do not contain state, but are passed down props, including the state of the parent.   Smart components are responsible for managing all changes and interactivity in the application and passing changes in state down to all child components.  In this way the smart components are managing the version control, or updating of the application to incorporate new data and respond to user actions.  This is important because a developer needs to have a logical way to re-render with new data so that all of the components of an application are operating on the same information - ie all parts of an application update when a user enters new information.  

 //Googled Answer

A Smart Component is any component which manages its own state. When working with Babel or ES6-style React, we've come to know this as any class -like object that extends Component.  Smart are the ones that keep track of state and care about how the app works.

Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on.
The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. They don’t have internal state to manage. They wouldn’t know how to change the data they are presenting if they were asked. Ignorance is bliss.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer

Yarn is a package manager that installs pieces of code - libraries - that are used by developers to make coding more efficient.  As many of these libraries are updated regularly, yarn maintains consistent versioning and updates for all of the libraries or packages it manages.  It will always update the react library if you are creating a react file.

 //Googled Answer

 Yarn is a new package manager that replaces the existing workflow for the npm client or other package managers while remaining compatible with the npm registry. It has the same feature set as existing workflows while operating faster, more securely, and more reliably.

The primary function of any package manager is to install some package — a piece of code that serves a particular purpose — from a global registry into an engineer's local environment. Each package may or may not depend on other packages. A typical project could have tens, hundreds, or even thousands of packages within its tree of dependencies.

These dependencies are versioned and installed based on semantic versioning (semver). Semver defines a versioning scheme that reflects the types of changes in each new version, whether a change breaks an API, adds a new feature, or fixes a bug. However, semver relies on package developers not making mistakes — breaking changes or new bugs may find their way into installed dependencies if the dependencies are not locked down.

In the Node ecosystem, dependencies get placed within a node_modules directory in your project. However, this file structure can differ from the actual dependency tree as duplicate dependencies are merged together. The npm client installs dependencies into the node_modules directory non-deterministically. This means that based on the order dependencies are installed, the structure of a node_modules directory could be different from one person to another. These differences can cause “works on my machine” bugs that take a long time to hunt down.

 Yarn resolves these issues around versioning and non-determinism by using lockfiles and an install algorithm that is deterministic and reliable. These lockfiles lock the installed dependencies to a specific version, and ensure that every install results in the exact same file structure in node_modules across all machines. The written lockfile uses a concise format with ordered keys to ensure that changes are minimal and review is simple.

 The install process is broken down into three steps:

 Resolution: Yarn starts resolving dependencies by making requests to the registry and recursively looking up each dependency.
 Fetching: Next, Yarn looks in a global cache directory to see if the package needed has already been downloaded. If it hasn't, Yarn fetches the tarball for the package and places it in the global cache so it can work offline and won't need to download dependencies more than once. Dependencies can also be placed in source control as tarballs for full offline installs.
 Linking: Finally, Yarn links everything together by copying all the files needed from the global cache into the local node_modules directory.
 By breaking these steps down cleanly and having deterministic results, Yarn is able to parallelize operations, which maximizes resource utilization and makes the install process faster.

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes {
      constructor(props){
        super(props)
        this.state = {
             name: 'Meatballs',
             name: 'Mac & Cheese'
        }
      }

      render() {

        return (

          let recipes = this.state.recipe.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })

          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
 button, checkbox, url


 //Googled Answer
 <input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer

State is code that allows you to create ordered interactivity in your application.  State can be passed down as props from a parent to a child component.  State is a way to create order in the re-rendering process of code, so that there is a clear and logical update process when new information is added to an application. This is important when there are a large number of components and data sources so developers can understand how and when the new information will be reflected in the application and make sure that all the parts of an application are updated in a consistent manner when new information is entered by a user.

 //Googled Answer

 In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state .


 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
Props are properties that are passed to a component and are immutable.  These are similar to arguments passed to a function.   Dumb components can change because they can receive different data in the form of props.  When a parent passes down new state information to a dumb component, that information is props.

State is initialized by the parent class and can change based on user input.  A state in React Component is its own local state, the state cannot be accessed and modified outside the component and can only be used inside the component - this is similar to a function having local scope.

 //Googled Answer

 Props are passed to the component and are fixed throughout its lifecycle. But there are cases when we want to use data that we know is going to change overtime. In this case we use something called state.

 Unlike props, state is a private feature and it strictly belongs to a single Component. State allows React components to dynamically change output over time in response to certain events.
 Component’s state is initialized inside a constructor.  And can be changed later using inbuilt setState() function.

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
