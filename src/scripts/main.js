// Clone the Grunt-Browserify-Boilerplate

// Remember to npm install and run grunt

// In main.js import the domComponent package

// import DOMComponent from "nss-domcomponent"
// Define 2 subclasses of the DOMComponent class

// an H1 class
// a Div class
// Make an instance of each subclass

// Make the H1 instance first and pass it some content of "I love extending classes"
// Make the Div instance and pass in the h1 instance as an argument, to add it as a child of the div
// console.log the div instance, or append it to the DOM!

import DOMcomponent from "nss-domcomponent"

// console.log(DOMcomponent)

class H1 extends DOMcomponent {
  constructor (attributes, ...children) {
    super("h1", attributes, ...children)
    // return this
    this.motto = "h1s are the superior headers!"
  }
}

let h1 = new H1({id: "page-header"}, "Extending classes is fun!")


class Div extends DOMcomponent {
  constructor (attributes, ...children) {
    super("div", attributes, ...children)
    // return this
    this.motton = "divs divs divs, i love divs"
  }
}

let div = new Div({class: "container"}, h1)

console.log(h1);
console.log(h1.motto);
console.log(div);
console.log(div.motto);

// appends to DOM (from DOMcomponent import)
div.render("#output")
