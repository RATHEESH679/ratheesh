document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const postContent = document.getElementById('postContent').value;
    const postImage = document.getElementById('postImage').files[0];

    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const contentPara = document.createElement('p');
    contentPara.textContent = postContent;
    postDiv.appendChild(contentPara);

    if (postImage) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(postImage);
        postDiv.appendChild(img);
    }

    document.getElementById('posts').prepend(postDiv);

    // Clear the form
    document.getElementById('postForm').reset();
});
