/**
 * Created by chnice on 7/17/16.
 */
function Circle(type,row,col) {
    this.row = row;
    this.col = col;
    this.type = type;

    this.setType(type);
}

Circle.TYPE_UNSELECTED = 0;
Circle.TYPE_SELECTED = 1;

Circle.prototype = new createjs.Bitmap();


Circle.prototype.setType = function ( type ) {
  this.type = type;
  switch ( type ){
      case  Circle.TYPE_UNSELECTED:
          createjs.Bitmap.call(this,"images/pot1.png");
          break;
      case Circle.TYPE_SELECTED:
          createjs.Bitmap.call(this,"images/pot2.png");
          break;
  }
};


