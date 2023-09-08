var listBtn = document.querySelectorAll('main button')
var container = document.querySelector('.cart .content')
var total = document.querySelector('#total ')

var sumNumber = 0


listBtn.forEach((item,index) => {
    item.addEventListener('click',e => {
       
        sum(e.target.getAttribute('price'))
        switch(index) {
            case 0:        
                   var listItem = container.querySelectorAll('.item1')
                   
                   if(listItem.length == 0) {
                        var newItem = document.createElement('div')
                        newItem.classList.add('item')
                        newItem.classList.add('item1')
                       
                        newItem.innerHTML = `<img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107846050335072_iphone-13-dd-1.jpg
                        " alt="">
                        <div class="description">
                                <h3>Iphone 13 128GB</h3>  
                                <p>Là thành quả hợp tác giữa hai tên tuổi đình đám là Asus và Blizzard</p>
                        </div>
                        <div class="price-item">19.990.000đ</div>
                        <input type="number" value = "1" id="">
                        <button id ="remove" price = "19990000" onclick = "remove(this)">Remove</button>`
                        container.appendChild(newItem)
                        var inputValue = newItem.querySelector('input')
                            inputValue.addEventListener('change', e => {
                                var value = e.target.value
                                if(value <= 1) {
                                    inputValue.value = 1
                                }
                                update()  
                                
                            })
                   } else {
                        var inputValue = listItem[0].querySelector('input')
                        inputValue.value ++

                   }       
                         break
            case 1: 
                           
                    var listItem = container.querySelectorAll('.item2')
                        
                    if(listItem.length == 0) {
                        var newItem = document.createElement('div')
                        newItem.classList.add('item')
                        newItem.classList.add('item2')
                        
                        newItem.innerHTML = ` <img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638158962810512367_ss-galaxy-s22-dd-icon.jpg
                        " alt="">
                        <div class="description">
                                <h3>Samsung Galaxy S22 5G 128GB</h3>  
                                <p>Gặp gỡ Samsung Galaxy Tab S6 Lite 2022 - phiên bản mới với sự nâng cấp mạnh về hiệu năng Snapdragon 720G</p>
                        </div>
                        <div class="price-item">24.190.000đ</div>
                        <input type="number" value = "1" id="">
                        <button id ="remove" price = "24190000"  onclick = "remove(this)">Remove</button>`
                        container.appendChild(newItem)
                        var inputValue = newItem.querySelector('input')
                            inputValue.addEventListener('change', e => {
                                var value = e.target.value
                                if(value <= 1) {
                                    inputValue.value = 1
                                }
                                update()  
                                
                            })
                    } else {
                        console.log(listItem)
                        var inputValue = listItem[0].querySelector('input')
                        inputValue.value ++

                    }
                   
                    break


            case 2: 
                    var listItem = container.querySelectorAll('.item3')
                                
                    if(listItem.length == 0) {
                        var newItem = document.createElement('div')
                        newItem.classList.add('item')
                        newItem.classList.add('item3')
                        
                        newItem.innerHTML = `<img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/30/638157896325911171_oppo-find-n2-flip-dd-moi-bh.jpg
                        " alt="">
                        <div class="description">
                                <h3>Oppo Find N2 Flip</h3>  
                                <p> Phiên bản mới với sự nâng cấp mạnh về hiệu năng Snapdragon 720G, cho mọi tác vụ mượt mà</p>
                        </div>
                        <div class="price-item">21.690.000đ</div>
                        <input type="number" value = "1" id="">
                        <button id ="remove" price = "21690000" onclick = "remove(this)">Remove</button>`
                        container.appendChild(newItem)
                        var inputValue = newItem.querySelector('input')
                            inputValue.addEventListener('change', e => {
                                var value = e.target.value
                                if(value <= 1) {
                                    inputValue.value = 1
                                }
                                update()  
                                
                            })
                    } else {
                        console.log(listItem)
                        var inputValue = listItem[0].querySelector('input')
                        inputValue.value ++

                    }
                
                    break


            case 3: 
                var listItem = container.querySelectorAll('.item4')
                                    
                if(listItem.length == 0) {
                    var newItem = document.createElement('div')
                    newItem.classList.add('item')
                    newItem.classList.add('item4')
                    newItem.innerHTML = `                    <img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/24/638152728715036708_xiaomi-13-lite-dd-docquyen-bh.jpg" alt="">

                    <div class="description">
                            <h3>Xiaomi 13 Lite 8GB-128GB</h3>  
                            <p>Xiaomi Redmi Note 11 Pro là một trong những chiếc điện thoại mới nhất thuộc Redmi Note 11 series ra mắt gần đây. </p>
                    </div>
                    <div class="price-item">14.590.000đ</div>
                    <input type="number" value = "1" id="">
                    <button id ="remove" price = "14590000" onclick = "remove(this)">Remove</button>`
                    container.appendChild(newItem)
                    var inputValue = newItem.querySelector('input')
                        inputValue.addEventListener('change', e => {
                            var value = e.target.value
                            if(value <= 1) {
                                inputValue.value = 1
                            }
                            update()  
                            
                        })
                } else {
                    console.log(listItem)
                    var inputValue = listItem[0].querySelector('input')
                    inputValue.value ++

                }
            
                break


        }
    })
})



function remove(item) {
    var itemDelete = item.closest('.item')
    var toltalDelete  =  itemDelete.querySelector('input').value 
   
    sum((-item.getAttribute('price')) * toltalDelete)
    container.removeChild(itemDelete)
}

function sum(number) {
    sumNumber  += parseInt(number) 
   
    if(sumNumber < 0) {
        sumNumber = 0
    }

    var inner = typePrice(sumNumber)
    total.innerHTML = inner + 'đ'
}


function update() {
    var totalItem = 0
    var listItem = container.querySelectorAll('.item')
    listItem.forEach(item => {
        var price = item.querySelector('input').value
        var quality = item.querySelector('button').getAttribute('price')
        totalItem += price * quality
    })
    sumNumber = totalItem
    var inner = typePrice(totalItem)
    total.innerHTML = inner + "đ"
}


function typePrice(number) {
    const formatter = new Intl.NumberFormat(undefined, {
        currencyDisplay: 'name'
      })
    
    var number = formatter.format(sumNumber)
    return number
}











