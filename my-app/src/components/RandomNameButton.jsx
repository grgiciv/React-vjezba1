const adjectives = ['lijep', 'mlad', 'simpatican'];
const nouns = ['tetrijeb', 'ljiljan', 'poliglot'];

function getRandomName(){
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random()* nouns.length);
    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}

export function RandomNameButton(props) {
    function handleClick() {
        console.log(getRandomName());
        props.onRandomName(getRandomName());
    }
    return(
        <button type="button" onClick={handleClick}>Get random name</button>
    );
}