var word1;
var word2;
var result;
var Operators = ('+''-''*''/')

function calculate(){}
function addNumbers(){
		word1 = document.getElementById('word1').value;
    word2 = document.getElementById('word2').value;

    word1 = getValue(word1);
    word2 = getValue(word2);
    result = word1 + word2;

    document.getElementById('result').innerHTML = result;
  }

  function subtractNumbers(){
  		word1 = document.getElementById('word1').value;
      word2 = document.getElementById('word2').value;

      word1 = getValue(word1);
      word2 = getValue(word2);
      result = word1 - word2;

      document.getElementById('result').innerHTML = result;
    }

    function multiplyNumbers(){
    		word1 = document.getElementById('word1').value;
        word2 = document.getElementById('word2').value;

        word1 = getValue(word1);
        word2 = getValue(word2);
        result = word1 * word2;

        document.getElementById('result').innerHTML = result;
      }

      function divideNumbers(){
      		word1 = document.getElementById('word1').value;
          word2 = document.getElementById('word2').value;

          word1 = getValue(word1);
          word2 = getValue(word2);
          result = word1 / word2;

          document.getElementById('result').innerHTML = result;
        }

function getValue(resolve){
  if(resolve=="one"){ resolve = 1;}
  if(resolve=="two"){ resolve = 2;}
  if(resolve=="three"){ resolve = 3;}
  if(resolve=="four"){ resolve = 4;}
  if(resolve=="five"){ resolve = 5;}
}

        if (number== 1){
          document.write("Number equals One");
        }
        if (number== 2){
          document.write("Number equals Two");
        }
        if (number== 3){
          document.write("Number equals Three");
        }
        if (number== 4){
          document.write("Number equals Four");
        }
        if (number== 5){
          document.write("Number equals Five");
        }


    else if(btnVal == 'result') {
			var equation = inputVal;
			var lastChar = equation(equation.length - 1);

                if(isNaN(box1)){
                  alert("please enter valid number");
                }
