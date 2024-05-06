// https://api.tvmaze.com/search/shows?q=girls


// fetch(" https://api.tvmaze.com/search/shows?q=girls")
// .then(res=>{
//     return res.json();
// })
// .then(data=>{
//     console.log(data);
//     // console.log(data[8].show.name)
//     console.log(data[0]);
//     for(let dat of data){
//         console.log(dat.show.name)
//         console.log(dat.show.image.medium);
//     }
// })
// .catch(err=>{
//     console.log(err);
// })


let search=document.getElementById("show");

let btn=document.getElementById("btn");
let imageContainer=document.getElementById("imageContainer");

btn.addEventListener("click", async()=>{
    let searchValue=search.value;
    console.log(searchValue);
     
    let res=await fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`);
    let data=await res.json();
    
    imageContainer.innerHTML='';
    for(dat of data){
        console.log(dat.show.name);
        let image=document.createElement("img");


        if(dat.show.image.medium == null){
            console.log("no images");
        }
        else{
            // image.innerHTML="<a> </a>"
            image.src=dat.show.image.medium;
            imageContainer.append(image);
        }
    }

})

// const getData=async()=>{
//     let res=await fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`);
//     let data=await res.json();

//     for(dat of data){
//         console.log(dat.show.name);
//     }
// }




