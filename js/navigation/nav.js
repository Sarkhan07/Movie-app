// console.log(document.body);

// console.log(document.head);

// console.log(document.documentElement); // for getting all html elements that it contains

// console.log(document.body.childNodes); // all nodes that are childs of body
// first element of body it's line break
// then div.wrapper, text, script what we cannot see in site it's nodes but what we see it's elements
//methods for getting first and last element

// console.log(document.body.firstChild); //for getting first
// console.log(document.body.lastChild); // for getting last

// console.log(document.querySelector('#current').parentNode); // for getting the parent of current

// console.log(document.querySelector('#current').parentElement); // for getting parent element

// console.log(document.querySelector('#current').parentNode.parentNode); // for getting the parent of parent

// dataAtribute

// data-current, data-modal, data-close = "3"// in html we write for working in js, and it's preferable than id
// if write only data-current it means data-current = true

// for getting data in js follow these rules

// console.log(document.querySelector('[data-current = "3"]').nextSibling); for getting the next node with data-current, for that reason
// these are not preferable and for avoiding this we should get element

// if there will be the line break then we will get this break of line
// console.log(document.querySelector('[data-current = "3"]').previousSibling);

//getting element
// console.log(document.querySelector('[data-current = "3"]').nextElementSibling);
// console.log(
//     document.querySelector('[data-current = "3"]').previousElementSibling
// );

// also about fist and last

// console.log(document.body.firstElementChild); // for getting first element not any node
// console.log(document.body.lastElement);
// there is not analog of getting  of childnodes all elements, we can run chain and remove all textnodes and left only elements

for (let node of document.body.childNodes) {
    // we can look at developer tools
    console.log(node);

    if (node.nodeName == '#text') {
        continue; // for missing and continue of process
    }

    console.log(node);
}
