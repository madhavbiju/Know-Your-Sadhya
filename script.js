var attempt = 0;

      function allowDrop(ev) {
        ev.preventDefault();
      }

      function drag(ev) {
        var data = JSON.stringify({
          target_id: ev.target.id,
          ans: ev.target.getAttribute('data-ans')
        });
        ev.dataTransfer.setData("img", data);
        console.log();
      }

      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("img");
        ev.target.appendChild(document.getElementById(JSON.parse(data).target_id));
      }

      function verify() {
        attempt += 1;
        var ans = true;
        var c = document.getElementById('div1').childNodes;
        if (c[0] != null && c[0].dataset.ans != 'div1') {
          ans = false;
          document.getElementById("pool").appendChild(c[0]);
        }

        var c = document.getElementById('div2').childNodes;
        if (c[0] != null && c[0].dataset.ans != 'div2') {
          ans = false;
          document.getElementById("pool").appendChild(c[0]);
        }

        var c = document.getElementById('div3').childNodes;
        if (c[0] != null && c[0].dataset.ans != 'div3') {
          ans = false;
          document.getElementById("pool").appendChild(c[0]);
        }

        var c = document.getElementById('div4').childNodes;
        if (c[0] != null && c[0].dataset.ans != 'div4') {
          ans = false;
          document.getElementById("pool").appendChild(c[0]);
        }

        if (ans) {
            document.write('<h1>Correct</h1>')
        } 
        
        else {
            var x = document.getElementById("myDIV");
            x.innerHTML = "Something is wrong";
        }

        if (attempt > 2) {
          $("#showAns").show();
        }

      }

      function showAns() {
        var ansStr = "DIV1 = IMG4, DIV2 = IMG3, DIV3 = IMG2, DIV4 = IMG1";
        $("#ans_msg").html(ansStr);
      }