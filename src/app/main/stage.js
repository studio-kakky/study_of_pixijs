class Stage extends PIXI.Container{
  constructor(element, isFullScreen) {
    this.element = element;
    this.renderer = PIXI.autoDetectRenderer(element.clientWidth, element.clientHeight, {backgroundColor : 0x000000, antialias:true});
    element.appendChild(this.renderer.view);
    super();
  }

  autoRendering() {
    this.render();
    requestAnimationFrame(()=>{
      this.autoRendering();
    });
  }

  render() {
    this.children.forEach((child)=>{
      if(child.update) {
        child.update();
      }
    });
    this.renderer.render(this);
  }

  get stageWidth() {
    return this.element.clientWidth;
  }

  get stageHeight() {
    return this.element.clientHeight;
  }
}
