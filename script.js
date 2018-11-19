var windowH = 0;
var windowW = 0;
var tileSize = 30;
var currentMap = [0,0];
function takeWindow () {
    windowH = window.innerHeight;
    windowW = window.innerWidth;
}
function refresh () {
    takeWindow();
    $("#disScreen").css("width",windowW);
    $("#disScreen").css("height",windowH);
    if (windowH<windowW) {
        tileSize=windowH/16;
    } else {
        tileSize=windowW/16;
    }
    updateArea();
}
function tileClass(character) {
    var type = "undefined";
    if (character===".") {
        type = "mapTileWall";
    }
    return type;
}
var maps = [
    [
        [".",".",".","."],
        [".","a",".","."],
        [".",".",".","."]
    ]    
];
var charX = 0;
var charY = 0;
function updateArea () {
    var setMap = maps[currentMap[0]];
    $("#area").empty();
    for (var row = 0; row < setMap.length; row++) {
        var mapTileRow = $("<div>").addClass("mapRow");
        for (var column = 0; column < setMap[row].length; column++) {
            var mapTile = setMap[row][column];
            var className = tileClass(setMap[row][column]);
            let $tile = $("<div>").addClass(className);
            $tile.css("width", tileSize);
            $tile.css("height", tileSize);
            $tile.css("background-size", tileSize + "px " + tileSize + "px");
            $tile.offset({top: row * tileSize, left: column * tileSize});
            mapTileRow.append($tile);
        }
        $("#area").append(mapTileRow);
    }
    $("#slime").css("width",tileSize);
    $("#slime").offset({top: charY * tileSize, left: charX * tileSize});
}
var rotation = -1;
var keys = {};
var slimy = [
    [
        "/firippu textures/sprites/b/slimy/b_slimy_stand1.png",
        "/firippu textures/sprites/b/slimy/b_slimy_walk1_1.png",
        "/firippu textures/sprites/b/slimy/b_slimy_stand1.png",
        "/firippu textures/sprites/b/slimy/b_slimy_walk1_2.png"
    ],
    [
        "/firippu textures/sprites/b/slimy/b_slimy_stand2.png",
        "/firippu textures/sprites/b/slimy/b_slimy_walk2_1.png",
        "/firippu textures/sprites/b/slimy/b_slimy_stand2.png",
        "/firippu textures/sprites/b/slimy/b_slimy_walk2_2.png"
    ],
    [
        "/firippu textures/sprites/b/slimy/b_slimy_stand3.png",
        "/firippu textures/sprites/b/slimy/b_slimy_walk3_1.png",
        "/firippu textures/sprites/b/slimy/b_slimy_stand3.png",
        "/firippu textures/sprites/b/slimy/b_slimy_walk3_2.png"
    ],
    [
        "/firippu textures/sprites/b/slimy/b_slimy_stand4.png",
        "/firippu textures/sprites/b/slimy/b_slimy_walk4_1.png",
        "/firippu textures/sprites/b/slimy/b_slimy_stand4.png",
        "/firippu textures/sprites/b/slimy/b_slimy_walk4_2.png"
    ]
];
$(document).keydown(function(e){
    keys[e.key] = true;
});

$(document).keyup(function (e) {
    delete keys[e.key];
});
var walkpoint = 0;
var walkframe=0;
setInterval(function(){
    refresh();
    if ($.isEmptyObject(keys)) {
    } else {
        if (keys.f) {
            rotation--;
        }
        if (keys.j) {
            rotation++;
        }
        if (keys.s) {
            $("#slime").attr("src",slimy[0][walkframe%4]);
            walkpoint++;
            charY=charY+.2;
        }
        if (keys.a) {
            $("#slime").attr("src",slimy[1][walkframe%4]);
            walkpoint++;
            charX=charX-.2;
        }
        if (keys.w) {
            $("#slime").attr("src",slimy[2][walkframe%4]);
            walkpoint++;
            charY=charY-.2;
        }
        if (keys.d) {
            $("#slime").attr("src",slimy[3][walkframe%4]);
            walkpoint++;
            charX=charX+.2;
        }
    }
    if (walkpoint>=3) {
        walkpoint=walkpoint-3;
        walkframe++;
        console.log(walkframe%4);
    }
    var deg = ((rotation+1)*90).toString();
    $("#rune").css("transform","rotate("+deg+"deg)");
},100);