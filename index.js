console.log("Assignment - 1");

fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let _data = "";
    completedata.map((values) => {
      _data += `<tr>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td></tr>`;
    });
    document.getElementById("row").innerHTML = _data;
  })
  .catch((err) => {
    console.log(err);
  });
