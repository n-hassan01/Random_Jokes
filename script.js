document.getElementById('btn').addEventListener('click', loadJokes);

function loadJokes(e){
    let num = document.getElementById('numJokes').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${num}`, true);

    xhr.onprogress = function(){
        document.getElementById('output').innerHTML = '<h3 style="color: crimson">Loading...</h3>';
    }

    xhr.onload = function(){
        if(this.status === 200){
            let data = JSON.parse(this.responseText);
            //console.log(data);
            let jokes = data.value;
            let output = "<ol>";
            jokes.forEach(function(item){
                output += `<li>${item.joke}</li>`;
            });
            output += "</ol>";

            document.getElementById('output').innerHTML = output;
        }
    }

    xhr.send();
}