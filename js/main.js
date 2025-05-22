$(function () {
    /*=================================================
    ハンバーガ―メニュー
    ===================================================*/
    // ハンバーガーメニューをクリックした時
    $(".box").on("click", function () {
      $("header").toggleClass("open");
    });
    // メニューのリンクをクリックした時
    $("#nav ul").on("click", function () {
      $("header").toggleClass("open");
    });



    const cardsContainer = document.querySelector(".main-con");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest("＃mainview .card");

  if (!target) return;

  cardsContainer.querySelectorAll("＃mainview .card").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});
  });


//panelの切り替え
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
//Q&A
// question.indexのアコーディオンメニュー
$(function(){
  // アコーディオンメニューのラベルがクリックされた場合
  $("#ac-menu .label").on("click", function() {
    // labelクラスの次の要素（detailクラス）の表示・非表示を切り替える
    $(this).next().slideToggle();
    // labelクラスにopenクラスを追加したり削除したりする
    // openクラスの追加、削除を行うことでラベルの「－」と「＋」の切り替えを行う
    $(this).toggleClass("open");
  });
});
      
      
