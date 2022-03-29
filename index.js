function setup() {
    Array.from(document.getElementsByClassName("die")).map(dieClick);
}

let rolling = {}

let nums = ["zero", "one", "two", "three", "four", "five", "six"];

function dieClick(dom) {
    if (dom.id in rolling) {
        return;
    }
    rolling[dom.id] = true;
    roll(dom, 5, () => {
        dom.className = "die " + nums[parseInt(dom.innerText)];
        delete rolling[dom.id];
    });
}

function roll(dom, roll_count, done) {
    if (roll_count == 0) {
        done();
        return;
    }
    
    dom.className = "die " + nums[parseInt(dom.innerText)];
    dom.innerText = Math.ceil(Math.random() * 6);
    setTimeout(() => {
        roll(dom, roll_count - 1, done);
    }, 100);
}
