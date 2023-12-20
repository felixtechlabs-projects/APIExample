async function fetchBooks() {
    const url = 'https://hapi-books.p.rapidapi.com/month/2023/1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c3bfc57163mshe3e68b1a54ea4adp147dabjsn29dc6b3ea246',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options); // string
        const result = await response.text(); // string
        const convertedResult = JSON.parse(result); // array of json
       let htmlString = ``;
        convertedResult.forEach(book => {
            htmlString += `
            <div class="col">
                <div class="card">
                <img src="${book.cover}" alt="" class="card-img-top">
                    <div class="card-header">
                        <h3> ${book.name} </h3>
                    </div>
                </div>
                <div class="card-body">
                    <a href="${book.url}"> Read Book </a>
                    <em> Rating:  ${book.rating} </em>
                </div>
            </div>
            `
        });

        document.getElementById("row1").innerHTML = htmlString;
    } catch (error) {
        console.error(error);
    }
}

function postMethodExample() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let options = {
        method: "POST",
        body: JSON.stringify({
            title: "Poo",
            userId: 1,
            body: "example of body"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    }

    fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data));
}

postMethodExample()


function updateAPIExample(id, body) {
    // post id = 1 => update
    let url = "https://jsonplaceholder.typicode.com/posts/"+id;
    let options = {
        method: "PUT",
        body: JSON.stringify(body),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    fetch(url, options)
    .then(response => response.json())
    .then(json => {
        document.getElementById("title").innerHTML = json.title;
        document.getElementById("body").innerHTML = json.body;
    });
}

let body = {
    title: "poo",
    body: "new body",
    userId: 1,
    id: 1
}
updateAPIExample(1, body);

async function deleteObject(id) {
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    let options = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        alert("Object deleted");
    } catch (error) {
        console.log(error);
    }
}