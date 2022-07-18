function templateContent(i) {
    const element = posts[i];
    return /*html*/ `
        <div class="follower_content">

            <div class="follower_header">
            <div class="follower_header_left">
                <a href=""><img class="follower_user_img" src="${element.author_user_img}"></a>
                <a href="#">${element.author}</a>
            </div>

            <div class="follower_header_right">
                <img class="icons" src="${element.icon_dots}">
            </div>
            </div>
            <div class="follower_image">
                <img src="${element.image}">
            </div>

            <div class="follower_footer">
                <div class="icons_left">
                    <img src="${element.icon_heart}">
                    <img src="${element.icon_speech}">
                    <img src="${element.icon_direct}">
                </div>
                <div class="icon_right">
                    <img src="${element.icon_save}">
                </div>
            </div>

            <div class="like">
                <span>${element.like}</span>
            </div>

            <div class="description">
                <span>${element.author}</span>
                <p>${element.description}</p>
            </div>    
            <div class="comment_info">
                <span class="show_comments">${element.show_comments}</span>
                <div class="posted_comments">${getComments(i)}</div>
                <span class="timeline">${element.timeline}</span>
            </div>                

            <div class="post_comment">
                <div class="post_comment_left">
                <img src="${element.icon_smiley}">
                <input id="input_comment${i}" type="text" placeholder="Kommentieren ...">
                </div>

                <div onclick="addComment(${i})" class="post_comment_right">
                    <button>POSTEN</button>
                </div>
            </div>
        </div>
        `;
}

function templateSidebar(j) {
    const cell = followers[j];
    return `
       
        <div class="suggestion">               
            <div class="suggestion_img">
                <a href=""><img src="${cell.user_img}"></a>
        </div>

        <div class="suggestion_container">
            <div class="suggestion_info">
                <a href="#">${cell.user}</a>
                <span class="span_info">${cell.info}</span>
            </div>   
            
            <div class="follow_invitation">
                <a href="#">Folgen</a>
            </div>
        </div>   
    `;
    }