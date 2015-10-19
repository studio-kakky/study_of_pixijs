class Ball extends Continer {
  constructor(x, y, r, opt = {fillColor:#ff0000, alpha:1}) {
    super();
    this.x = x;
    this.y = y;
    init(r, opt);
  }

  init(r, opt) {
    this.setGraphicCircle(r, opt);
  }

  setGraphicCircle(r, opt) {
    this.r = r;
    var gCircle = new PIXI.Graphics();
    gCricle.biginFill(opt.fillColor, opt.alpha);
    gCricle.draw(0,0,r);
    gCricle.endFill();
    gCricle.lineTo(0,0);
    gCricle.moveTo(r,0);
    this.addChild(gCricle);
    gCircle.x = gCircle.y = -r;
  }
}
