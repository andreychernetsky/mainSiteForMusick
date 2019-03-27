
let btn = document.querySelector('.section');
let nav = document.getElementById('nav');

btn.addEventListener('click',function () {
  nav.classList.toggle('active');
});


/*function  geTringel(preferences) {
  let count = 0;

  let length = preferences.length;

  for (let i = 0; i < length; i++) {

    let a = preferences[i] - 1;
    console.log(a);
    if (a == i) continue;

    let b = preferences[a] - 1;
    if (a == b) continue;

    let c = preferences[b] - 1;
    if (c == b) continue;

    if (c == i) {
      count++;
    }
  }

  return count / 3;

}
// let arr = [2,3,1];
let arr =[2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4];
console.log(geTringel(arr));
console.log(geTringel(arr));*/



/*
function geTringel (preferences){
  let triada = 0;
  let  len = preferences.length;
  // document.write(len);
  for(let i = 0; i < len; i++ ) {
    let item = preferences[i];
    console.log(item);
    let key2 = item -1;
    console.log(key2)
    let item2 = preferences[key2];
    console.log(item2);
    let item3 = preferences[item2-1];
    console.log(item3)
    if((item3 -1)== i && (item !==item3)) {
      triada++;
    }

  }
  return triada/3;
}
// let arr = [2,3,1];
let arr =[9, 3, 7, 5, 3, 1, 2, 1, 8];
console.log(geTringel(arr));
*/




/*function  geTringel(preferences) {
  let count = 0;

  let length = preferences.length;

  for (let i = 0; i < length; i++) {

    let a = preferences[i]-1;
   console.log(a);

    if (a == i) continue;
    console.log(a)
    let b = preferences[a] - 1;
    console.log(b);
    if (a == b) continue;

    let c = preferences[b] - 1;
    if (c == b) continue;
 console.log(c);
    if (c == i) {
      count++;
    }
  }

  return count / 3;

}

let arr =[12, 7, 19, 17, 11, 6, 13, 15, 19, 16, 16, 7, 2, 4, 18, 5, 14, 8, 5, 11];
console.log(geTringel(arr));*/
// console.log(geTringel(arr));


/*
function getLoveTrianglesCount(preferences = []) {
  let k = 0;

  for(let i = 0; i < preferences.length; i++){
    if(preferences[preferences[preferences[i] - 1]-1] === i + 1 &&(preferences[i] !== preferences[preferences[preferences[i] - 1]-1]) ){
      k++;
    }
  }
  return (k/3);
};
let arr = [2, 3, 1, 5, 6, 4];
console.log( getLoveTrianglesCount(arr));
*/
