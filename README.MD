# Rewrite

## A educational re-write of React

With the goal of preferring brevity and readability over completeness and performance

### Why?

React is a great library, but it's also a big one. This project is an attempt to make a simple, readable implementation of React that is easy to understand and modify, driven by my own curiosity and desire to learn more about the initial decisions that went into Babel and React.

### File structure

```
index.html  -  The webpage that renders the app
app.jsx     -  A simple counter app written in JSX
compile.js  -  Compiles linked JSX script tags
rewrite.js  -  Exposes the rewrite library to global namespace
               and implements the following React APIs:
                   createElement,
                   render,
                   useState,
                   useEffect,
```
