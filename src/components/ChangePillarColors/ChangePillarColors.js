import sleep from "../Sleep/sleep";

export const ChangeColor = (index) => {
    var pillars = document.querySelectorAll('.pillar');
    pillars.forEach(pillar => pillar.style.backgroundColor = 'white')
    pillars[index].style.backgroundColor = '#0be345';
}

export const MakeAllWhite = () => {
    var pillars = document.querySelectorAll('.pillar');
    pillars.forEach(pillar => pillar.style.backgroundColor = 'white')
}

export const FinalCheck = async () => {
    await sleep(400);
    
    var pillars = Array.from(document.querySelectorAll('.pillar'));
    var len = pillars.length;
    for(var i=0;i<len;++i) {
        await sleep(100);
        pillars[i].style.backgroundColor = '#0be345';
    }
}