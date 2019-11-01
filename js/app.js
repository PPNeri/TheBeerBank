var listFav = new Array();

//Função para add a favorita

function addFav(star, name) {  
  star.classList.toggle('fa-star');
  star.classList.toggle('fa-star-o');

  $.get("https://api.punkapi.com/v2/beers?beer_name="+name, function(data, status){                
    $.each( data, function( key, value ) {
      var isFav = false;
      listFav.forEach((f)=>{
        if(value.name == f.name ){
          console.log("REMOVE");
          listFav.splice($.inArray(value, listFav),1);
          isFav = true;
        }
      });
        if(!isFav){
          console.log("ADD");
          listFav.push(value);                    
        }                    
    });
  });
}
//Lista de favoritos

function listFavourite(){
$("#home").empty();
listFav.forEach((value)=>{
$("#home").append(

'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
  '<div class="shadow card bg-white mb-4">'+
    '<div class="text-right">'+
      '<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
    '</div>'+
  '<div class="text-center">'+
    '<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
  '</div>'+
  '<div class="card-body text-center">'+
    '<h4 class="card-text">'+value.name+'</h4>'+
    '<p class="card-text">'+value.tagline+'</p>'+

//MODAL-----------------------------------------

      '<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
        '<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
          '<div class="modal-dialog" role="document">'+
            '<div class="modal-content">'+

  //------------------CABEÇARIO DO MODAL

              '<div class="modal-header">'+
                '<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
                '</button>'+
              '</div>'+
  //-------------------FIM CABEÇARIO MODAL
  //-------------------INICIO BODY
              '<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
                '<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
                  '<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
                    '<div class="modal-body" style="color:gray">'+value.description+'</div>'+
                      '<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
                        '<div class="modal-body" style="color:gray">'+
                          '<ul style=text-align:left>'+value.food_pairing+'</ul>'+
  //------------------FIM BODY
  //------------------INICIO FOOTER
                            '<div class="modal-footer">'+
                              '<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
                            '</div>'+
                            '<div class="card " id="alsolikecard">'+
                              '<img src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
                              '<div class="card-body" id="alsolikecard">'+
                                '<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
                              '</div>'+
                            '</div>'+
                        '<div class="card " id="alsolikecard">'+
                          '<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
                            '<div class="card-body" id="alsolikecard">'+
                              '<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
                            '</div>'+
                        '</div>'+
                        '<div class="card " id="alsolikecard">'+
                          '<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
                            '<div class="card-body" id="alsolikecard">'+
                              '<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
                            '</div>'+
                        '</div>'+
                        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
                      '</div>'+
                   '</div>'+
                  '</div>'+
              '</div>'+
            '</div>'+
          '</div>'
);
});
}

function getBeers(){

$("#home").empty();
$.get("https://api.punkapi.com/v2/beers?page=2&per_page=80", function(data, status){                
$.each( data, function( key, value ) {
var isFav = false;  
listFav.forEach((f)=>{
if(value.name == f.name ){
isFav = true;
$("#home").append(

'<div  class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">' +value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+


//MODAL-----------------------------------------

'<button type="button"class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>'



);
return;
}
});

if(!isFav){
$("#home").append('<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap" >'+
'</div>'+
'<div class="card-body text-center" >'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+

//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>'

);

} 
});                                        
});

}



function searchBeer(){
var name = $("#search").val();
$("#home").empty();
$.get("https://api.punkapi.com/v2/beers?beer_name="+ name, function(data, status){                
$.each( data, function( key, value ) {               
var isFav = false;
listFav.forEach((f)=>{
if(value.name == f.name ){
isFav = true;
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>'

);
return;_
}
});
if(!isFav){
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
} 

});
});
}

//Funções para pesquisa avançada-------------------------------------------------------
//--------------------------------------------------------------------------------------MaxABV
function searchBeerByMaxAbv(){
var maxAbv = $("#maxAbv").val();
$("#home").empty();
$.get("https://api.punkapi.com/v2/beers?abv_gt="+ maxAbv, function(data, status){                
$.each( data, function( key, value ) {               
var isFav = false;
listFav.forEach((f)=>{
if(value.name == f.name ){
isFav = true;
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
//'<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
return;
}
});
if(!isFav){
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
//'<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
} 

});
});
}

//--------------------------------------------------------------------------------------MinABV

function searchBeerByMinAbv(){
var minAbv = $("#minAbv").val();
$("#home").empty();
$.get("https://api.punkapi.com/v2/beers?abv_lt="+ minAbv, function(data, status){                
$.each( data, function( key, value ) {               
var isFav = false;
listFav.forEach((f)=>{
if(value.name == f.name ){
isFav = true;
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
//'<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
return;
}
});
if(!isFav){
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
// '<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
} 

});
});
}

//--------------------------------------------------------------------------------------MaxIbu   

function searchBeerByMaxIbu(){
var maxIbu = $("#maxIbu").val();
$("#home").empty();
$.get("https://api.punkapi.com/v2/beers?ibu_gt="+ maxIbu, function(data, status){                
$.each( data, function( key, value ) {               
var isFav = false;
listFav.forEach((f)=>{
if(value.name == f.name ){
isFav = true;
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
// '<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
return;
}
});
if(!isFav){
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
// '<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
} 

});
});
}

//--------------------------------------------------------------------------------------MinIbu
function searchBeerByMinIbu(){
var minIbu = $("#minIbu").val();
$("#home").empty();
$.get("https://api.punkapi.com/v2/beers?ibu_lt="+ minIbu, function(data, status){                
$.each( data, function( key, value ) {               
var isFav = false;
listFav.forEach((f)=>{
if(value.name == f.name ){
isFav = true;
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
// '<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
return;
}
});
if(!isFav){
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
// '<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
} 

});
});
}

//--------------------------------------------------------------------------------------MaxEBC

function searchBeerByMaxEbc(){
var maxEbc = $("#maxEbc").val();
$("#home").empty();
$.get("https://api.punkapi.com/v2/beers?ebc_gt="+ maxEbc, function(data, status){                
$.each( data, function( key, value ) {               
var isFav = false;
listFav.forEach((f)=>{
if(value.name == f.name ){
isFav = true;
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
//'<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
return;
}
});
if(!isFav){
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
//'<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
} 

});
});
}
function searchBeerByMinEbc(){
var minEbc = $("#minEbc").val();
$("#home").empty();
$.get("https://api.punkapi.com/v2/beers?ebc_lt="+ minEbc, function(data, status){                
$.each( data, function( key, value ) {               
var isFav = false;
listFav.forEach((f)=>{
if(value.name == f.name ){
isFav = true;
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
//'<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
return;
}
});
if(!isFav){
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
// '<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
} 

});
});
}
function searchBeerByBrewedBefore(){
var b_Before = $("#b_Before").val();
$("#home").empty();
$.get("https://api.punkapi.com/v2/beers?brewed_before="+ b_Before, function(data, status){                
$.each( data, function( key, value ) {               
var isFav = false;
listFav.forEach((f)=>{
if(value.name == f.name ){
isFav = true;
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
//'<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
return;
}
});
if(!isFav){
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
// '<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
} 

});
});
}
function searchBeerByBrewedAfter(){
var b_After = $("#b_After").val();
$("#home").empty();
$.get("https://api.punkapi.com/v2/beers?brewed_after="+ b_After, function(data, status){                
$.each( data, function( key, value ) {               
var isFav = false;
listFav.forEach((f)=>{
if(value.name == f.name ){
isFav = true;
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
// '<p class="card-text">'+value.description+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
return;
}
});
if(!isFav){
$("#home").append(
'<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto">'+
'<div class="shadow card bg-white mb-4">'+
'<div class="text-right">'+
'<i onclick="addFav(this, \''+value.name+'\')" class="fa fa-star-o mr-2 mt-2"></i>'+
'</div>'+
'<div class="text-center">'+
'<img class="card-img-top" src="'+value.image_url+'" alt="Card image cap">'+
'</div>'+
'<div class="card-body text-center">'+
'<h4 class="card-text">'+value.name+'</h4>'+
'<p class="card-text">'+value.tagline+'</p>'+
//MODAL-----------------------------------------

'<button type="button" onclick="teste()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+value.id+'" style="margin:10px">Veja mais</button>'+
'<div class="modal fade" id="exampleModal'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog" role="document">'+
'<div class="modal-content">'+

//------------------CABEÇARIO DO MODAL

'<div class="modal-header">'+
'<h5 class="modal-title" style="color:orange">'+value.name+'</h5><br></br>'+
'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>'+
'</button>'+
'</div>'+
//-------------------FIM CABEÇARIO MODAL
//-------------------INICIO BODY
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="modal-body" style="color:gray">'+value.tagline+'</div>'+
'<div class="modal-body" style="color:gray"><strong>IBU: </strong> '+value.ibu+' <strong>ABV: </strong>'+value.abv+' % <strong> EBC: </strong>'+value.ebc+'</div>'+
'<div class="modal-body" style="color:gray">'+value.description+'</div>'+
'<div class="modal-body" style="color:gray"><strong>Best Serverd With:</strong></div>'+
'<div class="modal-body" style="color:gray">'+
'<ul style=text-align:left>'+
''+value.food_pairing+''+
'</ul>'+
//------------------FIM BODY
//------------------INICIO FOOTER
'<div class="modal-footer">'+
'<h4 class ="title ml-4 mt-5" id="alsolike">You might also like:</h4>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img style="width:20%;" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<div class="card " id="alsolikecard">'+
'<img class="modal-img-top smallimg" src="'+value.image_url+'" class="img-fluid" alt="Responsive image">'+
'<div class="card-body" id="alsolikecard">'+
'<h5 class="card-title" style="color: grey">'+value.name+'</h5>'+
'</div>'+
'</div>'+
'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div></div></div>');
} 

});
});
}

$(document).ready(function(){

getBeers();
});

$(window).scroll(function() {
if ($(window).scrollTop() == $(document).height() - $(window).height() && $('#search-input').val() === "") {
// ajax call get data from server and append to the div
//let i=2;
if (i < 6) {
fetch(`https://api.punkapi.com/v2/beers?page=${i}&per_page=80`)
.then(function(resp) {
return resp.json();
})
.then(function(data) {
escrever(data);
});
i++;
}
}
});