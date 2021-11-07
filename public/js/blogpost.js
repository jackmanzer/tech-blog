const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();
    const blogpost_id = document.querySelector('.blog-post').getAttribute('data-id');

    if (content && blogpost_id) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ blogpost_id, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
};

document
    .querySelector('#add-comment-form')
    .addEventListener('submit', newCommentFormHandler);