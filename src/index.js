document.addEventListener('DOMContentLoaded', function() {
  const imageId = 3 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

})
let url = null
let name = null
let likeCount = null
let comments = null

fetch('https://randopic.herokuapp.com/images/3').then(function(res) {
  return res.json()
  })
    .then(function(data) {

      url = data["url"]
      name = data["name"]
      likeCount = data["like_count"]
      comments = data["comments"]
    })

$('#image').attr('src', url);
$('#name').value = name
$("#likes").value = likeCount
for (var comment in comments) {
  $('#comments').append(`<li>${comment.content}</li>`)
}
