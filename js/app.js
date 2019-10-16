document.querySelector('#generate-names').addEventListener('submit', loadNames);
const spinner = document.querySelector("#loading img");


// Execute the function to query the API
function loadNames(e) {
     e.preventDefault();


     // Read the values from the form and create the variables
     const origin = document.getElementById('country').value;
     const genre = document.getElementById('genre').value;
     const amount = document.getElementById('quantity').value;

     // Build the URL
     let url = 'http://uinames.com/api/?';
     // Read the origin and append to the url
     if (origin !== '') {
          url += `region=${origin}&`;
     }
     // Read the genre and append to the url
     if (genre !== '') {
          url += `gender=${genre}&`;
     }
     // Read the amount and append to the url
     if (amount !== '') {
          url += `amount=${amount}&`;
     }

     //fetch API

     fetch(url)
          .then(function (response) {
               spinner.style.display = "block";
               return response.json();
          }).then(function (names) {



               setTimeout(() => {

                    let html = '<h2>Genereted names </h2>';
                    html += '<ul class="list">';
                    names.forEach(function (name) {
                         html += `<li>${name.name}</li>`;
                    });
                    html += '</ul>';
                    document.querySelector('#result').innerHTML = html;
                    spinner.style.display = "none";
               }, 5000);

          }).
          catch(function (error) {

               console.log(error);
          });

}


