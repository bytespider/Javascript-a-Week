#Javascript a Week#
Javascript a Week is a project to improve my javasript knowledge, and provide a
useful set of javascript for novices of the language.

Feel free to fork the scripts, improve them and comment on how else something
could be done. Help others to learn by example.

If you have any ideas of things I could code each week then drop me an email.
[rob@bytespider.eu](mailto:rob@bytespider.eu)

##Week One - URL Parse##
URL Parse "does what it says". It parses URLs. The things to learn here is that
it was written with mind that it may be useful outside of a browser, becauase
whilst there are tricks that will be far more efficient, if you don't have a
DOM around you can't use them.

Should work on Node.JS and CommonJS platforms, but try it in other environments.

Notice how an IIFE ([Immediately Invoked Function Expression](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)) is
used too protect the global scope from our code, this way only the variables we
explicitly intend to be global will become global.
This is in general a good practice for all code. As you can see in this example
we assign a JsWeekly namespace to the global scope and then put our methods onto
that. This way we can be sure we don't mess up anything that was already there
and working.

##Week Two##
This week is a collection of validators.

Again they are platform agnostic and limit their footprint on the global scope.

Here we demonstrate that by using nested namespaces we can add more methods to
our object in any order, much like a plugin system. Each of the validators can be
use alone, or together for a complete validation package.

