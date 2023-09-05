import { createElement } from "rewrite.js";

// Create a function that takes in jsx as string and returns a tree of syntax objects,
// being either plain js or placeholders for Rewrite.createElement calls
const createSimpleAbstractTree = (jsx) => {
    // Move through the jsx character by character
    // parse all the non - literal, non-comment instances of <something>.*</something> into an array of positions and values
    // then replace the values with a Rewrite.createElement call
    // then join the array back into a string and return the string
    const jsxArray = [];
    let isElement = false,
        currentElementName = "",
        isElementName = false,
        currentElementAttributes = "",
        currentElementChildrenArray = [],
        isComment = false,
        isString = false,
        stringOpener = "",
        commentOpener = "",
        currentAttributeName = "",
        currentAttributeValue = "";
    for (const char of jsx) {
        // Are we inside a string or comment?
        if (!isString) {
            isString = ["'", '"', "`"].includes(char);
        } else if (isString && char === stringOpener) {
            isString = false;
        }
        if (!isComment) {
            isComment =
                ["//", "/*"].includes(currentString.slice(-2)) && !isString;
        } else if (isComment && char === "\n" && commentOpener === "//") {
            isComment = false;
        } else if (
            isComment &&
            char === "/" &&
            commentOpener === "/*" &&
            currentString.slice(-1) === "*"
        ) {
            isComment = false;
        }

        // If we're not inside a string or comment, we can parse the tag pairs
        if (!isElement && char === "<") {
            // We've found the start of an element
            isElement = true;
            currentElementName = "";
            currentElementAttributes = "";
            currentElementChildrenArray = [];
        }
        if (isElement && char !== ">") {
            // We're inside an element tag
            if (char === " ") {
                // We've found the end of the element name
                isElementName = false;
            } else {
                // Add the character to the element name
                currentElementName += char;
            }
        }
    }
};

const compile = (simpleAbstractTree = {
    // Takes a simple tree and return a string of js by compiling to Rewrite.createElement calls
});

// Crawl through the webpage and find any <script/> with type "jsx", using document
const parse = async () => {
    const scripts = document.querySelectorAll('script[type="jsx"]');
    const jsx = [];

    // Loop through all the scripts to pull the source
    for (const script of scripts) {
        const src = script.getAttribute("src");
        if (src) {
            // If the script has a src, fetch it and add it to the jsx array, using await
            const response = await fetch(src);
            const text = await response.text();
            jsx.push(text);
        } else {
            // If the script doesn't have a src, add it to the jsx array
            jsx.push(script.innerHTML);
        }
    }

    const combinedJSX = jsx.join("\n");

    // Transform the jsx to js
    const js = compile(combinedJSX);

    // Return the jsx
    return js;
};

// Execute immediately when loaded in browser
if (typeof window !== "undefined") parse();
