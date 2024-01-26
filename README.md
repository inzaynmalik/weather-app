# Getting Started with Create React App

This project was bootstrapped with [Create React App].

First run command : "npm i" to donwload neccessaty node modecules

# Running the Project

Run Command "npm start"


# Talking about structure and the project

1. I created two(App.js , DialogBox.js) components and one resualble component(Card.js)

2. I also created a redux where i stored the data as initialData

3. Now to render all the data in the cards i used ".map" functioanlity and pass that data as a props to our resuable component(Card.js)

4. Now i send the same data which we are getting in Card.jsx to DialogBox.jsx as props

5. Here i could have directly passed the data(initialdata) from my redux store to Dialogbox.js but to show data flowing from parent component to its child component, i used this approach