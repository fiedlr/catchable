# catchable
A jQuery plugin for iOS-like catching scroll-then-fix elements.

## How it works

> Make sure you include **both** the Javascript and the CSS file (*otherwise it won't work*):

    <link rel="stylesheet" type="text/css" href="jquery.catchable.css">
    <script type="text/javascript" src="jquery.catchable.js"></script>

Once it's set up, you just call the plugin on whatever element(s) you need:

`$('.bar').catchable();`

**Voila**, you have an element that attaches itself to the top of the window when scrolled over and stays there until you scroll out of its container.

## Methods

### destroy
destroys the instance

## Copyright

Released under the [MIT License](http://opensource.org/licenses/MIT).
