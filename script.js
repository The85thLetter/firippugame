/* global $ */
//stuff
var windowH = 0;
var windowW = 0;
var tileSize = 0;
var runeSize = {
    sizeOne:0,
    sizeTwo:0,
    sizeThree:0
};
var runeRotation = {
    a:0,
    b:0,
    c:0,
    d:0,
    e:0,
    f:0,
    g:0,
    h:0
};
var runeRotateCooldown = {
    a:0,
    b:0,
    c:0,
    d:0,
    e:0,
    f:0,
    g:0,
    h:0
};
var runeNumber = 1;
var currentMap = [0,0];
var maps = [
    //list of areas
    [
        //list of maps
        [
        //map components
        //0-map layer 1
        //1-map layer 2
        //2-map hitbox
        //3-map events
        //4-event reader
            [
                [ ".", "w", "b", "b", "b", "b", "b", "w", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", "w", "b", "b", "b", "b", "b", "w", "b", "b", "b", "b", "b", "w", ".", "." ],
                [ ".", "w", "f", "f", "f", "f", "f", "w", "b", "b", "d", "b", "b", "w", ".", "." ],
                [ ".", "w", "f", "f", "f", "f", "f", "w", "b", "b", "b", "b", "b", "w", ".", "." ],
                [ ".", "w", "f", "f", "f", "f", "f", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
                [ ".", "w", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "w", ".", "." ],
                [ ".", "w", "f", "f", "f", "f", "f", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "f", ".", ".", ".", "." ],
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
            ],
            [
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", "x", "x", "x", "x", "x", "x", "x", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", "x", ".", ".", ".", ".", ".", "x", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", "x", ".", ".", ".", ".", ".", "x", "x", "x", "x", "x", "x", "x", ".", "." ],
                [ ".", "x", ".", ".", ".", ".", ".", "x", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", "x", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", "x", ".", ".", ".", ".", ".", "x", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", "x", "x", "x", "x", "x", "x", "x", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "x", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "x", "x", "x", "x", ".", "x", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ]
            ],
            [
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", "x", "x", "x", "x", "x", "x", "x", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", "x", ".", ".", ".", ".", ".", "x", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", "x", ".", ".", ".", ".", ".", "x", "x", "x", "x", "x", "x", "x", ".", "." ],
                [ ".", "x", ".", ".", ".", ".", ".", "x", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", "x", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", "x", ".", ".", ".", ".", ".", "x", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", "x", "x", "x", "x", "x", "x", "x", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "x", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "x", "x", "x", "x", "a", "x", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "a", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ]
            ],
            [
                ["a","room",[1,3,2]],
                ["b","text",1]
            ]
        ],
        [
            [
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", "w", "f", "w", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", "w", "f", "w", ".", ".", "w", "b", "b", "b", "b", "b", "w", ".", "." ],
                [ ".", ".", "w", "f", "w", ".", ".", "w", "b", "b", "b", "b", "b", "w", ".", "." ],
                [ ".", ".", "w", "f", "w", "b", "b", "w", "b", "b", "b", "b", "b", "w", ".", "." ],
                [ ".", ".", "w", "f", "w", "b", "b", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
                [ ".", ".", "w", "f", "w", "b", "b", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
                [ ".", ".", "w", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "w", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
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
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "o", ".", ".", "." ],
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
                [ ".", ".", ".", "a", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", "x", "f", "x", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", "x", "f", "x", ".", ".", "x", "b", "b", "b", "b", "b", "w", ".", "." ],
                [ ".", ".", "x", "f", "x", ".", ".", "x", "b", "b", "b", "b", "b", "w", ".", "." ],
                [ ".", ".", "x", "f", "x", "b", "b", "x", "x", "x", "x", "x", "x", "x", ".", "." ],
                [ ".", ".", "x", "f", "x", "b", "b", "x", "f", "f", "f", "f", "f", "x", ".", "." ],
                [ ".", ".", "x", "f", "x", "x", "x", "x", "f", "f", "f", "f", "f", "x", ".", "." ],
                [ ".", ".", "x", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "x", ".", "." ],
                [ ".", ".", "x", "x", "x", "x", "x", "x", "f", "f", "f", "f", "f", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "x", "f", "f", "f", "f", "f", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "x", "x", "x", "x", "x", "x", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ]
            ],
            [
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", "c", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "b", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ]
            ],
            [
                ["c","room",[-1,4,4]],
                ["b","mode",1]
            ]
        ]
    ]
];
var setMapCollision = [];
var setMapInteraction;
var setMapEventReader;

var keys = {};
var characterSprites = [
    //Slimy
    [
        [
            "./firippu textures/sprites/b/slimy/b_slimy_stand1.png",
            "./firippu textures/sprites/b/slimy/b_slimy_walk1_1.png",
            "./firippu textures/sprites/b/slimy/b_slimy_stand1.png",
            "./firippu textures/sprites/b/slimy/b_slimy_walk1_2.png"
        ],
        [
            "./firippu textures/sprites/b/slimy/b_slimy_stand2.png",
            "./firippu textures/sprites/b/slimy/b_slimy_walk2_1.png",
            "./firippu textures/sprites/b/slimy/b_slimy_stand2.png",
            "./firippu textures/sprites/b/slimy/b_slimy_walk2_2.png"
        ],
        [
            "./firippu textures/sprites/b/slimy/b_slimy_stand3.png",
            "./firippu textures/sprites/b/slimy/b_slimy_walk3_1.png",
            "./firippu textures/sprites/b/slimy/b_slimy_stand3.png",
            "./firippu textures/sprites/b/slimy/b_slimy_walk3_2.png"
        ],
        [
            "./firippu textures/sprites/b/slimy/b_slimy_stand4.png",
            "./firippu textures/sprites/b/slimy/b_slimy_walk4_1.png",
            "./firippu textures/sprites/b/slimy/b_slimy_stand4.png",
            "./firippu textures/sprites/b/slimy/b_slimy_walk4_2.png"
        ]
    ],
    //kaiwro
    [
        [
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand1.png",
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand1.png",
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand1.png",
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand1.png"
        ],
        [
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand2.png",
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand2.png",
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand2.png",
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand2.png"
        ],
        [
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand3.png",
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand3.png",
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand3.png",
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand3.png"
        ],
        [
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand4.png",
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand4.png",
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand4.png",
            "./firippu textures/sprites/b/kaiwro/b_kaiwro_stand4.png"
        ]
    ]
];
var char = {
    charNo: 0,
    x: 5,
    y: 5,
    sprHeight: 2,
    sprWidth: 1,
    boxCenter: [0,1],
    area: 0,
    room: 0,
};
var walkpoint = 0;
var walkframe=0;
var currentMode = 0;

function takeWindow () {
    var newWindowH = window.innerHeight;
    var newWindowW = window.innerWidth;
    return [newWindowH,newWindowW];
}
function refresh () {
    var newWindow = takeWindow();
    windowH = newWindow[0];
    windowW = newWindow[1];
    $("#disScreen").css("width",windowW);
    $("#disScreen").css("height",windowH);
    updateArea();
    updateCombat();
}
function tileClass(character) {
    var type = "undefined";
    if (character==="") {
    } else {
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
    }
    return type;
}
function renderTiles (map,layer) {
    for (var row = 0; row < map.length; row++) {
        var mapTileRow = $("<div>").addClass("mapRow");
        for (var column = 0; column < map[row].length; column++) {
            var className = tileClass(map[row][column]);
            let $tile = $("<div>").addClass(layer).addClass(className);
            $tile.attr('id', row+','+column);
            $tile.css("width", tileSize);
            $tile.css("height", tileSize);
            $tile.css("background-size", tileSize + "px " + tileSize + "px");
            $tile.offset({top: row * tileSize, left: column * tileSize});
            $tile.click(function(){
                let tile = $(this);
                let row = $(this).attr("id").split(',')[0];
                let column = $(this).attr("id").split(',')[1];
            });
            mapTileRow.append($tile);
        }
        $("#area").append(mapTileRow);
    }
}
function updateCombat () {
    if (windowH<windowW) {
        runeSize.sizeOne=windowH/3;
        runeSize.sizeTwo=windowH/6;
        runeSize.sizeThree=windowH/8;
    } else {
        runeSize.sizeOne=windowW/3;
        runeSize.sizeTwo=windowW/6;
        runeSize.sizeThree=windowW/8;
    }
    var currentRuneSize = runeSize.sizeOne;
    //eight different displays, each with an increasing amount of runes
    //the first one uses size one
        //Screen. Half of screen is where half of rune should be. subtract half a rune from half a screen to find starting distance.
        $(".rune").hide();
        $("#rune1").show();
        $("#rune1").offset({top: (windowH/2)-(currentRuneSize/2), left: (windowW/2)-(currentRuneSize/2)});
    //second, third, and fourth uses size 2
    if (runeNumber === 2) {
        currentRuneSize = runeSize.sizeTwo;
        $("#rune2").show();
        //the runes will be aligned vertically. the runes should be half a rune apart. center.
        //To do this, use vertical from rune#1 take half of screen width, then subtract half of total rune length (rune+rune+half rune)
        //to get the second value, do the same but dont subtract, instead add half a half of a rune.
        $("#rune1").offset({top: (windowH/2)-(currentRuneSize/2), left: (windowW/2)-(currentRuneSize*1.25)});
        $("#rune2").offset({top: (windowH/2)-(currentRuneSize/2), left: (windowW/2)+(currentRuneSize/4)});
    }
    if (runeNumber === 3) {
        currentRuneSize = runeSize.sizeTwo;
        $("#rune2").show();
        $("#rune3").show();
        //the runes will still form a line, but now will three.
        //use same spacing method, apply to three
        $("#rune1").offset({top: (windowH/2)-(currentRuneSize/2), left: (windowW/2)-(currentRuneSize*2)});
        $("#rune2").offset({top: (windowH/2)-(currentRuneSize/2), left: (windowW/2)-(currentRuneSize/2)});
        $("#rune3").offset({top: (windowH/2)-(currentRuneSize/2), left: (windowW/2)+(currentRuneSize)});
    }
    if (runeNumber === 4) {
        currentRuneSize = runeSize.sizeTwo;
        //the runes will make a square, each half a rune apart.
        //apply spacing method 2 to the oher axis
        $("#rune2").show();
        $("#rune3").show();
        $("#rune4").show();
        $("#rune1").offset({top: (windowH/2)-(currentRuneSize*1.25), left: (windowW/2)-(currentRuneSize*1.25)});
        $("#rune2").offset({top: (windowH/2)-(currentRuneSize*1.25), left: (windowW/2)+(currentRuneSize/4)});
        $("#rune3").offset({top: (windowH/2)+(currentRuneSize/4), left: (windowW/2)-(currentRuneSize*1.25)});
        $("#rune4").offset({top: (windowH/2)+(currentRuneSize/4), left: (windowW/2)+(currentRuneSize/4)});
    }
    //quik fix?
    if (runeNumber > 1){
        if ($("#rune1").offset().top !== $("#rune2").offset().top){
            $('#rune1').css('transition', 'none');
            $("#rune1").offset({top: $("#rune2").offset().top});
            if (runeNumber > 2){
                $("#rune1").offset({left: $("#rune3").offset().left});
            }
            $('#rune1').css('transition', '.5s');
            //wait, this actually works
        }
    }
    //fifth, sixth, seventh, and eighth use the third size
    $(".rune").css("width",currentRuneSize);
    $(".rune").css("height",currentRuneSize);
}
function updateArea () {
    if (windowH<windowW) {
        tileSize=windowH/16;
    } else {
        tileSize=windowW/16;
    }
    var setMap1 = maps[currentMap[0]][currentMap[1]][0];
    var setMap2 = maps[currentMap[0]][currentMap[1]][1];
    setMapCollision = maps[currentMap[0]][currentMap[1]][2];
    setMapInteraction = maps[currentMap[0]][currentMap[1]][3];
    setMapEventReader = maps[currentMap[0]][currentMap[1]][4];
    $("#area").empty();
    
    renderTiles(setMap1,"mapTile1");
    renderTiles(setMap2,"mapTile2");
    
    $(".char").css("width",tileSize);
    $(".char").offset({top: char.y * tileSize, left: char.x * tileSize});
}
function hideChar(){
    $(".char").css("display", "none");
}
function showChar(charNo, dir, walkframe){
    hideChar();
    //$("#char"+dir).css("display", "initial");
    //check if charcter number changed
    if (!$($(".char")[0]).attr("class").includes(String(charNo))){
        //if so, change all imgs to different source
        //get charcter's name
        let charName = characterSprites[charNo][0][0].match(/(?<=sprites\/b\/)(.*)(?=\/)/gi);
        //replacing src
        $('.char').each(function(index, value){
            let div = $(value);
            let reg = new RegExp(div.attr('src').match(/(?<=sprites\/b\/)(.*)(?=\/)/gi), 'gi');
            div.attr('src', div.attr('src').replace(reg, charName));
        });
    }
    //show the image that is being used
    //dont know how
    if (walkframe % 2 === 0){
        $("#char"+(dir + 1)).show();
    }else if(walkframe === 1){
        $("#walk"+(dir + 1)+"_"+"1").show();
    }else if (walkframe === 3){
        $("#walk"+(dir + 1)+"_"+"2").show();
    }
    $('.char').each(function(i, obj) {
        //test
        if (!this){
            throw new Error("class char doesn't have right amount of divs!");
        }
        $(this).offset({top: char.y * tileSize, left: char.x * tileSize});
    });
}
function collisionRect(x1, y1, h1, w1, x2, y2, h2, w2){
    return !(
        ((y1 + h1) < (y2)) ||
        (y1 > (y2 + h2)) ||
        ((x1 + w1) < x2) ||
        (x1 > (x2 + w2))
    );
}
function charColli(x1, y1, h1, w1){
    return collisionRect(char.boxCenter[0], char.boxCenter[1], char.boxHeight, char.boxWidth, x1, y1, h1, w1);
}
function fix(num){
    return parseFloat(parseFloat(num).toFixed(2));
}
function makeEvent(area, room, x, y, foo){
    ///room in [a,b]
    try{
        if (!typeof(area) === 'number') throw 'area not number!';
        if (!typeof(room) === 'number') throw 'room not number!';
        if (!typeof(x) === 'number') throw 'x not number!';
        if (!typeof(y) === 'number') throw 'y not number!';
        if (!typeof(foo) === 'function') throw 'expected function is not a function!';
    }catch(err){
        console.log(err.message);
    }
    this.x = x;
    this.y = y;
    this.foo = foo;
    //maps[area][room][4-event reader]
    maps[area][room][4].push(this);
}
function runMapEvent(type, data) {
    
    if (type==="room") {
        currentMap[1]+=data[0];
        char.x=data[1];
        char.y=data[2];
        $("#world").addClass("fade");
        setTimeout(function () {
            $("#world").removeClass("fade");
        }, 2000);
        updateArea();
    }
    if (type==="mode") {
        currentMode=1;
        $("#combat").show();
        $("#world").hide();
    }
    refresh();
    
}
$(document).ready(function(){
    $('.preload').removeClass('preload');
    showChar(char.charNo, 0, walkframe % 4);
});
$(document).keydown(function(e){
    keys[e.key] = true;
});

$(document).keyup(function (e) {
    delete keys[e.key];
});
$("#combat").hide();
refresh();
//separated refresh tiles
//cuz you don't need to refresh tiles
//every 0.1 second
//most of the time
function testIfWindowChangeThanksPlease() {
    var newWindow = takeWindow();
    if (newWindow[0]===windowH&&newWindow[1]===windowW){}else{refresh();}
}
setInterval(function(){
    refresh();
},10000);
setInterval(function(){
    
    if ($.isEmptyObject(keys)) {
    } else {
        if (currentMode===0) {
            //returning all colliding tiles
            let checkColli = function (x, y,array) {
                //if like 6.5, take both 6 and 7 tiles into
                //consideration of collision
                let collideTiles = [];
                let collideCoor = [];
                x = parseFloat((x + char.boxCenter[0]).toFixed(2));
                y = parseFloat((y + char.boxCenter[1]).toFixed(2));
                if (!Number.isInteger(x)){
                    x = [Math.floor(x), Math.ceil(x)];
                }else{
                    x = [x];
                }
                if (!Number.isInteger(y)){
                    y = [Math.floor(y), Math.ceil(y)];
                }else{
                    y = [y];
                }
                //gather all possible tiles colliding with character
                if (array===0) {
                    for (let i = 0; i < x.length; i ++) {
                        for (let i2 = 0; i2 < y.length; i2 ++) {
                                collideTiles.push(setMapCollision[y[i2]][x[i]]);
                                collideCoor.push(x[i]+","+y[i2]);
                        }
                    }
                } else if (array===1) {
                    for (let i = 0; i < x.length; i ++) {
                        for (let i2 = 0; i2 < y.length; i2 ++) {
                                collideTiles.push(setMapInteraction[y[i2]][x[i]]);
                                collideCoor.push(x[i]+","+y[i2]);
                        }
                    }
                }
                return collideTiles;
            };
            let allowCollision = function (x,y) {
                let checkColliArray = checkColli(x,y);
                if (checkColliArray.length===0) {
                    return true;
                }
            };
            var checkColliTest;
            //check for inputs
            if (keys.w) {
                char.y = fix(char.y - .2);
                checkColliTest = checkColli(char.x,char.y,0);
                if(checkColliTest.includes('x')) {
                    char.y = fix(char.y + .2);
                }
                showChar(char.charNo, 2, walkframe % 4);
                walkpoint++;
            }
            if (keys.a) {
                char.x = fix(char.x - .2);
                checkColliTest = checkColli(char.x,char.y,0);
                if(checkColliTest.includes('x')) {
                    char.x += .2;
                }
                showChar(char.charNo, 1, walkframe % 4);
                walkpoint++;
            }
            if (keys.s) {
                char.y = fix(char.y + .2);
                checkColliTest = checkColli(char.x,char.y,0);
                if(checkColliTest.includes('x')) {
                    char.y -= .2;
                }
                showChar(char.charNo, 0, walkframe % 4);
                walkpoint++;
            }
            if (keys.d) {
                char.x = fix(char.x + .2);
                checkColliTest = checkColli(char.x,char.y,0);
                if(checkColliTest.includes('x')) {
                    char.x -= .2;
                }
                showChar(char.charNo, 3, walkframe % 4);
                walkpoint++;
            }
            var checkEventTest = checkColli(char.x,char.y,1);
            for (var i=0;i<checkEventTest.length;i++) {
                for (var j=0;j<setMapEventReader.length;j++) {
                    if (checkEventTest[j] === setMapEventReader[j][0]) {
                        runMapEvent(setMapEventReader[j][1],setMapEventReader[j][2]);
                    }
                }
            }
        } else if (currentMode===1) {
            if (runeRotateCooldown.a > 0) {
                runeRotateCooldown.a--;
            } else {
                if (keys.f) {
                    runeRotation.a--;
                    runeRotateCooldown.a=runeRotateCooldown.a+5;
                }
                if (keys.j) {
                    runeRotation.a++;
                    runeRotateCooldown.a=runeRotateCooldown.a+5;
                }
            }
            if (runeRotateCooldown.b > 0) {
                runeRotateCooldown.b--;
            } else {
                if (keys.g) {
                    runeRotation.b--;
                    runeRotateCooldown.b=runeRotateCooldown.b+5;
                }
                if (keys.h) {
                    runeRotation.b++;
                    runeRotateCooldown.b=runeRotateCooldown.b+5;
                }
            }
            if (runeRotateCooldown.c > 0) {
                runeRotateCooldown.c--;
            } else {
                if (keys.d) {
                    runeRotation.c--;
                    runeRotateCooldown.c=runeRotateCooldown.c+5;
                }
                if (keys.k) {
                    runeRotation.c++;
                    runeRotateCooldown.c=runeRotateCooldown.c+5;
                }
            }
            if (runeRotateCooldown.d > 0) {
                runeRotateCooldown.d--;
            } else {
                if (keys.s) {
                    runeRotation.d--;
                    runeRotateCooldown.d=runeRotateCooldown.d+5;
                }
                if (keys.l) {
                    runeRotation.d++;
                    runeRotateCooldown.d=runeRotateCooldown.d+5;
                }
            }
            var runeDeg = {
                a:(runeRotation.a*90).toString(),
                b:(runeRotation.b*90).toString(),
                c:(runeRotation.c*90).toString(),
                d:(runeRotation.d*90).toString()
            };
            $("#rune1").css("transform","rotate("+runeDeg.a+"deg)");
            $("#rune2").css("transform","rotate("+runeDeg.b+"deg)");
            $("#rune3").css("transform","rotate("+runeDeg.c+"deg)");
            $("#rune4").css("transform","rotate("+runeDeg.d+"deg)");
        }
        //debug
        if (keys.m) {
            currentMode++;
            if (currentMode>1) {
                currentMode=0;
                $("#world").show();
                $("#combat").hide();
            }
            if(currentMode===1) {
                $("#combat").show();
                $("#world").hide();
            }
            refresh();
        }
        if (keys.n) {
            runeNumber++;
            if (runeNumber>4) {
                runeNumber=1;
            }
            refresh();
        }
    }
    if (walkpoint>=3) {
        walkpoint=walkpoint-3;
        walkframe++;
    }
    testIfWindowChangeThanksPlease();
},100);