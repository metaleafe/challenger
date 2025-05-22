$(document).ready(function() {
    // 効果音用オーディオを準備
    const fishPopSound = new Audio("https://www.soundjay.com/button/sounds/button-16.mp3");

    // 最初にfish1を表示
    $("#fish").css("display", "block");

    // fish2, fish3 を遅延表示
    setTimeout(() => $("#fish2").css("display", "block"), 2000);
    setTimeout(() => $("#fish3").css("display", "block"), 4000);

    // フォーカス時にアクティブスタイル適用
    $('input[type="text"], input[type="email"], textarea, input[type="radio"]').focus(function() {
        var id = $(this).attr("id") || $(this).attr("name");
        var group = $("#" + id + "-form");
        group.removeClass("formgroup-error").addClass("formgroup-active");
    });

    // ブラー時にアクティブ解除
    $('input[type="text"], input[type="email"], textarea').blur(function() {
        var id = $(this).attr("id") || $(this).attr("name");
        var group = $("#" + id + "-form");
        group.removeClass("formgroup-active");
    });

    // エラースタイル
    function errorfield(field) {
        $(field)
            .removeClass("formgroup-active formgroup-success")
            .addClass("formgroup-error");
    }

    // 成功スタイル
    function successfield(field) {
        $(field)
            .removeClass("formgroup-error formgroup-active")
            .addClass("formgroup-success");
    }

    // 送信完了メッセージ
    function showCompletionMessage() {
        if (!$("#form-success-message").length) {
            $("#waterform").after(
                '<p id="form-success-message" style="color: green; font-size: 1.5em; text-align: center; margin-top: 20px;">送信が完了しました！</p>'
            );
        }
    }

    // 魚たちを逃がす処理
    function scareAllFish() {
        $(".fish").each(function() {
            const $fish = $(this);
            $fish.addClass("clicked");
            fishPopSound.play(); // 効果音再生
            setTimeout(() => {
                $fish.fadeOut(500, function() {
                    $(this).remove();
                });
            }, 1000);
        });
    }

    // フォーム送信処理
    $("#waterform").submit(function(e) {
        e.preventDefault();
        var stopsubmit = false;

        if ($("#name").val().trim() === "") {
            errorfield("#name-form");
            stopsubmit = true;
        } else {
            successfield("#name-form");
        }

        if ($("#email").val().trim() === "") {
            errorfield("#email-form");
            stopsubmit = true;
        } else {
            successfield("#email-form");
        }

        if (!$('input[name="student"]:checked').val()) {
            errorfield("#student-form");
            stopsubmit = true;
        } else {
            successfield("#student-form");
        }

        if (!stopsubmit) {
            showCompletionMessage();
            scareAllFish(); // 魚逃げる！
        }

        return !stopsubmit;
    });

    // 魚をクリックで泡+フェードアウト削除
    $(".fish").on("click", function() {
        const $fish = $(this);
        $fish.addClass("clicked");
        fishPopSound.play(); // 効果音再生
        setTimeout(() => {
            $fish.fadeOut(500, function() {
                $(this).remove();
            });
        }, 1000);
    });
});