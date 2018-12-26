/* global $ */
// //stuff
// var windowH = 0;
// var windowW = 0;
// var tileSize = 30;
// var keys = {};
// var currentMap = [
//     [
//         [ "w", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "w", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "w", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ]
//     ],
//     [
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ]
//     ],
//     [
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ]
//     ],
//     [
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
//         [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ]
//     ],
//     [
//     ]
// ];
// function takeWindow () {
//     windowH = window.innerHeight;
//     windowW = window.innerWidth;
// }
// function refresh () {
//     takeWindow();
//     $("#disScreen").css("width",windowW);
//     $("#disScreen").css("height",windowH);
//     if (windowH<windowW) {
//         tileSize=windowH/32;
//     } else {
//         tileSize=windowW/32;
//     }
// }
// function tileClass(character) {
//     var type = "undefined";
//     if (character==="") {
//     } else {
//         if (character===".") {
//             type = "mapTileFloor";
//         }
//         if (character==="f") {
//             type = "mapTileFloor";
//         }
//         if (character==="w") {
//             type = "mapTileWall";
//         }
//         if (character==="b") {
//             type = "mapTileWallBack";
//         }
//         if (character==="s") {
//             type = "mapTileSky";
//         }
//         if (character==="o") {
//             type = "mapTileWindow";
//         }
//     }
//     return type;
// }
// function renderTiles (layer) {
//     // for (var row = 0; row < map.length; row++) {
//     //     var mapTileRow = $("<div>").addClass("mapRow");
//     //     for (var column = 0; column < map[row].length; column++) {
//     //         var className = tileClass(map[row][column]);
//     //         let $tile = $("<div>").addClass(layer).addClass(className);
//     //         $tile.attr('id', row+','+column);
//     //         $tile.css("width", tileSize);
//     //         $tile.css("height", tileSize);
//     //         $tile.css("background-size", tileSize + "px " + tileSize + "px");
//     //         $tile.offset({top: row * tileSize, left: column * tileSize});
//     //         $tile.click(function(){
//     //             let tile = $(this);
//     //             let row = $(this).attr("id").split(',')[0];
//     //             let column = $(this).attr("id").split(',')[1];
//     //         });
//     //         mapTileRow.append($tile);
//     //     }
//     //     $("#area").append(mapTileRow);
//     // }
//     $("#area").empty();
//     for (var row = 0; row < currentMap.length; row++) {
//         var mapTileRow = $("<div>").addClass("mapRow");
//         for (var column = 0; column < currentMap[layer][row].length; column++) {
//             let className = tileClass(currentMap[layer][row][column]);
//             let $tile = $("<div>").addClass(className).addClass(layer);
//             $tile.attr("id",row+","+column);
//             $tile.css("width",tileSize);
//             $tile.css("height",tileSize);
//             $tile.css("background-size",tileSize+"px "+tileSize+"px");
//             $tile.offset({top:row*tileSize,left:column*tileSize});
//             $tile.click(function(){
//                 let tile = $(this);
//                 let row = $(this).attr("id").split(",")[0];
//                 let column = $(this).attr("id").split(",")[1];
//             });
//             mapTileRow.append($tile);
//         }
//         $("#area").append(mapTileRow);
//     }
// }
// $(document).keydown(function(e){
//     keys[e.key] = true;
// });

// $(document).keyup(function (e) {
//     delete keys[e.key];
// });
// renderTiles();
// setInterval(function(){
//     renderTiles(0);
//     refresh();
// },100);
// setInterval(function(){
//     if ($.isEmptyObject(keys)) {
//     } else {
        
//     }
// },100);
var map = [
    [
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ]
    ],
    [
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
        [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ]
    ]
];
var brushBrush = [".","w","b","d","n","o","f","g","h","j","q","e","r","t","y","u","i","p","[","]","a","k","l",";","z","x","c","v","m",",","?","/"];
var brushTypes = ["undefined","mapTileWall","mapTileWallBack","mapTileSkyDay","mapTileSkyNight","mapTileWindow","mapTileWoodFloor1","mapTileWoodFloor2","mapTileWoodFloor3","mapTileWoodFloor4","mapTileFloorGrass1","mapTileFloorGrass2","mapTileFloorGrass3","mapTileFloorGrass4","mapTileFloorGrass5","mapTileFloorGrass6","mapTileFloorGrass7","mapTilePathGrass1","mapTilePathGrass2","mapTilePathGrass3","mapTilePathGrass4","mapTilePathGrass5","mapTilePathGrass6","mapTilePathGrass7","mapTilePathGrass8","mapTilePathGrass9","mapTilePathGrass10","mapTilePathGrass11","mapTilePathGrass12","mapTilePathGrass13","mapTilePathGrass14","mapTilePathGrass15"];
var brushCycle = 0;
var activeBrush = ".";
function mapClass(character) {
    var type = "undefined";
    if (character===".") {
        type = "undefined";
    }
    if (character==="w") {
        type = "mapTileWall";
    }
    if (character==="b") {
        type = "mapTileWallBack";
    }
    if (character==="d") {
        type = "mapTileSkyDay";
    }
    if (character==="n") {
        type = "mapTileSkyNight";
    }
    if (character==="o") {
        type = "mapTileWindow";
    }
    if (character==="f") {
        type = "mapTileWoodFloor1";
    }
    if (character==="g") {
        type = "mapTileWoodFloor2";
    }
    if (character==="h") {
        type = "mapTileWoodFloor3";
    }
    if (character==="j") {
        type = "mapTileWoodFloor4";
    }
    if (character==="q") {
        type = "mapTileFloorGrass1";
    }
    if (character==="e") {
        type = "mapTileFloorGrass2";
    }
    if (character==="r") {
        type = "mapTileFloorGrass3";
    }
    if (character==="t") {
        type = "mapTileFloorGrass4";
    }
    if (character==="y") {
        type = "mapTileFloorGrass5";
    }
    if (character==="u") {
        type = "mapTileFloorGrass6";
    }
    if (character==="i") {
        type = "mapTileFloorGrass7";
    }
    if (character==="p") {
        type = "mapTilePathGrass1";
    }
    if (character==="[") {
        type = "mapTilePathGrass2";
    }
    if (character==="]") {
        type = "mapTilePathGrass3";
    }
    if (character==="a") {
        type = "mapTilePathGrass4";
    }
    if (character==="k") {
        type = "mapTilePathGrass5";
    }
    if (character==="l") {
        type = "mapTilePathGrass6";
    }
    if (character===";") {
        type = "mapTilePathGrass7";
    }
    if (character==="z") {
        type = "mapTilePathGrass8";
    }
    if (character==="x") {
        type = "mapTilePathGrass9";
    }
    if (character==="c") {
        type = "mapTilePathGrass10";
    }
    if (character==="v") {
        type = "mapTilePathGrass11";
    }
    if (character==="m") {
        type = "mapTilePathGrass12";
    }
    if (character===",") {
        type = "mapTilePathGrass13";
    }
    if (character==="?") {
        type = "mapTilePathGrass14";
    }
    if (character==="/") {
        type = "mapTilePathGrass15";
    }
    return type;
}
function drawmap() {
    $("#display").empty();
    for (var row = 0; row < map[0].length; row++) {
        drawRow(row);
    }
}
function drawRow(row) {
    var div = $("<div>").addClass("mapRow");
            
        for (var column = 0; column < map[0][row].length; column++) {
            var drawCell = drawColumn(row,column);
            div.append(drawCell);
        }
    $("#display").append(div);    
}
function drawColumn(row,column) {
    var mapCell = map[0][row][column];
    var className = mapClass(map[0][row][column]);
    var cell = $("<span>").addClass(className).addClass("mapCell").click(function(){
        map[0][row][column]=activeBrush;
        drawmap();
    });
    return cell;
}
drawmap();
$("#chooseBrushes").click(function(){
    // brushCycle++;
    // var n = brushCycle%brushBrush.length;
    // activeBrush=brushBrush[n];
    var chooseBrushesSelected = $("#chooseBrushes").val();
    // var icon;
    for (var i=0;i<brushTypes.length;i++) {
        if (chooseBrushesSelected===brushTypes[i]) {
            activeBrush=brushBrush[i];
            // icon = $("<div>").addClass(brushTypes[i]);
        }
    }
    $("#icon").empty();
    $("#tellBrush").text(activeBrush);
    $("#tellType").text(chooseBrushesSelected);
    var icon = $("<div>").addClass(chooseBrushesSelected).addClass("mapCell");
    $("#icon").append(icon);
});
$("#addCustom").click(function(){
    var customBrush = $("#customBrush").val();
    if (customBrush !== "") {
        activeBrush=customBrush;
        $("#tellBrush").text(activeBrush);
        $("#tellType").text("Custom");
        $("#icon").empty();
        var icon = $("<div>").addClass("undefined");
        $("#icon").append(icon);
    } else {
        alert("invalid character");    
    }
});
$("#export").click(function(){
    $("#controls").hide();
    var mapString = map[0];
    for (var i=0;i<mapString.length;i++) {
        mapString[i]=mapString[i].join('');
    }
    mapString=mapString.join('\n');
    $("#mapString").show().text(mapString);
});
$("#import").click(function(){
    var mapString = $("#mapString").val();
    map[0] = mapString.split("\n").map(row => row.split(""));
    drawmap();
});