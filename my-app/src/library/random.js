const adjectives = ['lijep', 'mlad', 'simpatican', 'lijeni'];
const nouns = ['tetrijeb', 'ljiljan', 'poliglot', 'influencer', 'filozof'];

export function getRandomName(){
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random()* nouns.length);
    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}