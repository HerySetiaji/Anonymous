/*Comment Stuff*/

.blog-comment .profile {
    background: none;
    width: 56px;
    float: left;
    margin: 0 20px 0 0;
    text-align: center;
}

.profile img {
    border: 3px solid #fff;
    width: 50px;
}

.profilepic {
    /*background: url(http://3.bp.blogspot.com/-O9ZU2-OKOqs/VorCUJBLCcI/AAAAAAAABjA/ap1gz4v-2sI/s1600/Hery%2BSetiaji.jpg) no-repeat bottom center;*/
    padding: 0 0 4px 0;
}

span.nickname {
    font-size: 0.8em;
    color: #666;
}

.comment {
    /*position: absolute;*/
    float: right;
    width: 474px;
    margin: 0 0 0 0;
    padding: 15px 15px 5px 15px;
}

.author-pointer {
    position: absolute;
    top: 12px;
    left: 65px;
   /* background: url(/workspace/images/arrow-comment.png) no-repeat top left;*/
    width: 11px;
    height: 24px;
}

#comment-submit {
    float: right;
    margin-top: 10px;
}

#new-comment {
    margin-bottom: 20px;
	float:left;
}

#fresh-comment {
    padding-left: 10px;
    margin-left: 20px;
    padding-top: 1px;
    border-radius: 5px;
}

#fresh-comment .blog-comment{
	background:rgba(213, 211, 191, 0.8);
}

#new-comment p.error,#fresh-comment p.success {
    background: rgba(255,0,0,0.3);
    margin-right: 40px;
    padding: 5px;
    border-radius: 5px;
    text-shadow: 1px 1px 0px rgba(255,255,255,0.5);
    box-shadow: 0px 1px 0px rgba(0,0,0,0.3);
    font-weight: bold;
}

#fresh-comment p.success {
    background: rgba(0,255,0,0.3);
    margin-right: 0px;
}

p.reply a, #comment-submit {
    position: relative;
    border: none;
    box-shadow: none;
    text-decoration: none;
    text-shadow: 1px 1px #ccc;
    padding-top: 7px;
    padding-right: 20px;
    padding-bottom: 7px;
    padding-left: 20px;
    z-index: 1;
    background: rgba(255,255,255,0.7);
    text-transform: uppercase;
    font-size: 11px;
    color: #5C6162;
    cursor: pointer;
    border-radius: 3px;
}

p.reply a:hover, #comment-submit:hover {
    background: rgba(255,255,255,0.9);
    text-shadow: -1px -1px #ccc;
}

p.reply a:after, #comment-submit:after {
    content: '';
    /*background-image: url(/workspace/images/title/reply-sticker.png);*/
    background-repeat: no-repeat;
    width: 73px;
    height: 27px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}

p.reply a:hover:after, #comment-submit:hover:after {
    -webkit-transform: rotate(3deg);
    -moz-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    -o-transform: rotate(3deg);
    transform: rotate(3deg);
}

#content .comment p.comment-date {
    float: right;
    padding: 0 0 0 0;
    font-size: 0.7em;
    color: #999;
}

.comment-tip:before {
    content: "";
    position: absolute;
    border-top: 10px solid rgba(255, 255, 255, 0.8);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    visibility: visible;
    top: 24px;
    left: 15px;
}

.comment-tip {
    display: block;
    float: left;
    position: relative;
    margin-top: -50px;
	top:-20px;
    left: 0px;
    background: rgba(255, 255, 255, 0.8);
    padding: 5px 15px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    white-space: nowrap;
    z-index: 10;
    font-size: 11px;
}

#comment-form {
    position: relative;
}

#comment-form #comment-text-tip.comment-tip {
    margin-top: -80px;
}


#content-left footer h3 {
    margin-bottom: 10px;
    color: #828282;
    text-shadow: 1px 1px 1px #fff;
}

.blog-comment input {
    width: 90%;
    border: none;
    resize: none;
    padding: 10px;
    background: rgba(0,0,0,0.1);
    border-radius: 3px;
	color: #5C6162;
	font-family: lora;
	float:left;
}

.blog-comment textarea {
    width: 90%;
    border: none;
    resize: none;
    height: 50px;
    padding: 10px;
    background: rgba(0,0,0,0.1);
    border-radius: 3px;
	color: #5C6162;
	font-family: lora;
	float:left;
}

.blog-comment {
    background: rgba(213, 211, 191, 0.6);
    position: relative;
    float: left;
    border-radius: 3px;
}

.blog-comment .reply {
    display: block;
    float: right;
}

#content .blog-comment p {
    font-size: 12px;
}

#content .blog-comment p:first-child {
    margin-top: 0px;
}

#content .blog-comment p.comment-date {
    display: block;
    float: left;
    margin-top: 12px;
}

/*comment reply indent*/

.story.reply {
    width: 550px;
    margin-left: 30px;
}

.story.reply .comment {
    width: 434px;
}

.story.reply2 {
    width: 520px;
    margin-left: 60px;
}

.story.reply2 .comment {
    width: 404px;
}

/*end comment reply indent*/

.story {
    position: relative;
	float:left;
}

.post-details, #content p.post-details {
    text-transform: uppercase;
    font-size: 11px;
}

.float-title {
    float: left;
}

#leave-comment {
    margin-top: 17px;
    margin-left: 20px;
    float:left;
}



/*End Comment Stuff*/
