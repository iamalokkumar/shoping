


let wishvalue=JSON.parse(localStorage.getItem("cart_data"))||[]


let url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"

fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data.data)
    getData(data.data)
    
})
.catch((err)=>{
    console.log(err)
})
let pricing=(e,data)=>{
    
    if(e.target.value=="High To Low"){
      data.sort((a,b)=>{
        return b.price -a.price
      })
    }
    if(e.target.value=="Low To High"){
        data.sort((a,b)=>{
            return a.price -b.price
          })
    }
    getData(data)

  }
  
let categorys=(e,data)=>{
    console.log(e.target.value)
  
    let dataa=data.filter((elem)=>{
        return e.target.value==elem.category 
    })
    getData(dataa)
}




let getData=(data)=>{
    document.getElementById("container").innerHTML=""
    let price=document.getElementById("price")
    price.addEventListener("change",(e)=>{
        pricing(e,data)
    })
    let category=document.getElementById("category")
    category.addEventListener("change",(e)=>{
        categorys(e,data)
    })
    data.map((elem)=>{
        let div=document.createElement("div")
        div.setAttribute("class","div")
        let img=document.createElement("img")
         img.src=elem.image

         let indiv=document.createElement("div")
         indiv.setAttribute("class","indiv")
         let title=document.createElement("h3")
         title.innerText=elem.title
         let wish=document.createElement("img")
         wish.setAttribute("class","wish")
         wish.src="https://cdn.pixabay.com/photo/2016/01/20/14/22/heart-1151624_960_720.png"
         wish.addEventListener("click",()=>{
            wishList(elem)
         })
         let price=document.createElement("h4")
         price.innerText=`price - ${elem.price}`
         let brand=document.createElement("h4")
         brand.innerText=elem.brand
         let category=document.createElement("h4")
         category.innerText=elem.category


         indiv.append(title,wish)
        div.append(img,indiv,brand,category,price)
        document.getElementById("container").append(div)
    })

    let wishList=(elem)=>{
       wishvalue.push(elem)
       alert("One Item Added To Your Cart")
       localStorage.setItem("cart_data",JSON.stringify(wishvalue))
    }
}


