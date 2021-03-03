export const ChangeColor = (index) => {
    var pillars = document.querySelectorAll('.pillar');
    pillars.forEach(pillar => pillar.style.backgroundColor = 'white')
    pillars[index].style.backgroundColor = '#0be345';
}

export const MakeAllWhite = () => {
    var pillars = document.querySelectorAll('.pillar');
    pillars.forEach(pillar => pillar.style.backgroundColor = 'white')
}