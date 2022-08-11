// Thursday 11 August 
let n=50;
let state = [];
let next = [];

let Ra =1, Ri =5, Wa = 1, Wi = 0.1;


function setup() {
    createCanvas(600, 600);
    background(0);
    smooth();
    frameRate(2);

    for (let i=0; i < n; i++) {
        state[i] = [];
        for (let j=0; j<n; j++) {
            state[i][j] = (round(random(2)));
        }
    }



    // Initialise grid
    for (let i=0; i < n; i++) {
        for (let j=0; j < n; j++) {

            if(state[i][j] == 0){
                fill(0);
            } else {
                fill(255);
            }
            rect(width/n * i, height/n * j, width/n, height/n);  
        }
    }

   
}

function edge( a){
  if(a < 0){ 
    return n + a; 
  }else if(a >= n){
    return a - n;
  }else{ 
		return a; 
	}
}


function draw(){
  for(let i = 0; i < n; i++){ //各セルに対して，それを中心とした3*3の9マスの中で状態が1になっているセルの数を数え上げる

    next[i] = [];

    for(let j = 0; j < n; j++){
      let count_activator = 0; //カウンターの変数を設定する
      for(let vi = -Ra; vi < Ra+1; vi++){ //今の座標に-1, 0, 1を足して近傍を求める（x軸方向）
        for(let vj = -Ra; vj < Ra+1; vj++){ //今の座標に-1, 0, 1を足して近傍を求める（y軸方向）
          count_activator += state[edge(i + vi)][edge(j + vj)];
        }
      }
		let count_inhibitor = 0;
		for(let vi = -Ri; vi < Ri+1; vi++){ //今の座標に-1, 0, 1を足して近傍を求める（x軸方向）
            for(let vj = -Ri; vj < Ri+1; vj++){ //今の座標に-1, 0, 1を足して近傍を求める（y軸方向）
          count_inhibitor += state[edge(i + vi)][edge(j + vj)];
        }
      }
      let a = Wa * count_activator - Wi * count_inhibitor;

      
			if(a > 0){
                
				next[i][j] = 1;
			}else{
            
				next[i][j] = 0;
			}
    }
			
  }
  
	for(let i = 0; i < n; i++){ //状態の更新
    for(let j = 0; j < n; j++){
			state[i][j] = next[i][j];
		}
	}
  for(let i = 0; i < n; i++){ //描画
    for(let j = 0; j < n; j++){
      if(state[i][j] == 0){
        fill(0);
      }else{
        fill(255);
      }
      rect(width/n * i, height/n * j, width/n, height/n); 
    }
  }
};
