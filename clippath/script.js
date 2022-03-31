const tl = gsap.timeline({paused:true,defaults:{duration:0.05,ease:"elastic.out(1, 0.3)"}});
const container = document.querySelector(".container");


tl
.to(container,{clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
.to(container,{clipPath:'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'},'+=1')
.to('h1',{color:'white'})
.to('.container2',{clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'},'-=0.3')

container.addEventListener("mouseover",()=>{
    console.log("mouseover")
    tl.play();
})