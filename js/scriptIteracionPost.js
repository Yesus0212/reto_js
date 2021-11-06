const renderPosts = (response) => {
    let posts
    if (typeof(response).normalize === 'Object') {
         posts = Object.entries(response);
    }
    else{
        posts = response
    }
   

    posts.forEach(post => {
        
        // Div contenedor de las cards
        const divBody = $('div .main__body');

        // Div contenedor de cada card
        const divCard = $('<div class="card rounded-3 mb-2"></div>');
        
        // Imagen cover de cada articulo
        const imgCover = $('<img alt="" class="img-fluid">');
        
        // DATO DINAMICO DE URL DE COVER IMAGE        
        imgCover.attr({src:post[1].coverImage});
        
        // Article que contendrá el articulo
        const article = $('<article class="card-body"></article>');
        const divdFlex = $('<div class="d-flex"></div>');
        
        const divImgUser = $('<div></div>');
        const anchorImage = $('<a href="" class="row p-0 m-0 w-75"></a>');
        const imgUser = $('<img class="rounded-circle p-0 imgUser">');
        
        // DATO DINAMICO DE URL DE IMAGE USER        
        imgUser.attr({src:post[1].userImg});
        anchorImage.append(imgUser);
        divImgUser.append(anchorImage);
        
        const divInfoUser = $('<div class="row pe-0 mb-3 lh-sm" style="margin-left:-10px;"></div>')
        
        // Revisar si el href, debe ser dinámico
        const anchorName = $('<a href="#" class="text-dark"></a>')
        
        // DATO DINAMICO DEL NOMBRE DE USUARIO
        const userName = post[1].user;
        anchorName.text(userName);
        
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
        const title = post[1].title;
        
        anchorTitle.text(title);
        h2Title.append(anchorTitle);
        divTitlePost.append(h2Title);
        
        // Div contenedor tags
        const divTagsPost = $('<div class="mb-3 text-black-50"></div>');
        
        // DATO DINAMICO PARA LOS TAGS

        const tags = Object.values(post[1].tags);
        tags.forEach(tag => {
            const anchorTag = $(`<a href="#" class="text-black-50 me-3"><span class="text-black-50">#</span>${tag}</a>`);
            divTagsPost.append(anchorTag);
        })
        
        // Div contenedor scores
        const divFooterPost = $('<div class="d-flex justify-content-between"></div>');
        const divScoresPost = $('<div class="d-flex align-items-center"></div>')
        
        const anchorReactions = $('<a href="#" class="me-3 "></a>');
        const svgReactions = $('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>');
        const paragraphReactions = $('<p class="d-inline-block text-dark m-0"></p>');
        
        // DATO DINAMICO PARA LOS REACTIONS
        const reactions = post[1].likes;
        paragraphReactions.text(reactions);
        const spanReactions = $('<span class="text-dark">&nbsp;Reactions</span>');
        
        // Se integran los elementos del Reactions
        anchorReactions.append(svgReactions);
        anchorReactions.append(paragraphReactions);
        anchorReactions.append(spanReactions);
                
        const anchorComments = $('<a href="#" class="me-3 "></a>');
        const svgComments = $('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>');
        const paragraphComments = $('<p class="d-inline-block text-dark m-0"></p>');
        
        // DATO DINAMICO PARA LOS REACTIONS
        const comments = post[1].comments;
        paragraphComments.text(comments);
        
        const spanComments = $('<span class="text-dark">&nbsp;Comments</span>');
        
        // Se integran los elementos del Comments
        anchorComments.append(svgComments);
        anchorComments.append(paragraphComments);
        anchorComments.append(spanComments);
                
        // Div contenedor read time
        const divReadTimerPost = $('<div></div>');
        const timeRead = 6;
        const smallTextTime = $(`<small class="me-1">${timeRead} min read</small>`);
        const buttonSavePost = $('<button class="btn btn-light">Delete</button>');
        buttonSavePost.attr("data-post", post[0]);
               
        buttonSavePost.click((event) => {
            postId = event.target.dataset.post;
            deletePost(postId, event);         
        });
               
        divReadTimerPost.append(smallTextTime);
        divReadTimerPost.append(buttonSavePost);
        
        divScoresPost.append(anchorReactions);
        divScoresPost.append(anchorComments);
        
        divFooterPost.append(divScoresPost);
        divFooterPost.append(divReadTimerPost);
        
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

    });    
};


const searchPosts = () => {
    $.ajax({
        method: 'GET',
        url: 'https://desafio-js-3435a-default-rtdb.firebaseio.com/posts/.json',
        data: JSON.stringify({}),
        success: (response) => {
            renderPosts(response);
        },
        error: (error) => {
            console.log(error);
        },
        async: true,
    });
};

const deletePost = (postId, event) => {
    
    console.log(event);

    $.ajax({
        method: 'DELETE',
        url: `https://desafio-js-3435a-default-rtdb.firebaseio.com/posts/${postId}.json`,
        data: JSON.stringify({}),
        success: (response) => {            
            console.log(response);
            event.target.offsetParent.remove();
        },
        error: (error) => {
            console.log(error);
        },
        async: true,
    });
};


searchPosts();



