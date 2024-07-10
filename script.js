const htmlSkill = document.getElementById('html');
const cssSkill = document.getElementById('css');
const jsSkill = document.getElementById('js');
const reactSkill = document.getElementById('react');
const pythonSkill = document.getElementById('python');
const gitSkill = document.getElementById('git');
const nodeSkill = document.getElementById('node');
const sqlSkill = document.getElementById('sql');
const skillsArr = [htmlSkill, cssSkill, jsSkill, reactSkill, pythonSkill, gitSkill, nodeSkill, sqlSkill];

const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
     })
})

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el))

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