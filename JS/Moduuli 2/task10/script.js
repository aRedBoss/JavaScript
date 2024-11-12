'use strict';

const numCandidates = parseInt(prompt('Enter the number of candidates:'));
const candidates = [];

for (let i = 0; i < numCandidates; i++) {
    const name = prompt(`Name for candidate ${i + 1}:`);
    candidates.push({ name: name, votes: 0 });
}

const numVoters = parseInt(prompt('Enter the number of voters:'));

for (let i = 0; i < numVoters; i++) {
    const vote = prompt(`Voter ${i + 1}, enter the candidate's name (or press enter to skip):`);
    
    if (vote) {
        const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
        if (candidate) {
            candidate.votes++;
        } else {
            console.log(`Invalid vote. Candidate '${vote}' does not exist.`);
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes);

const winner = candidates[0];
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);

console.log('Results:');
candidates.forEach(candidate => {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
});
document.getElementById('target').innerHTML = `The winner is ${winner.name} with ${winner.votes} votes.`;