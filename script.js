/* global $ */

var windowH = 0;
var windowW = 0;
var tileSize = 30;
var currentMap = [0,0];
var maps = [
    //list of maps
    [
        //map components
        //0-map layer 1
        //1-map layer 2
        //2-map hitbox
        //3-map events
        [
            [ ".", "w", "b", "b", "b", "b", "b", "w", ".", ".", ".", ".", ".", ".", ".", "." ],
            [ ".", "w", "b", "b", "b", "b", "b", "w", ".", ".", ".", ".", ".", ".", ".", "." ],
            [ ".", "w", "f", "f", "f", "f", "f", "w", "b", "b", "s", "b", "b", "w", ".", "." ],
            [ ".", "w", "f", "f", "f", "f", "f", "w", "b", "b", "b", "b", "b", "w", ".", "." ],
            [ ".", "w", "f", "f", "f", "f", "f", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
            [ ".", "w", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "w", ".", "." ],
            [ ".", "w", "f", "f", "f", "f", "f", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
            [ ".", ".", ".", ".", ".", ".", ".", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
            [ ".", ".", ".", ".", ".", ".", ".", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
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
            [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "o", ".", ".", ".", ".", "." ],
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
    ]    
];
var setMapCollision;
var setMapInteration;

var rotation = -1;
var keys = {};
var characterSprites = [
    //Slimy
    [
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
    ],
    [
        [
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand1.png",
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand1.png",
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand1.png",
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand1.png"
        ],
        [
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand2.png",
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand2.png",
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand2.png",
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand2.png"
        ],
        [
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand3.png",
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand3.png",
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand3.png",
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand3.png"
        ],
        [
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand4.png",
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand4.png",
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand4.png",
            "/firippu textures/sprites/b/kaiwro/b_kaiwro_stand4.png"
        ]
    ]
];
var currentChar = 1;
var charX = 0;
var charY = 0;
var walkpoint = 0;
var walkframe=0;
var currentMode = 1;

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
    if (character==="") {
    } else {
        if (character===".") {
            type = "undefined";
        }
        if (character==="f") {
            type = "mapTileFloor";
        }
        if (character==="w") {
            type = "mapTileWall";
        }
        if (character==="b") {
            type = "mapTileWallBack";
        }
        if (character==="s") {
            type = "mapTileSky";
        }
        if (character==="o") {
            type = "mapTileWindow";
        }
    }
    return type;
}
function renderTiles (map,layer) {
    for (var row = 0; row < map.length; row++) {
        var mapTileRow = $("<div>").addClass("mapRow");
        for (var column = 0; column < map[row].length; column++) {
            var className = tileClass(map[row][column]);
            let $tile = $("<div>").addClass(layer).addClass(className);
            $tile.css("width", tileSize);
            $tile.css("height", tileSize);
            $tile.css("background-size", tileSize + "px " + tileSize + "px");
            $tile.offset({top: row * tileSize, left: column * tileSize});
            mapTileRow.append($tile);
        }
        $("#area").append(mapTileRow);
    }
}
function updateArea () {
    var setMap1 = maps[currentMap[0]][0];
    var setMap2 = maps[currentMap[0]][1];
    setMapCollision = maps[currentMap[0]][2];
    setMapInteration = maps[currentMap[0]][3];
    $("#area").empty();
    
    renderTiles(setMap1,"mapTile1");
    renderTiles(setMap2,"mapTile2");
    
    $("#char").css("width",tileSize);
    $("#char").offset({top: charY * tileSize, left: charX * tileSize});
}
$(document).keydown(function(e){
    keys[e.key] = true;
});

$(document).keyup(function (e) {
    delete keys[e.key];
});
setInterval(function(){
    refresh();
    if ($.isEmptyObject(keys)) {
    } else {
        if (keys.m) {
            currentMode++;
            if (currentMode>2) {
                currentMode=0;
            }
        }
        if (currentMode===1) {
            if (keys.s) {
                $("#char").attr("src",characterSprites[currentChar][0][walkframe%4]);
                walkpoint++;
                charY=charY+.2;
            }
            if (keys.a) {
                $("#char").attr("src",characterSprites[currentChar][1][walkframe%4]);
                walkpoint++;
                charX=charX-.2;
            }
            if (keys.w) {
                $("#char").attr("src",characterSprites[currentChar][2][walkframe%4]);
                walkpoint++;
                charY=charY-.2;
            }
            if (keys.d) {
                $("#char").attr("src",characterSprites[currentChar][3][walkframe%4]);
                walkpoint++;
                charX=charX+.2;
            }
        } else if (currentMode===2) {
            if (keys.f) {
                rotation--;
            }
            if (keys.j) {
                rotation++;
            }
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