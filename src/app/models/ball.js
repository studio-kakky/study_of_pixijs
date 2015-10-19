class Ball extends PIXI.Container {
  constructor(x, y, r, opt = {fillColor:0xff0000, alpha:1}) {
    super();
    this._v = new PIXI.Point(0,0);
    this._a = new PIXI.Point(0,0);
    this.x = x;
    this.y = y;
    this.init(r, opt);
  }

  init(r, opt) {
    this.setGraphicCircle(r, opt);
  }

  setGraphicCircle(r, opt) {
    this.r = r;
    console.log(r);
    var gCircle = new PIXI.Graphics();
    gCircle.beginFill(opt.fillColor, opt.alpha);
    gCircle.drawCircle(0, 0, r);
    gCircle.endFill();
    gCircle.lineStyle(1, 0x000000);
    gCircle.moveTo(0, 0).lineTo(r, 0);
    this.addChild(gCircle);
  }

  update() {
    this.v.x += this.a.x;
    this.v.y += this.a.y;
    this.x += this.v.x;
    this.y += this.v.y;
  }

  set a(point) {
    this._a = new PIXI.Point(point.x, point.y);
  }

  get a() {
    return this._a;
  }

  set v(point) {
    this._v = new PIXI.Point(point.x, point.y);
  }

  get v() {
    return this._v;
  }

}
