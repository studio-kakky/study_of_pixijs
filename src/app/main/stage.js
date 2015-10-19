class Stage extends PIXI.Container{
  constructor(element, isFullScreen) {
    this.renderer = PIXI.autoDetectRenderer(element.clientWidth, element.clientHeight, {backgroundColor : 0x1099bb});
    element.appendChild(this.renderer.view);
    super();
  }

  autoRendering() {
    render();
    requestAnimationFrame(()=>{
      this.autoRendering();
    });
  }

  render() {
    this.renderer.render(this);
  }
}
