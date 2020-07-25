const container = document.querySelector(".container");

const loading = document.querySelector(".loading");

async function getPost() {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${getRandomNo()}`
  );
  const postData = await postResponse.json();
  addDataToDOM(postData);
}
getPost();
getPost();
getPost();
getPost();
getPost();

function getRandomNo() {
  return Math.floor(Math.random() * 100) + 1;
}

function addDataToDOM(postData) {
  let createDiv = document.createElement("div");
  createDiv.classList.add("box");
  createDiv.innerHTML = `
     
        <h2>${postData.title}</h2>
        <div>${postData.body}</div>

`;
  container.appendChild(createDiv);
  loading.classList.remove('show')
}

window.addEventListener('scroll', () =>{
  const {clientHeight,scrollTop,scrollHeight} = document.documentElement
  if(clientHeight + scrollTop >= scrollHeight){
    console.log('to bottom')
    showLoading();
  }
})
function showLoading(){
  loading.classList.add('show');
  //loadmore data
      setTimeout(getPost, 1000)

  //hide loading

}