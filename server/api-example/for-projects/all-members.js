fetch('http://localhost:5000/all-members/63b057de3c3778e151e8108f')
  .then((response) => response.json())
  .then((data) => console.log(data));