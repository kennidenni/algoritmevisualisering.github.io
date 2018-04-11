/**
 * File created by Øyvind Skeie Liland on 15.03.18
 **/
///<reference path="methods.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HeapSort = /** @class */ (function (_super) {
    __extends(HeapSort, _super);
    function HeapSort(size) {
        var _this = _super.call(this, size) || this;
        _this.insertElems(size);
        _this.sortIndex = _this.currIndex - 1;
        return _this;
    }
    HeapSort.prototype.sort = function () {
        for (var i = this.sortIndex; i >= 0; i--) {
            control.setArrow(this.sortIndex);
            this.remove();
        }
    };
    HeapSort.prototype.remove = function () {
        // Remove root element, set last element to root and start frontendevents
        var oldVal = this.array[0];
        control.sortHighlightTwoNodes(0, this.sortIndex, "orange");
        control.setSortValAndDeselect(this.sortIndex, this.array[0]);
        _super.prototype.remove.call(this);
        control.highlightSortElem(this.sortIndex--, "green");
    };
    HeapSort.prototype.insertElems = function (size) {
        for (var i = 0; i < size; i++) {
            $("#sortArrayUL").append("<li id='sortArrayElem" + i + "'><div class='index'>" + i + "</div><div class='content' id='sortArrayContent" + i + "'>" + " " + "</div></li>");
        }
        // Spreading elements horizontally
        $("document").ready(function () {
            for (var i = 0; i < size; i++) {
                var left = (i * 70) + "px";
                $("#sortArrayElem" + i).animate({ left: left }, 1000);
            }
            var arrayWidth = ((size - 1) * 70) + 50;
            $("#sortArrayUL").animate({ left: (-arrayWidth / 2 + 20) + "px" }, 500); // +20? Ul is default 40px -> 40/2 = 20. Dont touch.
        });
    };
    HeapSort.prototype.getName = function () {
        return "HeapSort";
    };
    return HeapSort;
}(MaxHeap));
