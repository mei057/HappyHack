//配列オブジェの作成
let circles=[];

function setup() {
    // 親要素（#canvas-container）のサイズを取得
    let container = document.getElementById('canvas-container');
    let canvas = createCanvas(container.clientWidth, container.clientHeight);
    canvas.parent('canvas-container'); // 指定したdivの中にキャンバスを入れる
}

//1
class Circle{
    //2
    constructor(x,y){
        //座標（マウスの位置）
        this.position=createVector(x,y);
        //動き
        this.velocity=p5.Vector.random2D();
        this.size=random(3,10);
    }
    //3
    move(){
        //ベクトルの足し算
        this.position.add(this.velocity);
    }
    //4 表示
    draw(){
        //ぬりつぶす
        fill(255);
        //円を描く
        ellipse(this.position.x,this.position.y,this.size);
    }
}
//計算と表示
function draw(){
    //背景をぬりつぶす
    background(135,206,235);

    //マウスをクリックしている間、
    if(mouseIsPressed){
        //circles配列に追加（マウスの座標）
        circles.push(new Circle(mouseX, mouseY));
    }
    if(circles.length>100){
        circles.splice(0,1);
    }
    //配列の数だけ処理する
    for(let i=0; i<circles.length; i++){
        //表示する
        circles[i].move();
        circles[i].draw();
        for(let j=0; j<circles.length; j++){
            let position1=circles[i].position;
            let position2=circles[j].position;
            let distance=dist(position1.x, position1.y,
                position2.x, position2.y);
            if(distance<50){
                stroke(255);
                line(position1.x, position1.y, position2.x, position2.y);
            }
        }
    }
}