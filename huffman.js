  
  // node class is the basic structure
  // of each node present in the Huffman - tree.
  class HuffmanNode
  {
      constructor()
      {
          this.data = 0;
          this.c = '';
          this.left = this.right = null;
      }
  }
  var final_result = 0;
    var grand_final_result;
    var p_result = document.createElement("P");
  // recursive function to print the
      // huffman-code through the tree traversal.
      // Here s is the huffman - code generated.
      function printCode(root,s)
      {
          // base case; if the left and right are null
          // then its a leaf node and we print
          // the code s generated by traversing the tree.
          
          if (root.left == null
              && root.right == null
              && (root.c).toLowerCase() != (root.c).toUpperCase()) {
                
              // c is the character in the node
              

            var tbody = document.getElementById("body");
            var tr = document.createElement("TR");
            var td_1 = document.createElement("TD");
            td_1.innerHTML = root.c;
            var td_2 = document.createElement("TD");
            td_2.innerHTML = s;
            tbody.appendChild(tr);
            tr.appendChild(td_1);
            tr.appendChild(td_2);


            var result = document.getElementById("result");
            var span = document.createElement("SPAN");
            span.innerHTML = root.data + " x " + s.length + " + ";
            result.appendChild(span);
            final_result = final_result + root.data*s.length;
            return;

          }
          
          // if we go to left then add "0" to the code.
          // if we go to the right add"1" to the code.
      
          // recursive calls for left and
          // right sub-tree of the generated tree.
          printCode(root.left, s + "0");
          printCode(root.right, s + "1");

          var result2 = document.getElementById("final_result");
          result2.innerHTML = "  = " + final_result + " bits";
          // var p = document.createElement("P");
          // p.innerHTML = "= " + final_result;
          // result.appendChild(p);
      }

        
   // main function   
  // number of characters.
  var var1, var2, var3, var4, var5, var6;
  var fre1, fre2, fre3, fre4, fre5, fre6;
  document.getElementById("submit").onclick = function() {
      var1 = document.getElementById("var1").value;
      var2 = document.getElementById("var2").value;
      var3 = document.getElementById("var3").value;
      var4 = document.getElementById("var4").value;
      var5 = document.getElementById("var5").value;
      var6 = document.getElementById("var6").value;
      fre1 = Number(document.getElementById("fre1").value);
      fre2 = Number(document.getElementById("fre2").value);
      fre3 = Number(document.getElementById("fre3").value);
      fre4 = Number(document.getElementById("fre4").value);
      fre5 = Number(document.getElementById("fre5").value);
      fre6 = Number(document.getElementById("fre6").value);
      let n = 6;
          let charArray = [ var1, var2, var3, var4, var5, var6 ];
          let charfreq = [ fre1, fre2, fre3, fre4, fre5, fre6 ];
          // creating a priority queue q.
          // makes a min-priority queue(min-heap).


        //showing answer part 1

        var answer = document.getElementById("answer");
        var h1 = document.createElement("H1");
        h1.innerHTML = "Answer:";
        var div1 = document.createElement("DIV");
        var p1 = document.createElement("P");
        p1.innerHTML = "Given that:";
        var p2 = document.createElement("P");
        p2.innerHTML = "C = { " + var1 + ", " + var2 + ", " + var3 + ", " + var4 + ", " + var5 + ", " + var6 + " }";
        
        var p3 = document.createElement("P");
        p3.innerHTML = "F(C) = { " + fre1 + ", " + fre2 + ", " + fre3 + ", " + fre4 + ", " + fre5 + ", " + fre6 + " }";
        var p4 = document.createElement("P");
        p4.innerHTML = "n = " + n;
        var p5 = document.createElement("P");
        p5.innerHTML = "Q <-- C";
        var p6 = document.createElement("P");
        p6.innerHTML = "for i = 1 to i = 5";
        var ul = document.createElement("UL");
        var li1 = document.createElement("LI");
        li1.innerHTML = var1 + ": " + fre1;
        var li2 = document.createElement("LI");
        li2.innerHTML = var2 + ": " + fre2;
        var li3 = document.createElement("LI");
        li3.innerHTML = var3 + ": " + fre3;
        var li4 = document.createElement("LI");
        li4.innerHTML = var4 + ": " + fre4;
        var li5 = document.createElement("LI");
        li5.innerHTML = var5 + ": " + fre5;
        var li6 = document.createElement("LI");
        li6.innerHTML = var6 + ": " + fre6;
        answer.appendChild(h1);
        answer.appendChild(div1);
        div1.appendChild(p1);
        div1.appendChild(p2);
        div1.appendChild(p3);
        div1.appendChild(p4);
        div1.appendChild(p5);
        div1.appendChild(ul);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        ul.appendChild(li6);
        div1.appendChild(p6);


          let q = [];
      
          for (let i = 0; i < n; i++) {
      
              // creating a Huffman node object
              // and add it to the priority queue.
              let hn = new HuffmanNode();
      
              hn.c = charArray[i];
            //   console.log(hn.c);
              hn.data = charfreq[i];
      
              hn.left = null;
              hn.right = null;
      
              // add functions adds
              // the huffman node to the queue.
              q.push(hn);
          }
      
          // create a root node
          let root = null;
            q.sort(function(a,b){return a.data-b.data;});
            
          // Here we will extract the two minimum value
          // from the heap each time until
          // its size reduces to 1, extract until
          // all the nodes are extracted.
          var count = 1;
          while (q.length > 1) {

              
              // first min extract.
              let x = q[0];
              q.shift();
      
              // second min extract.
              let y = q[0];
              q.shift();
      
              // new node f which is equal
              let f = new HuffmanNode();
      
              // to the sum of the frequency of the two nodes
              // assigning values to the f node.
              f.data = x.data + y.data;
              console.log(x.data);
            //   console.log(f.data);
              f.c = '-';
      
              // first extracted node as left child.
              f.left = x;
              
      
              // second extracted node as the right child.
              f.right = y;
      
              // marking the f node as the root node.
              root = f;
      
              // add this node to the priority-queue.
              q.push(f);
              q.sort(function(a,b){return a.data-b.data;});
              console.log(q.sort);

            


            //dynamic output for stepwise result

            var answer = document.getElementById("answer");
            var div2 = document.createElement("DIV");
            var pi = document.createElement("P");
            pi.innerHTML = "for i = " + count;
            var pii = document.createElement("P");
            pii.innerHTML = "Z <-- Allocate node";
            var piii = document.createElement("P");
            piii.innerHTML = "X <-- Extract-Min(Q)";
            var piv = document.createElement("P");
            piv.innerHTML = "Y <-- Extract-Min(Q)";
            var pv = document.createElement("P");
            pv.innerHTML = "Left[Z] <-- X";
            var pvi = document.createElement("P");
            pvi.innerHTML = "Right[Z] -- Y";
            var pvii = document.createElement("P");
            pvii.innerHTML = "F (Z) -- F (X) + F(Y) = " + x.data + " + " + y.data;
            var pviii = document.createElement("P");
            pviii.innerHTML = "F (Z) = " + f.data;
            var div4 = document.createElement("DIV");
            var h31 = document.createElement("H3");
            h31.id = "left";
            h31.innerHTML = x.data;
            var h32 = document.createElement("H3");
            h32.innerHTML = y.data;
            h32.id = "right";
            var h33 = document.createElement("H3");
            h33.innerHTML = f.data;
            h33.id = "data";
            var img = document.createElement("IMG");
            img.src = "graph.svg";
            answer.appendChild(div2);
            div2.appendChild(pi);
            div2.appendChild(pii);
            div2.appendChild(piii);
            div2.appendChild(piv);
            div2.appendChild(pv);
            div2.appendChild(pvi);
            div2.appendChild(pvii);
            div2.appendChild(pviii);
            div2.appendChild(div4);
            div4.appendChild(h31);
            div4.appendChild(h32);
            div4.appendChild(h33);
            div4.appendChild(img);
            count++;
          }
      
          // print the codes by traversing the tree
          
          printCode(root, "");
  }
          
    
  // This code is contributed by avanitrachhadiya2155
