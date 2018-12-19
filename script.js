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
                [ ".", "w", "f", "f", "f", "f", "f", "w", "b", "b", "s", "b", "b", "w", ".", "." ],
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
                [ ".", ".", ".", ".", ".", ".", ".", "x", "x", "x", "x", ".", "x", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "a", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ]
            ],
            {
                a: ["room",1]
            }
        ],
        [
            [
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "w", "w", "w", "w", "w", "w", "w", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "w", "f", "f", "f", "f", "f", "w", ".", "." ],
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
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "w", ".", ".", ".", ".", "." ],
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
                [ ".", ".", ".", ".", ".", ".", ".", "x", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "x", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "x", ".", ".", ".", ".", ".", "x", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", "x", "x", "x", "x", "x", "x", "x", ".", "." ],
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
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ],
                [ ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "." ]
            ],
            [
                
            ]
        ]
    ]
];
var setMapCollision = [];
var setMapInteration;
var setMapEventReader;

var rotation = -1;
var keys = {};
var charcterSprites = [
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
function tileClass(charcter) {
    var type = "undefined";
    if (charcter==="") {
    } else {
        if (charcter===".") {
            type = "undefined";
        }
        if (charcter==="f") {
            type = "mapTileFloor";
        }
        if (charcter==="w") {
            type = "mapTileWall";
        }
        if (charcter==="b") {
            type = "mapTileWallBack";
        }
        if (charcter==="s") {
            type = "mapTileSky";
        }
        if (charcter==="o") {
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
    $("#rune").css("width",runeSize.sizeOne);
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
    setMapInteration = maps[currentMap[0]][currentMap[1]][3];
    // setMapEventReader = ;
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
        let charName = charcterSprites[charNo][0][0].match(/(?<=sprites\/b\/)(.*)(?=\/)/gi);
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
            let checkColli = function (x, y) {
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
                for (let i = 0; i < x.length; i ++) {
                    for (let i2 = 0; i2 < y.length; i2 ++) {
                            collideTiles.push(setMapCollision[y[i2]][x[i]]);
                            collideCoor.push(x[i]+","+y[i2]);
                    }
                }
                console.log(collideTiles);
                console.log(collideCoor);
                return collideTiles;
            };
            let allowCollision = function (x,y) {
                let checkColliArray = checkColli(x,y);
                console.log(checkColliArray);
                if (checkColliArray.length===0) {
                    return true;
                }
            };
            //check for inputs
            if (keys.w) {
                char.y = fix(char.y - .2);
                var checkColliTest = checkColli(char.x,char.y);
                if(checkColliTest.includes('x')) {
                    char.y = fix(char.y + .2);
                }
                for (var i=0;i>0;i++) {
                    
                }
                showChar(char.charNo, 2, walkframe % 4);
                walkpoint++;
            }
            if (keys.a) {
                char.x = fix(char.x - .2);
                var checkColliTest = checkColli(char.x,char.y);
                if(checkColliTest.includes('x')) {
                    char.x += .2;
                }
                showChar(char.charNo, 1, walkframe % 4);
                walkpoint++;
            }
            if (keys.s) {
                char.y = fix(char.y + .2);
                var checkColliTest = checkColli(char.x,char.y);
                if(checkColliTest.includes('x')) {
                    char.y -= .2;
                }
                showChar(char.charNo, 0, walkframe % 4);
                walkpoint++;
            }
            if (keys.d) {
                char.x = fix(char.x + .2);
                var checkColliTest = checkColli(char.x,char.y);
                if(checkColliTest.includes('x')) {
                    char.x -= .2;
                }
                showChar(char.charNo, 3, walkframe % 4);
                walkpoint++;
            }
            // let nearX;
            // let nearY;
            // let redefine = function(){
            //     nearX = parseFloat(char.x) + char.boxCenter[0];
            //     nearY = parseFloat(char.y) + char.boxCenter[1];
            //     console.log("charx: "+char.x+" and chary: "+char.y);
            //     console.log("x: "+nearX+" and y: "+nearY);
            // };
            // redefine();
            // if (keys.s) {
            //     //$(".char").attr("src",charcterSprites[char.charNo][0][walkframe%4]);
            //     showChar(char.charNo, 0, walkframe % 4);
            //     walkpoint++;
            //     if (setMapCollision[Math.floor(nearY)+1][Math.floor(nearX)]!=="x") {
            //         char.y=parseFloat((char.y+.2).toFixed(3));
            //         redefine();
            //     }
            // }
            // if (keys.a) {
            //     //$(".char").attr("src",charcterSprites[char.charNo][1][walkframe%4]);
            //     showChar(char.charNo, 1, walkframe % 4);
            //     walkpoint++;
            //     if (setMapCollision[Math.floor(nearY)][Math.floor(nearX - .2)]!=="x") {
            //         char.x=parseFloat((char.x-.2).toFixed(3));
            //         redefine();
            //     }
            // }
            // if (keys.w) {
            //     //$(".char").attr("src",charcterSprites[char.charNo][2][walkframe%4]);
            //     showChar(char.charNo, 2, walkframe % 4);
            //     walkpoint++;
            //     if (setMapCollision[Math.floor(nearY - .2)][Math.floor(nearX)]!=="x") {
            //         char.y=parseFloat((char.y-.2).toFixed(3));
            //         redefine();
            //     }
            // }
            // if (keys.d) {
            //     //$(".char").attr("src",charcterSprites[char.charNo][3][walkframe%4]);
            //     showChar(char.charNo, 3, walkframe % 4);
            //     walkpoint++;
            //     if (setMapCollision[Math.floor(nearY)][Math.floor(nearX)+1]!=="x") {
            //         char.x=parseFloat((char.x+.2).toFixed(3));
            //         redefine();
            //     }
            // }
        } else if (currentMode===1) {
            if (keys.f) {
                rotation--;
            }
            if (keys.j) {
                rotation++;
            }
        }
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
        }
    }
    if (walkpoint>=3) {
        walkpoint=walkpoint-3;
        walkframe++;
    }
    var deg = ((rotation+1)*90).toString();
    $("#rune").css("transform","rotate("+deg+"deg)");
    testIfWindowChangeThanksPlease();
},100);