///<reference path="adjacencyList.ts"/>
///<reference path="graphUI.ts"/>
///<reference path="graphStructureController.ts"/>
///<reference path="eventManager.ts"/>

let arrayElements: any = [];
let array: number[];

class ArrayElement {
    left: number;
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    animateLeft(left: number, animTime: number, arrayId: string) {
        this.left = left;
        $("#" + arrayId + this.id).animate({left: left}, animTime);
    }

    changeId(newId: number, arrayId: string) {
        $("#" + arrayId + this.id).stop();
        $("#" + arrayId + this.id).attr("id", arrayId + newId);
        this.id = newId;
    }

    swap(otherElement: ArrayElement, arrayId: string, animTime: number) {
        // Swap Id
        let thisId = this.id;
        let otherId = otherElement.id;
        this.changeId(100, arrayId); // So it doesnt get selected when selecting the other element
        otherElement.changeId(thisId, arrayId);
        this.changeId(otherId, arrayId);

        // Swap position
        let thisLeft = this.left;
        this.animateLeft(otherElement.left, animTime, arrayId);
        otherElement.animateLeft(thisLeft, animTime, arrayId);
    }
}

function getArrayElement(id: number) {
    if (id < 0 || id >= arrayElements.length) {
        console.log("Illegal argument for getArrayElement: " + id);
        return;
    }
    return arrayElements.filter(function (elem: ArrayElement) {
        return elem.id == id;
    })[0];
}

function removeVisitedArray() {
    // Remove elements
    $("#visitedUL").html("");
}

function setInitialArray() {
    let arr = [];

    // Remove elements
    removeVisitedArray();

    $("#visitedUL").append("<p id='visitedText' class='visited-text'>Visited:</p>");
    //$("#visitedUL").append("<img id='leftBracket' class='bracket' src='../assets/square_left.png'/>");

    for (let i = 0; i < nodes; i++) {
        $("#visitedUL").append("<li id='insElemNr" + i + "'><div>" + "F</div></li>");
        arr.push('F');
        $("#insElemNr" + i).prepend("<p id='ind" + i + "'>" + i + "</p>");
    }

    //$("#visitedUL").append("<img id='rightBracket' class='bracket' src='../assets/square_right.png'/>");
}

function centerElements() {
    let arrayWidth = ((array.length - 1) * 85) + 50;
    let left = -arrayWidth / 2 + 20;
    $("#indices").animate({left: (left) + "px"}, 500);
    $("#visitedUL").animate({left: left + "px"}, 500); // +20? Ul is default 40px -> 40/2 = 20. Don't touch.
    //$("svg#k-svg").animate({left: (left-7) + "px"}, 500);
    $("#rightBracket").animate({left: (arrayWidth + 15) + "px"}, 600);
}