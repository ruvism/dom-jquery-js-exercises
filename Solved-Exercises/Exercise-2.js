// Javascript
// 1- URL: https://www.dell.com/en-us/shop/accessories

function changeColors(){
    var buttonCategory = document.querySelectorAll('.col-xs-4', '.bottom-offset-small')
    if (buttonCategory) {
        for (i = 0; i < buttonCategory.length; i = i+3) {
            buttonCategory[i].addEventListener('click', function (e) {
                
                e.preventDefault()
        
                var heroImg = document.querySelectorAll('.half-image-module')
                for (j = 0; j < heroImg.length; j++) {
                    heroImg[j].style.backgroundColor = 'purple'
                }
            })
        }
        for (i = 1; i < buttonCategory.length; i = i+3) {
            buttonCategory[i].addEventListener('click', function (e) {
                
                e.preventDefault()
        
                var heroImg = document.querySelectorAll('.half-image-module')
                for (j = 0; j < heroImg.length; j++) {
                heroImg[j].style.backgroundColor = 'green'
                }
            })
        }
        for (i = 2; i < buttonCategory.length; i = i+3) {
            buttonCategory[i].addEventListener('click', function (e) {
                
                e.preventDefault()
        
                var heroImg = document.querySelectorAll('.half-image-module')
                for (j = 0; j < heroImg.length; j++) {
                heroImg[j].style.backgroundColor = 'orange'
                }
            })
        }
    }
}


// 2- URL: https://www.dell.com/en-us/shop/accessories

function changeFirstImage (){
  var newFirstImage = document.querySelectorAll('.half-inner-module-image')[20].src="//snpi.dell.com/snp/images2/110/a8910375.jpg"
    return newFirstImage;
}
function changeSecondtImage (){
  var newSecondImage = document.querySelectorAll('.half-inner-module-image')[21].src="//snpi.dell.com/snp/images2/110/a9552314.jpg"
    return newSecondImage;
}
function changeThirdImage (){
  var newThirdImage = document.querySelectorAll('.half-inner-module-image')[22].src="//snpi.dell.com/snp/images2/110/ab391669.jpg"
    return newThirdImage;
}
function changeForthImage (){
  var newForthImage = document.querySelectorAll('.half-inner-module-image')[23].src="//snpi.dell.com/snp/images2/110/ab286744_v1.jpg"
    return newForthImage;
}


// 3 - URL: https://www.dell.com/en-us/shop/power-deals/ar/8346

(function sum (){
    var  products = document.querySelectorAll('.ps-title')
    
    var total = products.length;
    
    return alert(total);
}())


