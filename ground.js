class Ground{
  constructor(x,y,w,h){
    this.w=w;
    this.h=h;
    var options={isStatic:true};
    this.body=Bodies.rectangle(x,y,this.w,this.h,options);
    World.add(world,this.body);
  }

  show(){
    var pos=this.body.position;
    push();
    fill(100,120,140);
    rect(pos.x,pos.y,this.w,this.h);
    pop();
  }
}