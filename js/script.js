    document.addEventListener('DOMContentLoaded', function() {
        document.body.style.fontFamily = "Times New Roman";
        document.body.style.textAlign = "center";
        document.body.style.margin = "20px";
        document.body.style.backgroundColor = "#3333bb";
        document.body.style.color = "white";

        var heading = document.createElement("h1");
        heading.textContent = "Задайте запитання магічній кулі:";
        heading.style.marginBottom = "10px";
        document.body.appendChild(heading);
    
        var input = document.createElement("input");
        input.type = "text";
        input.id = "questionInput";
        input.style.marginBottom = "10px";
        input.style.padding = "5px";
        input.style.fontSize = "16px";
        document.body.appendChild(input);
    
        var button = document.createElement("button");
        button.textContent = "Задати запитання";
        button.onclick = function() {
            var question = document.getElementById("questionInput").value;
            var answer = getMagicAnswer();
    
            var questionText = document.createElement("div");
            questionText.textContent = "Запитання: " + question;
            document.body.appendChild(questionText);
    
            var container = document.createElement("div");
            container.style.position = "relative";
    
            var magicBallImage = document.createElement("img");
            magicBallImage.src = "https://images.prom.ua/4172840521_w200_h200_lampa-nastilna-kulya.jpg";
            magicBallImage.style.maxWidth = "100%";
            container.appendChild(magicBallImage);
    
            var answerText = document.createElement("div");
            answerText.style.position = "absolute";
            answerText.style.top = "50%";
            answerText.style.left = "50%";
            answerText.style.transform = "translate(-50%, -50%)";
            answerText.textContent = "Відповідь: " + answer;
            answerText.style.backgroundColor = "rgba(149, 165, 166, 0.8)";
            answerText.style.padding = "10px";
            container.appendChild(answerText);
    
            container.style.marginTop = "20px";
            document.body.appendChild(container);
        };
        button.style.fontSize = "16px";
        button.style.padding = "5px 10px";
        document.body.appendChild(button);
    
        function getMagicAnswer() {
            var answers = ["так", "ні"];
            var randomIndex = Math.floor(Math.random() * answers.length);
            return answers[randomIndex];
        }
    }); 
