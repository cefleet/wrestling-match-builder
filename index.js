import { createTeam } from "./generate-data.js";
import {generateBestMatchesForAllTeams} from "./generate-match.js";

let teams = [];

const teamsContainer = document.getElementById('teams');
const matchesContainer = document.getElementById('matches');
const generateTeam = document.getElementById('generate-team');
const generateMatches = document.getElementById('generate-matches');
const teamName = document.getElementById('team-name');
const teamCount = document.getElementById('team-count');

generateMatches.style.display = 'none';

generateTeam.addEventListener('click',()=>{
  teams = [...teams, createTeam(teamName.value, teamCount.value)];
  teamName.value = null;
  teamCount.value = 0;
  if(teams.length > 1) generateMatches.style.display = 'inline';
  teamsContainer.innerHTML = presentTeams();
});

generateMatches.addEventListener('click', ()=>{
  const matchesForTeams = generateBestMatchesForAllTeams(teams);
  matchesContainer.innerHTML = `<div>${matchesForTeams.map(presentTeamMatches)}</div>`;
})

function presentTeams(){
  return`<div style="display:flex">${teams.map(presentTeam)}</div>`;
}

function presentTeam(team){

  return `
<div>
  <h3>${team.name}<h3>
  <div style="width:400px;border:1px solid;">
    ${team.wrestlers.sort((a,b)=>a.weight - b.weight).map(wrestler=>presentWrestler(wrestler))}
  </div>
</div>`
};

function presentWrestler(wrestler){
  const {name,age,exp,weight} = wrestler;
  return `
  <ul>
    <li><strong>Name :</strong>${name}</li>
    <li><strong>Age :</strong>${age}</li>
    <li><strong>Experience :</strong>${exp}</li>
    <li><strong>Weight :</strong>${weight}</li>
  </ul>
  `
}

function presentTeamMatches(teamMatches){
  return teamMatches.map(([wrestler1, wrestler2], index)=>`
  <div>
    <h4>Match #${index+1}</h4>
    <div style="display:flex; justify-content:space-between; align-items:center">${presentWrestler(wrestler1)} <p style="padding:4px;">VS</p> ${presentWrestler(wrestler2)}</div>
  </div>`);
}
