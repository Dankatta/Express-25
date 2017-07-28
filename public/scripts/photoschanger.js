          var photos=['https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/18198281_428630414167547_8997952826091660857_n.jpg?oh=c9653faddf66d77bdf2a719f093ba6be&oe=59FCA538',
                    'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/13076648_231185877245336_5447094399589150317_n.jpg?oh=386e7c7e625bc9ba04dda5d4c94d6f93&oe=5A010792',
                    'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/17309572_404793279884594_8729939018330478097_n.jpg?oh=57b4eb3abdf6e433b88653ed62e01bc0&oe=59F5434E',
                    'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/14448765_312189742478282_1564679326148880061_n.jpg?oh=809b9eb17fac2c99e50ea358d9dbab19&oe=5A38230E',
                    'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/14359233_311641689199754_2756973997075237776_n.jpg?oh=de58a0c946dc78e24a2deaabc376c8ba&oe=59EE75D5'
                ]
            var n = 0;
            var f=setInterval(change,3000);

            function change() {
            var slide1=document.getElementById('gallery1');
            var slide2=document.getElementById('gallery2');
            var slide3=document.getElementById('gallery3');
                n=n%photos.length
            var t=(n+1)%photos.length;
            var t1=(n+2)%photos.length;
            slide1.src=photos[n];
            slide2.src=photos[t];
            slide3.src=photos[t1];
            n=n+1;
        }