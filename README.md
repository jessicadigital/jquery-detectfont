# jessicadigital/jquery-detectfont

This jQuery package allows you to detect the font being applied to an element within the browser. This is useful for finding out which fonts from a list are supported on the user's browser.

The method used by this plugin is not infallible; as there is no Browser API access to see which font is being used, the plugin creates phantom elements and checks their width. Therefore two similar fonts may produce the same result; however this is unlikely especially if you use a large body of text.

This plugin is based on and expanded from this [StackOverflow answer](http://stackoverflow.com/questions/15664759/jquery-how-to-get-assigned-font-to-element).

## Examples

For examples, see the ```demo/demo.html``` file within the repo.

## Installation

To install this plugin, use bower:

```bower install jquery-detectfont --save-dev```

You will then need to reference the ```jquery.detectfont.min.js``` script within your page.

The ```detectFont()``` function will now be accessible within your scripts.
