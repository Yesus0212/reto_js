// Div contenedor de las cards
const divBody = $('div .main__body');

// Div contenedor de cada card
const divCard = $('<div class="card rounded-3 mb-2"></div>');

// Imagen cover de cada articulo
const imgCover = $('<img alt="" class="img-fluid">');
const urlCover = "https://res.cloudinary.com/practicaldev/image/fetch/s--QLm_gIcF--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/417615/142b6299-2605-443a-8bb7-a0bb4f6b4839.jpeg";
imgCover.attr({src:urlCover});

// Article que contendrá el articulo
const article = $('<article class="card-body"></article>');
const divdFlex = $('<div class="d-flex"></div>');
const divInfoUser = $('<div></div>');
const anchorImage = $('<a href="" class="row p-0 m-0 w-75"></a>');
const imgUser = $('<img class="rounded-circle p-0">');
const urlUser = "https://res.cloudinary.com/practicaldev/image/fetch/s--QLm_gIcF--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/417615/142b6299-2605-443a-8bb7-a0bb4f6b4839.jpeg";
imgUser.attr({src:urlUser});

anchorImage.append(imgUser);
divInfoUser.append(anchorImage);
divdFlex.append(divInfoUser);
article.append(divdFlex);


divCard.append(imgCover);
divCard.append(article);
divBody.append(divCard);