# dom-manipulation

Query Selectors

- element.querySelector(selector) returns a reference to the first match of
  selector
- element.querySelectorAll(selectors) returns a “nodelist” containing references
  to all of the matches of the selectors, not an array

There are several other, more specific queries, that offer potential (marginal)
performance benefits, but we won’t be going over them now.

several array methods are missing from nodelists, you can convert nodelists to
arrays by using Array.from() or the spread operator ...

const nodesArray = [...document.querySelectorAll("div")];
