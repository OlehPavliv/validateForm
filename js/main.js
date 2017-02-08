
var validation = (function(){
    function sel(a){
        return document.querySelector(a);
    };
    function id(e){
        return document.getElementById(e);
    };
    var likeNumber = document.forms.likeNumber;
    var customerR = document.forms.customerR;
    var customerInf = document.forms.personInf;
    var patternLikeNumber =/[0-9]/
    console.log(likeNumber.length);
    function valLikeNumber(){
       for(var i=0 ;i<likeNumber.length; i++){
           likeNumber[i].addEventListener('input',function(){
               if(this.value<0)this.style.background='red';
               
           })
       }
    };
    
    function valCustomerR(){
        
    };
    function customerInf(){
        
    };
    valLikeNumber();
})();
