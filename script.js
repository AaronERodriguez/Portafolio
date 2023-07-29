let htmlSkill = document.getElementById('html');
let cssSkill = document.getElementById('css');
let jsSkill = document.getElementById('js');
let reactSkill = document.getElementById('react');
let pythonSkill = document.getElementById('python');
let gitSkill = document.getElementById('git');
let skillsArr = [htmlSkill, cssSkill, jsSkill, reactSkill, pythonSkill, gitSkill];

const skillHoverHandler = (event, id) => {
    skillContainer = [...document.getElementById(id).children];
    console.log(document.getElementById(id))
    skillContainer[1].classList.add('fa-beat-fade');
}
const skillUnHoverHandler = (event, id) => {
    skillContainer = [...document.getElementById(id).children];
    console.log(document.getElementById(id))
    skillContainer[1].classList.remove('fa-beat-fade');
}

skillsArr.forEach(skill => {
    skill.addEventListener('mouseover', event => {
        skillHoverHandler(event, skill.id)
    });
    skill.addEventListener('mouseout', event => {
        skillUnHoverHandler(event, skill.id)
    });
})