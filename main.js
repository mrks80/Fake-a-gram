let posts = [{
    'author_user_img': './img/logo_travel.png',
    'author': 'Nightmare Tours',
    'icon_dots': './img/icons/dots.png',
    'image': './img/content_travel.jpg',
    'icon_heart': './img/icons/heart.png',
    'icon_speech': './img/icons/speech-bubble.png',
    'icon_direct': './img/icons/direct-message.png',
    'icon_save': './img/icons/save.png',
    'like': 'Gefällt 2,251 mal',
    'description': 'Wir buchen, Sie fluchen!',
    'show_comments': 'Alle 58 Kommentare ansehen',
    'comments': [],
    'timeline': 'VOR 2 TAGEN',
    'icon_smiley': './img/icons/smiley.png',
},

{
    'author_user_img': './img/logo_vegan.png',
    'author': 'Vegan Pleasure ',
    'icon_dots': './img/icons/dots.png',
    'image': './img/content_vegan.jpg',
    'icon_heart': './img/icons/heart.png',
    'icon_speech': './img/icons/speech-bubble.png',
    'icon_direct': './img/icons/direct-message.png',
    'icon_save': './img/icons/save.png',
    'like': 'Gefällt 1,489 mal',
    'description': 'Iss dich gesund',
    'show_comments': 'Alle 62 Kommentare ansehen',
    'comments': [],
    'timeline': 'VOR 22 STUNDEN',
    'icon_smiley': './img/icons/smiley.png',
},

{
    'author_user_img': './img/logo_football.jpg',
    'author': 'Fußball Liebe',
    'icon_dots': './img/icons/dots.png',
    'image': './img/content_football.jpg',
    'icon_heart': './img/icons/heart.png',
    'icon_speech': './img/icons/speech-bubble.png',
    'icon_direct': './img/icons/direct-message.png',
    'icon_save': './img/icons/save.png',
    'like': 'Gefällt 3,475 mal',
    'description': 'Wir buchen, Sie fluchen!',
    'show_comments': 'Alle 124 Kommentare ansehen',
    'comments': [],
    'timeline': 'VOR 3 TAGEN',
    'icon_smiley': './img/icons/smiley.png',
},

{
    'author_user_img': './img/logo_news.jpg',
    'author': 'News Tschennel',
    'icon_dots': './img/icons/dots.png',
    'image': './img/content_news.jpg',
    'icon_heart': './img/icons/heart.png',
    'icon_speech': './img/icons/speech-bubble.png',
    'icon_direct': './img/icons/direct-message.png',
    'icon_save': './img/icons/save.png',
    'like': 'Gefällt 743 mal',
    'description': 'NEWS, NEWS, NEWS: Print stirbt aus!',
    'show_comments': 'Alle 27 Kommentare ansehen',
    'comments': [],
    'timeline': 'VOR 43 MINUTEN',
    'icon_smiley': './img/icons/smiley.png',
},
];

let followers = [{

    'user_img': './img/suggestion_logo_football.png',
    'user': 'Footie Call',
    'info': 'Fußball-Liebe ist Follower',
},
{
    'user_img': './img/suggestion_logo_news.png',
    'user': 'Nachrichten von Vorgestern',
    'info': 'Vorschläge für dich',
},

{
    'user_img': './img/suggestion_logo_travel.png',
    'user': 'Ab in den Süden',
    'info': 'Neu auf Fake-a-gram',
},
{
    'user_img': './img/suggestion_logo_vegan.png',
    'user': 'Eating Plants',
    'info': 'Vegan Pleasure',
},
];

load();

function render() {
    showContent();
    showSidebar();
}

function showContent() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {

        content.innerHTML += templateContent(i); 
    }
}

function getComments(index) {
    let htmlCode = ''; 
    for (let i = 0; i < posts[index].comments.length; i++) {
        htmlCode += `<span>${posts[index].comments[i]}</span>` 
    }
    return htmlCode; 
}

function addComment(i) {
    let comment = document.getElementById(`input_comment${i}`).value; 

    if (comment.length == 0) {
        alert("Bitte geben Sie einen Kommentar ein!");
    } else {
        posts[i]['comments'].push(comment); 
        save();
        showContent();
        document.getElementById(`input_comment${i}`).value = '';
    }
}


//================================================================================================================================

//                                 #### Sidebar ####

//================================================================================================================================


function showSidebar() {
    let follow = document.getElementById('follow_suggestion');
    follow.innerHTML = '';

    for (let j = 0; j < followers.length; j++) {
        follow.innerHTML += templateSidebar(j);
    }
}

function save() {
    let commentsAsText = JSON.stringify(posts.comments); 
    localStorage.setItem('comments', commentsAsText); 

    function load() {
        let commentsAsText = localStorage.getItem([posts].comments); 

        if (commentsAsText) { 
            posts.comments = JSON.parse(commentsAsText);
        }
    }
}

console.info('Da dies eine Übungsseite ist, führen die meisten Links nirgendwo hin. Eine Quellenangabe finden Sie unter "Datenschutzrichtlinie"!');