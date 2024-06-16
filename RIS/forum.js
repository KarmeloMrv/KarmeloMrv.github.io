// Function to toggle comment form visibility
function toggleCommentForm(formId) {
    var commentForm = document.getElementById(formId);
    if (commentForm.style.display === "none") {
        commentForm.style.display = "block";
    } else {
        commentForm.style.display = "none";
    }
}

// Function to add a new comment
function addComment(topicId) {
    var commentAuthorId = "commentAuthor" + topicId.substring(5); // Assuming topicId format is "topicX"
    var commentContentId = "commentContent" + topicId.substring(5);
    var commentAuthor = document.getElementById(commentAuthorId).value;
    var commentContent = document.getElementById(commentContentId).value;

    if (commentAuthor.trim() === '' || commentContent.trim() === '') {
        alert("Please enter both your name and comment.");
        return;
    }

    var commentsContainer = document.getElementById("comments" + topicId.substring(5));
    if (!commentsContainer) {
        // Attempt to find comments container with a different ID format
        commentsContainer = document.getElementById("comments" + topicId.charAt(topicId.length - 1));
        if (!commentsContainer) {
            console.error("Comments container not found.");
            return;
        }
    }

    var newCommentDiv = document.createElement("div");
    newCommentDiv.className = "comment";
    newCommentDiv.innerHTML = `
        <div class="author">${commentAuthor}</div>
        <div class="content">${commentContent}</div>
    `;

    commentsContainer.appendChild(newCommentDiv);

    // Clear input fields
    document.getElementById(commentAuthorId).value = '';
    document.getElementById(commentContentId).value = '';

    // Hide comment form after adding comment
    var commentForm = document.getElementById("commentForm" + topicId.substring(5));
    if (commentForm) {
        commentForm.style.display = "none";
    } else {
        console.error("Comment form not found.");
    }
}



// Function to add a new forum topic
function addPost() {
    var topicTitle = document.getElementById("topicTitle").value;
    var topicAuthor = document.getElementById("topicAuthor").value;
    var postContent = document.getElementById("postContent").value;

    if (topicTitle.trim() === '' || topicAuthor.trim() === '' || postContent.trim() === '') {
        alert("Please fill out all fields.");
        return;
    }

    var forumContainer = document.querySelector(".forum-container");

    // Generate unique ID for new topic
    var newTopicId = "topic" + (forumContainer.children.length + 1);

    // Create HTML structure for new topic
    var newTopicDiv = document.createElement("div");
    newTopicDiv.className = "forum-topic";
    newTopicDiv.id = newTopicId;
    newTopicDiv.innerHTML = `
        <h2>${topicTitle}</h2>
        <div class="author">Posted by ${topicAuthor}</div>
        <div class="date">Posted on ${getCurrentDate()}</div>
        <div class="forum-post">
            <div class="author">${topicAuthor}</div>
            <div class="content">${postContent}</div>
            <button class="btn btn-primary post-comment-btn" onclick="toggleCommentForm('commentForm${newTopicId.substring(5)}')">Post Comment</button>
            <form id="commentForm${newTopicId.substring(5)}" class="comment-form" style="display: none;">
                <div class="form-group">
                    <label for="commentAuthor${newTopicId.substring(5)}">Your Name:</label>
                    <input type="text" id="commentAuthor${newTopicId.substring(5)}" name="commentAuthor" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="commentContent${newTopicId.substring(5)}">Comment:</label>
                    <textarea id="commentContent${newTopicId.substring(5)}" name="commentContent" class="form-control" rows="2" required></textarea>
                </div>
                <button type="button" class="btn btn-primary" onclick="addComment('${newTopicId}')">Add Comment</button>
            </form>
            <div class="comments-container" id="comments${newTopicId.substring(5)}">
                <!-- Comments -->
            </div>
        </div>
    `;

    forumContainer.appendChild(newTopicDiv);

    // Clear input fields
    document.getElementById("topicTitle").value = '';
    document.getElementById("topicAuthor").value = '';
    document.getElementById("postContent").value = '';

    // Hide modal after adding topic
    $('#addTopicModal').modal('hide');
}

// Function to get current date in "Month Day, Year" format
function getCurrentDate() {
    var currentDate = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}
