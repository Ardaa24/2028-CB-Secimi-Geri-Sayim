
        // Seçim Tarihini Al
        var countDownDate = new Date("May 7, 2028 09:00:00").getTime();

        // Güncelle
        var x = setInterval(function () {

        
            var now = new Date().getTime();

            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            
            document.getElementById("mainTitle").innerHTML = days + " gün " + hours + " saat " +
                minutes + " dakika " + seconds + " saniye ";

            
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("mainTitle").innerHTML = "EXPIRED";
            }
        }, 1000);