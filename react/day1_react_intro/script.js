console.log(React);

//  Real DOM 
let h1 = document.createElement("h1");
h1.textContent = "Hii, I am h1 made using REAL DOM";
document.body.append(h1);

console.log(h1);

// Virtual DOM 
// let rh1= React.createElement("h1", {class: "box"}, "Hii, I am made using virtual DOM");

// console.log("real-dom => ", h1);
// console.log("virtual-dom => ", rh1);

let rh1 = React.createElement(
    "h1",
    null,
    React.createElement("span", {}, "I am inside h1")
);

let realDomElem = document.querySelector("#root");

let rootOfReact = ReactDOM.createRoot(realDomElem);

rootOfReact.render();