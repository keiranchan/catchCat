/**
 * Created by chnice on 7/17/16.
 */
window.onload = function () {
    init();
};

var stage = null;
var canvas = null;
var grid = new Array(9);
//直径
var circleDiameter = 45;


function init() {
    stage = new createjs.Stage('myCanvas');
    //循环 原生不是使用requestAnimationFrame/RAF,RAF每次执行的时间各不相同
    createjs.Ticker.framerate = 30;//帧数
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.addEventListener("tick",handleTick);

    canvas = document.getElementById("myCanvas");

    createMap();
    createCat();
}

function handleTick(e) {
    stage.update( e );
}

function createCat() {
    var data = {
      images : ["images/stay.png"],
        frames : {width : 61 ,height : 93},
        animations : {
            run : [ 0,15 ]  //16帧动画
        }
    };

    var spriteSheet = new createjs.SpriteSheet( data );
    var cat = new createjs.Sprite( spriteSheet, "run" );
    cat.x = grid[3][3].x;
    cat.y= grid[3][3].y;

    stage.addChild( cat );
}

function createMap() {
    //i = rows ,j = columns
    for(var i = 0 ;i < 9; i++){

        grid[i] = new Array(9);
        for(var j = 0; j < 9; j++){
            //var bitmap = new createjs.Bitmap("images/pot1.png");
            var ranType = Math.random()<0.3 ? Circle.TYPE_SELECTED :Circle.TYPE_UNSELECTED ;//0-1之间
            var bitmap = new Circle(ranType,i,j);
            stage.addChild( bitmap );

            var offset = i%2 ? circleDiameter/2 : 0;

            bitmap.regX = circleDiameter/2;
            bitmap.regY = circleDiameter/2;

            //列的位置
            bitmap.x = 50 + circleDiameter * j + offset;
            //行的位置
            bitmap.y =  280 + circleDiameter * i;

            grid[i][j] = bitmap;
        }
    }
}