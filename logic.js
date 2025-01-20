let string="";
let buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
  button.addEventListener("click",(e)=>
  {
      if(e.target.innerHTML=="=")
      {
        string=eval(string);
        document.querySelector("input").value=string;
      }
      else if(e.target.innerHTML =="AC")
      {
          string="0";
          document.querySelector("input").value=string;
      }
      else{
          string=string+e.target.innerHTML;
          console.log(string);
          document.querySelector("input").value=string;
      }
  });
});
