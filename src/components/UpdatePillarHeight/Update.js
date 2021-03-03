function UpdatePillars(array) {
    var i = 0;
    var pillars = Array.from(document.getElementsByClassName('pillar'));
    pillars.forEach(pillar => {
        pillar.style.height = `${array[i]}px`;
        ++i;
    });
}

export default UpdatePillars;