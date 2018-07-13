const myId = window.localStorage.getItem('fam:id');
// fetch('/profile/view/'+ myId)
// .then((response) => {
//   return response.text();
// }).then((html) => {
//   // console.log(html,"<<<");
//   document.write(html)
//
//   // let page = document.createElement('html');
//   // page.innerHTML = html;
//
//   // const parser = new DOMParser();
//   // const doc = parser.parseFromString(html,"text/")
// })

window.onload = () => {

  window.location.replace('/profile/view/'+ myId);
}
