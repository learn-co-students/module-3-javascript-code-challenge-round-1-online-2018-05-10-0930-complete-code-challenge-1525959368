document.addEventListener('DOMContentLoaded', function() {
  const imageId = 2 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`


fetch(imageURL).then(res => res.json()).
    then(json => $('#image').attr("src", json.url))

})

function likeThis(){
    let like = parseInt($('span #likes').text())
    $('span #likes').text(like + 1)
    // NEED for this code to run? addLike()
  }


function addLike(){
   fetch('likeURL', {
      method: 'POST',
      body: {
        image_id: 2
      },
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    })
  }

  function addComment(){
    console.log($('form').serializeArray())
  }
