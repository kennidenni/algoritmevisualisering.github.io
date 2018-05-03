///<reference path="adjacencyList.ts"/>
///<reference path="graphUI.ts"/>
var nodes = 0;
var MAX_NODES = 8;
var edges = 0;
function graphUIClicked(x, y) {
    if (nodes < MAX_NODES) {
        if (!checkOverlap(x, y)) {
            addNode(nodes, x, y);
            addNewAdjList(nodes);
            nodes++;
        }
    }
}
function twoNodesClicked(n1, n2) {
    addEdgeToAdjList(n1, n2);
    addEdge(edges++, n1, n2);
}
function resetAll() {
    resetGraphUI();
    resetAdjList();
    removeVisitedArray();
    manager.clear();
    nodes = 0;
    edges = 0;
    $("#dfs").html("DFS");
    $("#bfs").html("BFS");
    algoRunning = "";
}
function resetForNewAlgo() {
    manager.clear();
    $("#queueUI").find("div.nodeUI").each(function () {
        $(this).remove();
    });
    for (var i = 0; i < nodes; i++) {
        $("#edge" + i).css({ "stroke": "rgb(0, 0, 0)", "stroke-width": "4" });
    }
    for (var i = 0; i < nodes; i++) {
        $("#node" + i).css({ "background-color": "white", "border-color": "black" });
    }
    deselectAllNodes();
    removeVisitedArray();
    for (var i = 0; i < nodes; i++) {
        color.push(false);
    }
}
function checkOverlap(x, y) {
    var overlap = false;
    $("#graphUI").children().each(function () {
        if (this.id !== "edgeSvg") {
            var pos = $("#" + this.id).position();
            if (pos.left - 35 < x && pos.left + 115 > x && pos.top - 35 < y && pos.top + 115 > y) {
                overlap = true;
            }
        }
    });
    return overlap;
}
/*************************************************************** */
/*******************  Example Graphs  ****************************/
/*************************************************************** */
function exampleGraphStar() {
    resetAll();
    graphUIClicked(287, 230);
    graphUIClicked(73, 98);
    graphUIClicked(266, 49);
    graphUIClicked(470, 82);
    graphUIClicked(573, 290);
    graphUIClicked(472, 464);
    graphUIClicked(201, 485);
    graphUIClicked(49, 325);
    twoNodesClicked(0, 1);
    graphUIClicked(298, 227);
    twoNodesClicked(2, 0);
    graphUIClicked(281, 235);
    twoNodesClicked(0, 3);
    twoNodesClicked(0, 4);
    twoNodesClicked(0, 5);
    twoNodesClicked(6, 0);
    twoNodesClicked(7, 0);
    instantCollapseAll();
}
function exampleGraphAllConnected() {
    resetAll();
    graphUIClicked(66, 71);
    graphUIClicked(337, 158);
    graphUIClicked(571, 64);
    graphUIClicked(77, 278);
    graphUIClicked(233, 306);
    graphUIClicked(420, 303);
    graphUIClicked(437, 454);
    graphUIClicked(134, 437);
    graphUIClicked(577, 184);
    twoNodesClicked(0, 1);
    twoNodesClicked(2, 1);
    twoNodesClicked(2, 0);
    twoNodesClicked(3, 0);
    twoNodesClicked(0, 4);
    twoNodesClicked(5, 0);
    twoNodesClicked(7, 0);
    twoNodesClicked(6, 0);
    twoNodesClicked(3, 2);
    twoNodesClicked(3, 1);
    twoNodesClicked(4, 3);
    twoNodesClicked(5, 3);
    twoNodesClicked(7, 3);
    twoNodesClicked(6, 3);
    twoNodesClicked(1, 5);
    twoNodesClicked(4, 1);
    twoNodesClicked(3, 1);
    twoNodesClicked(7, 1);
    twoNodesClicked(6, 1);
    twoNodesClicked(5, 2);
    twoNodesClicked(4, 5);
    twoNodesClicked(7, 5);
    twoNodesClicked(6, 5);
    twoNodesClicked(6, 4);
    twoNodesClicked(7, 4);
    twoNodesClicked(2, 7);
    twoNodesClicked(2, 6);
    twoNodesClicked(7, 6);
    twoNodesClicked(2, 4);
    instantCollapseAll();
}
