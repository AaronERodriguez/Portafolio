let htmlSkill = document.getElementById('html');
let cssSkill = document.getElementById('css');
let jsSkill = document.getElementById('js');
let reactSkill = document.getElementById('react');
let pythonSkill = document.getElementById('python');
let gitSkill = document.getElementById('git');
let skillsArr = [htmlSkill, cssSkill, jsSkill, reactSkill, pythonSkill, gitSkill];

const tabs = document.querySelectorAll('.btn');
const all_contents = document.querySelectorAll('.content');



tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        });
        tab.classList.add('active');
        
        all_contents.forEach(content => {content.classList.remove('active')})
        all_contents[index].classList.add('active')
    })
})

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

if (window.location.hash) {
    const hash = window.location.hash;
    const hashId = hash.replace('#', '');
    const tab = document.getElementById(`${hashId}-btn`);
    tab.click();
} else {
    console.log(tabs[0])
}