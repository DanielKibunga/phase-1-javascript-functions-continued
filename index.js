// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

console.log(saturdayFun());
console.log(saturdayFun("watch movies"));

console.log(mondayWork());
console.log(mondayWork("work from home"));

const highlight = wrapAdjective("||");
console.log(highlight("a genius"));
