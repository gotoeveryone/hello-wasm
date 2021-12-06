const js = import("./node_modules/@gotoeveryone/hello-wasm/hello_wasm.js");

document.querySelector("#send").addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  js.then(js => {
    js.greet(name);
  }); 
});
