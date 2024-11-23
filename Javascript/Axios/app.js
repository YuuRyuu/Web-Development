
const getDadJoke = async () => {
    try {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    }
    catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement("LI");
    newLI.append(jokeText);
    jokes.append(newLI);
}

const jokes = document.querySelector("#jokes");
const btn = document.querySelector("#btn");
btn.addEventListener("click", addNewJoke);

