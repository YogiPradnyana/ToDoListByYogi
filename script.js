const todo = document.getElementById('todo');
// Fitur Todo
// 1. Menambahkan V
// 2. Mencoret kalau sudah selesai V
// 3. Menghapus

function add() {
  // 1. mengambil nilai dari input
  let newText = document.getElementById('new_text');
  // 2. menambahkan li baru atau list todo baru
  let newTodo = '<li><span onclick="beriGaris(this)">' + newText.value + '</span>' + '<span onclick="removeBtn(this)">[x]</span></li>';
  todo.insertAdjacentHTML('afterbegin', newTodo);
  // 3. menghapus fieldnya
  newText.value = '';
}

function beriGaris(el) {
  el.classList.toggle('done');
}

function removeBtn(a) {
  a.parentElement.remove();
}
