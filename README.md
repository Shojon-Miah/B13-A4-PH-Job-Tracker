## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?


## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

# getElementById():
	- Selects a single element with a specific id
	- Always returns a single element
	- Id must be unique

Example: const title = document.getElementById("mainTitle");


# getElementsByClassName()
	- Selects multiple elements with the same class name
	- The collection automatically updates when the DOM changes

For instance: const cards = document.getElementsByClassName("card");


# querySelector()
	- Can select elements with any CSS selector
	- Returns the first matching element

Example: const firstBtn = document.querySelector(".btn");

# querySelectorAll()
	- Selects all matching elements with any CSS selector
	- Returns a static NodeList
	- Does not automatically update when the DOM changes

Example: const allBtns = document.querySelectorAll(".btn");


## 2. How do you create and insert a new element into the DOM?

Answer:
Creating a new element and adding it to the DOM means creating an HTML element with JavaScript and displaying it on a webpage dynamically.

How to do it:

Step 1: Creating the Element

	const newDiv = document.createElement("div");

	- Here a new div is created using createElement().

Step 2: Adding Content or Text

	newCard.textContent = "New Job Added";

	Now the text added inside the new div.

Step 3: Insert into the DOM
	document.body.appendChild(newDiv);

	The element has been added inside the body using appendChild(). Now it can be seen on 	the web page.

Example:

const newCard = document.createElement("div");
newCard.textContent = "New Job Added";
document.body.appendChild(newCard);


## 3. What is Event Bubbling? How does it work?
# Answer: 
Event Bubbling is a process where an event occurs on an element, the event gradually moves upwards to its parent elements.

# How it works:

Suppose a button is inside a div.

If you click on the button, the event flow will be like this:

	Button → Div → Body → Document

This means that the event first acts on the target element (button), then its parent, then its parent—and so on. This is called bubbling.


Example: 
document.querySelector("div").addEventListener("click", function() {
  console.log("Div clicked");
});

document.querySelector("button").addEventListener("click", function() {
  console.log("Button clicked");
});


Now when you click on the button, two messages will appear because the event will bubble from the button to the div.

So, in short, Event Bubbling means that the event propagates from the lower element to the upper element.

## What is Event Delegation in JavaScript? Why is it useful?
Definition:

Event Delegation is a method where we place a listener on the parent element instead of having separate event listeners on multiple child elements.

so shortly say, we handle the event on the parent instead of directly on the child.


# How it works:

Due to Event Bubbling, When an event occurs on a child element, it goes up to the parent. We can catch the event on that parent and use event.target to understand which child element was actually clicked.

Example:

document.getElementById("container").addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    console.log("Delete button clicked");
  }
});

Here, we have not given a separate listener to each delete button. Only one listener has been placed in the container.

Why useful:
	- Reduces memory usage
	- Less listeners required for better performance
	- Works with dynamically added elements
	- Cleaner and more efficient code

# Event Delegation is widely used in dashboards, task managers, and dynamic lists where elements are added or removed frequently.

## 5. What is the difference between preventDefault() and stopPropagation()?

# Answer:
preventDefault() and stopPropagation() both are used to control events, but they work differently.

# preventDefault() → stops the default browser action. When we submit a form, the page reloads, if we want to stop that, we use preventDefault().
Example:

form.addEventListener("submit", function(event) {
  event.preventDefault();
});

# stopPropagation() → stops the upward flow (bubbling) of the event. This prevents the event from going to the parent element. That's means, it stops bubbling.

button.addEventListener("click", function(event) {
  event.stopPropagation();
});