document.querySelectorAll("button")[0].addEventListener("click",function(){
  var audio = new Audio("tom-1.mp3");
  audio.play();
  var randomVaribale1 = Math.floor(Math.random()*6)+1;
  var randomImage = "dice" +randomVaribale1+ ".png";
  var randomImageSource =  randomImage;
  var x =document.getElementById("img1");
  x.setAttribute('src',randomImageSource);
  document.querySelectorAll("button")[1].addEventListener("click",function(){
    var audio = new Audio("tom-2.mp3");
    audio.play();
     randomVaribale2 = Math.floor(Math.random()*6)+1;
    var randomImage2 = "dice" +randomVaribale2+ ".png";
    var randomImageSource2 =  randomImage2;
    var x =document.getElementById("img2");
    x.setAttribute('src',randomImageSource2);

  console.log(randomVaribale1);
  console.log(randomVaribale2);
  if(randomVaribale1 > randomVaribale2)
  {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
  }
  else if( randomVaribale2 > randomVaribale1)
  {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
  }
  else
  {
      document.querySelector("h1").innerHTML = "Draw";
  }
});
});
