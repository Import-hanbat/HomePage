// 소스코드 하이라이트
hljs.highlightAll();
hljs.initLineNumbersOnLoad();

//var addCommentButton = document.getElementById("addCommentButton");
//var contentDeleteButton = document.getElementById("contentDeleteButton");
//var contentEditButton = document.getElementById("contentEditButton");
//var commentsCount = document.getElementById("commentsCount");
//var commentDeleteButton = document.getElementsByClassName("comment-delete-button");
//var CommentEditor = document.getElementById("commentEditor");
//var commentEditorTextArea = document.getElementById('commentEditorTextArea');
//var commentEditorBoldButton = document.getElementById('commentEditorBoldButton');
//var commentEditorItalicButton = document.getElementById('commentEditorItalicButton');
//var commentEditorUnderLineButton = document.getElementById('commentEditorUnderLineButton');
//var commentEditorCodeEditBotton = document.getElementById("commentEditorCodeEditButton");
//var commentEditorSubmitButton = document.getElementById("commentEditorSubmitButton");
//var prevContentButton = document.getElementById("prevContentButton");
//var nextContentButton = document.getElementById("nextContentButton");
//var comments = document.getElementById("comments");
//var commentWrap = document.getElementById("commentWrap");

// commentEditorTextArea에서 개행시 div 태그 대신 br로 개행
// commentEditorTextArea.onkeyup=function(){
//   var a=document.activeElement;
//   if( a.lastChild && a.lastChild.nodeName!="BR" ){
//     a.appendChild(document.createElement("br"));
//   }
// };
//commentEditorTextArea.onkeypress=function(e){
//  if( e.keyCode==13 ){
//    var selection=window.getSelection(),
//    range=selection.getRangeAt(0),
//    br=document.createElement("br");
//    range.deleteContents();
//    range.insertNode(br);
//    range.setStartAfter(br);
//    range.setEndAfter(br);
//    range.collapse(false);
//    selection.removeAllRanges();
//    selection.addRange(range);
//    return false;
//  }
//};
//
//// click addCommentButton set comment editor disply
//addCommentButton.addEventListener("click", openCommentEditor);
//function openCommentEditor() {
//    if(CommentEditor.style.display =="none") {
//        CommentEditor.style.display="block";
//    } else {
//        CommentEditor.style.display="none";
//    }
//}
//
//// click contentEditButton to edit page
//contentEditButton.addEventListener("click", toEditPage);
//function toEditPage() {
//    location.href="#"; //글쓰기 페이지 주소 입력
//}
//
//// click contentDeleteButton delet content
//contentDeleteButton.addEventListener("click", deleteContent);
//function deleteContent() {
//    let confirmDelete = false;
//    confirmDelete = confirm("삭제된 글은 복구가 불가능합니다.\n글을 삭제하시겠습니까?");
//    if(confirmDelete == true) {
//        
//    }
//}
//
//// display comment count
//setCommentCount();
//function setCommentCount() {
//    let comment = document.getElementsByClassName("comment");
//    if(comment.length == 0) {
//        commentsCount.innerText = "";
//    } else if(comment.length == 1) {
//        commentsCount.innerText = "1 Comment";
//    } else {
//        commentsCount.innerText = comment.length + " Comments";
//    }
//}
//
//// click comment-delete-button 
//for(let i = 0; i < commentDeleteButton.length; i++) {
//    commentDeleteButton[i].addEventListener("click", deleteComment);
//}
//function deleteComment() {
//    let confirmDelete = false;
//    confirmDelete = confirm("댓글을 삭제하시겠습니까?");
//    if(confirmDelete == true) {
//        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
//        setCommentCount();
//    } else {
//        return;
//    }
//    let comment = document.getElementsByClassName("comment");
//    pagination(comment.length, 1);
//    GetTarget(1);
//}
//
//// commentEditor Buttons
//commentEditorBoldButton.addEventListener('click', function () {
//    setStyle('bold');
//});
//commentEditorItalicButton.addEventListener('click', function () {
//    setStyle('italic');
//});
//commentEditorUnderLineButton.addEventListener('click', function () {
//    setStyle('underline');
//});
//function setStyle(style) {
//    document.execCommand(style);
//    focusEditor();
//}
//// 버튼 클릭 시 에디터가 포커스를 잃기 때문에 다시 에디터에 포커스를 해줌
//function focusEditor() {
//    commentEditorTextArea.focus({preventScroll: true});
//}
//// click commentEditorCodeEditButton
//commentEditorCodeEditButton.addEventListener("click", addCodeArea);
//function addCodeArea() {
//    let codeAreaPre = document.createElement("pre");
//    let codeAreaCode = document.createElement("code");
//    let newLine = document.createElement("br");
//    codeAreaPre.appendChild(codeAreaCode);
//    commentEditorTextArea.appendChild(codeAreaPre);
//    commentEditorTextArea.appendChild(newLine);
//    focusEditor();
//}
//
//// click commentEditorSubmitButton
//commentEditorSubmitButton.addEventListener("click", addComment);
//function addComment() {
//    if(commentEditorTextArea.innerText.trim() == "") {
//        alert("댓글 내용을 입력하지 않았습니다.");
//        return;
//    }
//    let newComment = document.createElement("div");
//    newComment.className = "comment";
//    newComment.appendChild(document.createElement("hr"));
//    let newCommentInfo = document.createElement("div");
//    newCommentInfo.className = "comment-info";
//    let newCommentWrittenBy = document.createElement("span");
//    newCommentWrittenBy.className = "comment-written-by";
//    newCommentWrittenBy.innerText = "new";
//    let newCommentReportingDate = document.createElement("span");
//    newCommentReportingDate.className = "comment-reporting-date";
//    let today = new Date();
//    let year = today.getFullYear();
//    let month = ('0' + (today.getMonth() + 1)).slice(-2);
//    let day = ('0' + today.getDate()).slice(-2);
//    newCommentReportingDate.innerText = year + "." + month + "." + day;
//    let newCommentDeleteButton = document.createElement("button");
//    newCommentDeleteButton.className = "comment-delete-button";
//    newCommentDeleteButton.innerHTML = "<i class='far fa-trash-alt'>";
//    newCommentDeleteButton.addEventListener("click", deleteComment);
//    let newCommentButtons = document.createElement("div");
//    newCommentButtons.className = "comment-buttons";
//    newCommentButtons.appendChild(newCommentDeleteButton);
//    let newCommentBody = document.createElement("div");
//    newCommentBody.className = "comment-body";
//    newCommentBody.innerHTML = commentEditorTextArea.innerHTML.replace(/^([\r\n\s]+|<br\s*\/?>)+|([\r\n\s]+|<br\s*\/?>)*$/gi,""); // 앞뒤 br태그 제거;
//    newCommentInfo.appendChild(newCommentWrittenBy);
//    newCommentInfo.appendChild(document.createTextNode(" "));
//    newCommentInfo.appendChild(newCommentReportingDate);
//    newComment.appendChild(newCommentInfo);
//    newComment.appendChild(newCommentButtons);
//    newComment.appendChild(newCommentBody);
//    commentWrap.appendChild(newComment);
//    commentEditorTextArea.innerHTML = "";
//    setCommentCount();
//    let comment = document.getElementsByClassName("comment");
//    pagination(comment.length, 1);
//    GetTarget(1);
//}

//highlight.js 소스코드

//페이지 화면 보여주기 소스코드... 이 부분은 서버에서 데이터 베이스 연결이 필요한 부분임

//function pagination(totalData, currentPage) {
//    // totalData 총 데이터 수
//    // current 현재 페이지
//    const dataPerPage = 5; // 한페이지에 보여질 데이터 수
//    const pageCount = 5;  // 한 화면에 보여질 페이지 수
//    const totalPage = Math.ceil(totalData / dataPerPage); // 총 페이지 수 
//    const pageGroup = Math.ceil(currentPage / pageCount); // 페이지 그룹
//
//    let last = pageGroup * pageCount; // 화면에 보여질 마지막 페이지 번호
//    if(last > totalPage) {
//        last = totalPage;
//    }
//    let first = last - (pageCount - 1); // 화면에 보여질 첫번째 페이지 번호
//    const next = last + 1;
//    const prev = first - 1;
//    if(totalPage < 1) {
//        first = last;
//    }
//
//    const pages = $("#commentPages");
//    pages.empty();
//
//    if(first > 5) {
//        pages.append("<li class=\"pagination-item\">" + "<a onclick=\"GetTarget(" + prev + ");\" style='margin-left:2px'>&lang; prev</a><li>");   
//    } 
//    for(let i = first; i <= last; i++) {
//        if(currentPage === (i)) {
//            pages.append("<li class=\"pagination-item\">" + "<a onclick=\"GetTarget(" + i + ");\" style='margin-left:2px'>" + i + "</a><li>");   
//        } else if(i > 0) {
//            pages.append("<li class=\"pagination-item\">" + "<a onclick=\"GetTarget(" + i + ");\" style='margin-left:2px'>" + i + "</a><li>"); 
//        }
//    }
//    if (next > 5 && next < totalPage) {
//        pages.append("<li class=\"pagination-item\">" + "<a onclick=\"GetTarget(" + next + ");\" style='margin-left:2px'>next &rang;</a><li>"); 
//    }
//}
//function GetTarget(pageNum) {
//    const pageCount = 5;
//    let comment = document.getElementsByClassName("comment");
//    for(let i = 0; i < comment.length; i++) {
//        comment[i].style.display = "none";
//    }
//    let first = pageNum * pageCount - 5;
//    let last = pageNum * pageCount;
//    if(last > comment.length) {
//        last = comment.length;
//    }
//    for(let i = first; i < last; i++) {
//        comment[i].style.display = "block";
//    }
//}
//
//// click prev|nextContentButton to another page
//prevContentButton.addEventListener("click", toAnotherContent);
//nextContentButton.addEventListener("click", toAnotherContent);
//function toAnotherContent() {
//    location.href="#";
//}