let dead = [[5,0,4],[6,1,3],[2,8,7]]

function Orginze(dead){
    let tmp = 0;

    for(let i=0;i<dead.length;i++){ // 0
        for(let j=0;j<dead.length;j++){ //0
            for(let k=0;k<dead.length;k++){ // 0
                for(let d=0;d<dead.length;d++){ // 1
                    if (dead[i][j]<dead[k][d]) // 0 0 < 0 1
                    {
                        tmp = dead[i][j]
                        dead [i][j]=dead[k][d]
                        dead [k][d]=tmp
                    }
                }
            }
        }
    }
}
Orginze(dead)

console.log(dead)
