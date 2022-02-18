$(function () {
    $("").click(function () {
        // 入力された値を取得
        
        // urlを設定
        var url = "https://zipcloud.ibsnet.co.jp/api/search";
        // 送るデータを成形する
        var param = { zipcode: zipcode };
        // サーバーと通信(Ajax)
        
        $.ajax({
            type: "GET", 
            cache: false,
            data: ,
            url: https://zipcloud.ibsnet.co.jp/api/search,
            dataType: "jsonp"
        })
        .done(function (res) {
            if (res.status != 200) {
                // 通信には成功。APIの結果がエラー

                // エラー内容を表示
                $('#zip_result').html(res.message);
            } else {
                //住所を表示
                let result = data.results[0];
                $('#address1').val(result.address1);
                $('#address2').val(result.address2);
                $('#address3').val(result.address3);
                $('#kana1').val(result.kana1);
                $('#kana2').val(result.kana2);
                $('#kana3').val(result.kana3);
            }

        })
        .fail(function (error) {
            console.log(error);
            $('#zip_result').html("<p>通信エラーです。時間をおいてお試しください</p>");
        });
    });
});