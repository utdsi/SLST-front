

let display_div=document.getElementById('display')




let arr;
async function getData(){

    let res=await fetch('https://mysterious-mite-jacket.cyclic.app/user')

    let data = await res.json()

   //console.log(data)

   display_data(data)
       

    
}


getData()

let dis = document.getElementById("display")

function display_data(arr){

arr.map((item)=>{

    const {image_url,name,age,gender,flat,tower} =item

    let div = document.createElement("div")

    let image1 = document.createElement("img")

    let name1 = document.createElement("h3")

    let age1 = document.createElement("p")
    let gender1 = document.createElement("p")

    let flat1 =  document.createElement("p")

    let tower1 =  document.createElement("p")

    let butt = document.createElement("button")
    

    image1.src = image_url
   name1.innerHTML=name
   age1.innerHTML=age
   gender1.innerHTML=gender
   flat1.innerHTML=flat
   tower1.innerHTML=tower 
   butt.innerHTML= "Delete User"

   butt.onclick = ()=>{

    deleteFunc()
    window.alert("User has been successfully deleted")
    window.location.reload()
   }

   async function deleteFunc(){


    let id = item._id
    //console.log(id)

    let res = await fetch(`https://mysterious-mite-jacket.cyclic.app/delete/${id}`,{
        method:"DELETE",

        headers:{
            'Content-Type':'application/json'
        }
    })

    let data = await res.json()

    
    window.location.reload()





   }

   div.append(image1,name1,age1,gender1,tower1,flat1,butt)

   dis.append(div)



})

}


