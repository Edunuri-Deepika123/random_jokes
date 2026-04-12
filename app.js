
let url="https://v2.jokeapi.dev/joke/Any?safe-mode";

let btn=document.querySelector("#searchbtn");
btn.addEventListener("click",async function() {

      let p=document.querySelector("#result");
      p.innerText="Loading joke...";

       let jokes= await getrandomjokes();
      
       
       if(jokes){
       p.innerText=jokes;
       }
       else{
        p.innertext="No joke available";
       }
      
});


async function getrandomjokes(){
  try{
    let res=await axios.get(url);
    if(res.data.type==="single"){
      return res.data.joke;
    }else{
      return res.data.setup + res.data.delivery;
    }

  }catch(e){
    console.log("error",e);
    return "something went wrong";
  }
}