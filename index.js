let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
//let btn=document.querySelector("button");
document.addEventListener("keypress",function()
{
    if(started==false)
    {
    console.log("game started");
    started=true;

    levelup();
    }
});

function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
   {
    btn.classList.remove("flash");
   },250);
}

function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
   {
    btn.classList.remove("userflash");
   },250);
}


function levelup()
{
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function checkans(index)
{
    console.log("current level: ", level);

    //index=level-1;
    if(userseq[index]==gameseq[index])
    {
        //console.log("same value");
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup, 1000);
        }
    }
    else
    {
        h2.innerHTML=`Game over! your score was <b>${level}<b><br> press any key`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
       {
        document.querySelector("body").style.backgroundColor="white";
       },150);
        reset();
    }
}
function btnpress()
{
    console.log(this);
    let btn=this;
    userflash(btn);

    let usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click", btnpress);
}

function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}