//JS code function to update visitor count in the html page

//const count = document.querySelector(".counter");

async function updateCount() {
   let response = await fetch('https://x4nduzpvjjq3zgjr3yubwdxruq0pqiph.lambda-url.ap-south-1.on.aws/');
   let data = await response.json();
   document.getElementById('counter').innerHTML = `Visitors: ${data}`;

}

updateCount();


/*const count = document.querySelector(".counter");

updateCount();

function updateCount() {
    fetch('https://x4nduzpvjjq3zgjr3yubwdxruq0pqiph.lambda-url.ap-south-1.on.aws/')
        .then(response => {
        return response.json()
      })
        .then(data => {
            console.log(data)
            count.innerHTML = data;
        })
    }*/