document.getElementById("add-pros").addEventListener("click", function () {
    // Yangi div yaratish
    const newDiv = document.createElement("div");
    newDiv.className = "new-div"; // Divga class qo'shish
    newDiv.contentEditable = "true"; // Yozish uchun edit qilish imkoniyati
    newDiv.textContent = "Nimadur kiriting";
  
    // Divni konteynerga qo'shish
    document.getElementById("add").appendChild(newDiv);
  });

document.getElementById("add-cons").addEventListener("click", function () {
    const newDiv = document.createElement("div");
    newDiv.className = "new-div";
    newDiv.contentEditable = "true";
    newDiv.textContent = "Nimadur kiriting";
    document.getElementById("add2").appendChild(newDiv);
});

  