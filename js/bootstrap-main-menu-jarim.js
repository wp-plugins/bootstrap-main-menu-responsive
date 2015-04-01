jQuery(document).ready(function($) 
{


    
    

  
});   

(function($) 
{
    var menu_header_visible_option_bmmj = $("#my-header-visible-bootstrap-option").text();
    //alert(menu_header_visible_option_bmmj);
    if (menu_header_visible_option_bmmj!="1")
    {
        //alert("INSIDE"+menu_header_visible_option_bmmj);
        //$("#primary-navigation").html("");
        //$(".menu-mainmenu-container").html("");
        //$("#masthead").html("");   
        $("#masthead").css("display","none"); 
    }
    else
    {
        $("#masthead").css("display","block");
        
    }
    
})(jQuery);