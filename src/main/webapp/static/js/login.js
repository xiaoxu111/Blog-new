$(function () {
    //得到焦点
    $("#password").focus(function () {
        $("#left_hand").animate({
            left: "150",
            top: " -38"
        }, {
            step: function () {
                if (parseInt($("#left_hand").css("left")) > 140) {
                    $("#left_hand").attr("class", "left_hand");
                }
            }
        }, 2000);
        $("#right_hand").animate({
            right: "-64",
            top: "-38px"
        }, {
            step: function () {
                if (parseInt($("#right_hand").css("right")) > -70) {
                    $("#right_hand").attr("class", "right_hand");
                }
            }
        }, 2000);
    });
    //失去焦点
    $("#password").blur(function () {
        $("#left_hand").attr("class", "initial_left_hand");
        $("#left_hand").attr("style", "left:100px;top:-12px;");
        $("#right_hand").attr("class", "initial_right_hand");
        $("#right_hand").attr("style", "right:-112px;top:-12px");
    });
});

function vali() {
    var userName = $("#userName").val();
    var password = $("#password").val();
    if (userName == null || userName == "") {
        $("#error").html("用户名不能为空！");
        return false;
    }
    if (password == null || password == "") {
        $("#error").html("密码不能为空！");
        return false;
    }
    //滑块验证码
    // 2088556198
    //1300085971
    var valicode = new TencentCaptcha('2088556198', function (res) {
        if (res.ret == 0) {
            var form = document.getElementById("loginForm");
            form.submit();
        }
        else {
            alert("验证出错！");
        }
    });
    valicode.show();
}


