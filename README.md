# emergency-hotline-en
creating a responsive webpage using HTML, CSS and JS

Answer to the Questions
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer: getElementById finds one element by that name of the ID which should be unique. getElementsByClassName find all the elements with that certain name of the class. The difference between querySelector / querySelectorAll is it finds the first element that matches and finds all the element that matches respectively.
   
2. How do you create and insert a new element into the DOM?
   Answer: We can use .createElement() and then use appendChild() to add it.

3. What is Event Bubbling and how does it work?
   Answer: Event bubbling means when we click on a element (child) the event also takes palce to its parent element. So if a button inside a <div> is clicked the button will also trigger on the div.

4. What is Event Delegation in JavaScript? Why is it useful?
   Answer: Event delegation is when we add one event listener into a parent element and use it to handle events from its children. It is useful when we have many child elements because it makes it more dynamic

5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer: preventDefault() stops the default action like a link opening or a form submitting. stopPropagation() stops the event from bubbling up to parent elements from child.
