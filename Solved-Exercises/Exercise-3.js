//JQuery
//URL https://www.dell.com/en-us/shop/dell-laptops/sc/laptops

$(document).ready(function(){
    $('.anavmfe__accordion__item__name').clone().prependTo( $('#cat-cards'));
    $('.anavmfe__accordion__item__name').wrap('<a class="filter-class"></a>').css({"display": "inline", "margin-right": "20px"});
    $('.filter-class').on('click', function(){
        var filterItem = document.querySelectorAll('.anavmfe_accordion_row_item input')
        var filterValue = "/en-us/shop/dell-laptops/sr/laptops/ready-to-ship?appliedRefinements="
        var filterBtn = document.querySelectorAll('.filter-class');

        for (i = 0; i < filterBtn.length; i++) {
            filterBtn[i].addEventListener('click', function (e) {
                for (j = 0; j < filterItem.length; j++) {
                    if (filterItem[j].dataset.metrics.includes("Shipping")) { //Trocar shipping por uma variável
                    filterValue = filterValue + (filterItem[j].value) + ","
                    }
                }
                for (k = 0; k < filterBtn.length; k++) {
                filterBtn[k].href = filterValue
                }
            })
        }
    });
})
// Nesse exercício tive um pouco de dificuldade e não consegui uma solução para pegar o nome de cada categoria de filtros de forma dinâmica. No momento ele só funciona com o item "Shipping"
// Deixei uma indicação do local em que eu colocaria a variável para inserir essas categorias de maneira dinâmica para que cada item tenha seu redirecionamento correto


