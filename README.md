## Pull Request Template Injector Chrome Extension
Pull Request templates are important, and I use them for every PR I make (professionally, at least.) I have this template committed to memory, and it takes approximately 5 seconds to type it out. That adds up, and it doesn't have to.

This Chrome extension will inject markdown into PR descriptions. It allows you to choose the markdown sections you want to add (don't need screenshots... toggle the checkbox) and populates the PR Description field with said markdown.

### Goals with this extension
My main goal was saving time, of course. But that's just half of it. It's been awhile since I've written vanilla JS (no `const` or `let`, no anonymous functions, no string interpolation :see_no_evil:), and even longer since I've done any DOM manipulation without JQuery. Oh, and no Sass, either. I went this route because I didn't want to bloat the package unnecessarily, and I wanted to get back to the basics.

With every application, no matter how small, I strive to meet accessibility standards. The extension popup is completely navigable by keyboard. Its contract ratio is over 7:1 (and so meets WCAG Level AAA benchmarks). Interactive elements (checkboxes and button) have focus indicators, as well as large clickable areas for touchscreens.

### Screenshot of popup
![](capture.png)

### TODO
* More error handling, esp with resolving `executeScript` promise.
* Compatibility with Bitbucket
* This will break if Github decides to change its `textarea` id attribute so explore a more flexible identifier for the description field.
* A few more a11y tweaks



