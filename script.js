let htmlSkill = document.getElementById('html');
let cssSkill = document.getElementById('css');
let jsSkill = document.getElementById('js');
let tsSkill = document.getElementById('ts');
let reactSkill = document.getElementById('react');
let nextSkill = document.getElementById('nextjs');
let nodeSkill = document.getElementById("node");
let clerkSkill = document.getElementById('clerk');
let pythonSkill = document.getElementById('python');
let sqlSkill = document.getElementById('sql');
let convexSkill = document.getElementById('convex')
let gitSkill = document.getElementById('git');
let githubSkill = document.getElementById('github');
let tensorFlow = document.getElementById('tensorflow');
let tailwindCSS = document.getElementById("tailwind");
let java = document.getElementById("java")
let skillsArr = [htmlSkill, cssSkill, jsSkill, tsSkill, reactSkill, nextSkill, nodeSkill, clerkSkill, sqlSkill, convexSkill, pythonSkill, gitSkill, githubSkill, tensorFlow, tailwindCSS, java];

const tabs = document.querySelectorAll('.btn');
const all_contents = document.querySelectorAll('.content');

const possibleHashes = ['#home', '#about-me', '#skills', '#projects', '#contact']

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

console.log(window.location.hash)

if (possibleHashes.includes(window.location.hash)) {
    const hash = window.location.hash;
    const hashId = hash.replace('#', '');
    const tab = document.getElementById(`${hashId}-btn`);
    tab.click();
} else {
    tabs[0].click();
}