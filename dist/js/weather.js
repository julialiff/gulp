function call(city){
  alert("db");
  $.post("http://localhost:3009",
    {
      name: "São Paulo"
    })
}