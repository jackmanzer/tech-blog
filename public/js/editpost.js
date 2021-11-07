


const updateButtonHandler = async (e) => {

    e.preventDefault()

    const id = document.querySelector('.create-edit-post-form').getAttribute('data-id');

    const title = document.querySelector('#edit-post-title').value.trim();
    const content = document.querySelector('#edit-post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/blogpost/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to create new post');
        }
    }
};

const delButtonHandler = async (e) => {

      e.preventDefault()

      const id = document.querySelector('.create-edit-post-form').getAttribute('data-id');

      const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
};

document
    .querySelector('#update-post-btn')
    .addEventListener('click', updateButtonHandler);

document
    .querySelector('#delete-post-btn')
    .addEventListener('click', delButtonHandler);