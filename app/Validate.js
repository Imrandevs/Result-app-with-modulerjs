 class Validate {

     //alert massage
     static setMsg(msg, type = "danger") {

         return `<p class="alert alert-${type}"> ${msg}<button class="close" data-dismiss = "alert" >&times;</button></p>`;


     }

     //empty value check

     static empty(value) {

         if (value == '') {

             return true;

         } else {

             return false;
         }

     }


 }

 export default Validate;