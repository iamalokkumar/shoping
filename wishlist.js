

let data=JSON.parse(localStorage.getItem("cart_data"))||[]


let cartData=()=>{
    data.map((elem)=>{
        let div=document.createElement("div")
        div.setAttribute("class","div")
        let img=document.createElement("img")
         img.src=elem.image

         let indiv=document.createElement("div")
         indiv.setAttribute("class","indiv")
         let title=document.createElement("h3")
         title.innerText=elem.title
         
         let price=document.createElement("h4")
         price.innerText=`price - ${elem.price}`
         let brand=document.createElement("h4")
         brand.innerText=elem.brand
         let category=document.createElement("h4")
         category.innerText=elem.category


         indiv.append(title)
        div.append(img,indiv,brand,category,price)
        document.getElementById("container").append(div)
    })
}

cartData()