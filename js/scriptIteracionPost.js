// Div contenedor de las cards
const divBody = $('div .main__body');

// Div contenedor de cada card
const divCard = $('<div class="card rounded-3 mb-2"></div>');

// Imagen cover de cada articulo
const imgCover = $('<img alt="" class="img-fluid">');

// DATO DINAMICO DE URL DE COVER IMAGE
const urlCover = "https://res.cloudinary.com/practicaldev/image/fetch/s--0Lx4Bcnv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wlk4c0iq9xqfg0xgmzoy.png";
imgCover.attr({src:urlCover});

// Article que contendrá el articulo
const article = $('<article class="card-body"></article>');
const divdFlex = $('<div class="d-flex"></div>');

const divImgUser = $('<div></div>');
const anchorImage = $('<a href="" class="row p-0 m-0 w-75"></a>');
const imgUser = $('<img class="rounded-circle p-0">');

// DATO DINAMICO DE URL DE IMAGE USER
const urlUser = "https://res.cloudinary.com/practicaldev/image/fetch/s--9vzdT4Ts--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/243850/50980395-72a9-45f6-ae80-ed8aa49b87d6.jpeg";
imgUser.attr({src:urlUser});
anchorImage.append(imgUser);
divImgUser.append(anchorImage);

const divInfoUser = $('<div class="row pe-0 mb-3 lh-sm" style="margin-left:-10px;"></div>')

// Revisar si el href, debe ser dinámico
const anchorName = $('<a href="#" class="text-dark"></a>')

// DATO DINAMICO DEL NOMBRE DE USUARIO
anchorName.text("Name");

// Revisar si el href, debe ser dinámico
const anchorTimePost = $('<a href="#" class="text-black-50"></a>')
const time = $('<time></time>');

// Revisar si el datetime, debe ser dinámico
time.attr({datetime:"PT2H30M"});
time.text("2H 30m");
anchorTimePost.append(time);

divInfoUser.append(anchorName);
divInfoUser.append(anchorTimePost);

// Div contenedor titulo y tags
const divPost = $('<div class="ms-5"></div');

// Div contenedor Titulo
const divTitlePost = $('<div class="card-title mb-3"></div>');
const h2Title = $('<h2></h2');
const anchorTitle = $('<a href="./pages/post.html" class="text-dark fw-bolder"></a>');

// DATO DINAMICO PARA EL TITULO
const title = "I built a social network for developers to showcase their projects";

anchorTitle.text(title);
h2Title.append(anchorTitle);
divTitlePost.append(h2Title);

// Div contenedor tags
const divTagsPost = $('<div class="mb-3 text-black-50"></div>');

// DATO DINAMICO PARA LOS TAGS
const tag = "showdev";

const anchorTag = $(`<a href="#" class="text-black-50 me-3"><span class="text-black-50">#</span>${tag}</a>`);
divTagsPost.append(anchorTag);


// Div contenedor scores
const divFooterPost = $('<div class="d-flex justify-content-between"></div>');
const divScoresPost = $('<div class="d-flex align-items-center"></div>')

const anchorReactions = $('<a href="#" class="me-3 "></a>');
const svgReactions = $('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>');
const paragraphReactions = $('<p class="d-inline-block text-dark m-0"></p>');

// DATO DINAMICO PARA LOS REACTIONS
const reactions = "1031";
paragraphReactions.text(reactions);

const spanReactions = $('<span class="text-dark"> reactions</span>');

anchorReactions.append(svgReactions);
anchorReactions.append(paragraphReactions);
anchorReactions.append(spanReactions);


divScoresPost.append(anchorReactions);
divFooterPost.append(divScoresPost);



divPost.append(divTitlePost);
divPost.append(divTagsPost);
divPost.append(divFooterPost);
















divdFlex.append(divImgUser);
divdFlex.append(divInfoUser)
article.append(divdFlex);
article.append(divPost);

divCard.append(imgCover);
divCard.append(article);
divBody.append(divCard);