(function ( $ ) {
    let firstClick = true;
    let timer = document.createElement("p");
    timer.id = "timer";
    timer.style.position = "absolute";
    timer.style.top = "110px";
    timer.style.fontSize = "20px";
    timer.style.fontWeight = "bold";
    $("#text-edited").after(timer);  
    
    $.fn.my_wysiwyg = function(options) {

        //-------------------- RÉCUPÉRATION DE LA DERNIÈRE VALEUR POUR L'AFFICHER AU CHARGEMENT ------------------------
        let afterButtonData = JSON.parse(localStorage.getItem("after-button-clicked"));
        let autoRefreshData = JSON.parse(localStorage.getItem("auto-refresh"));
        let savedData;
        if(localStorage.getItem("after-button-clicked") != null || localStorage.getItem("auto-refresh") != null){
            if(afterButtonData.timestamp > autoRefreshData.timestamp && afterButtonData.value != ""){
                $("#text-edited").html(afterButtonData.value);
                savedData = $('#text-edited').prop('innerHTML');
                $("textarea").val(savedData);
                $(this).css({'opacity':0});
                $("#text-edited").css({"border": "solid black 0.5px"});
            }
            else if(autoRefreshData.timestamp > afterButtonData.timestamp && autoRefreshData.value != ""){
                $("#text-edited").html(autoRefreshData.value);
                savedData = $('#text-edited').prop('innerHTML');
                $("textarea").val(savedData);
                $(this).css({'opacity':0});
                $("#text-edited").css({"border": "solid black 0.5px"});
            }
        }

        let settings = $.extend({}, $.fn.my_wysiwyg.defaults, options );  

        return this.each(function() {
            input.addEventListener('click', function(e){
                //---------------------- CRÉATION DES BOUTONS LORS DU CLIC DANS LA TEXTAREA ----------------------------
                if (firstClick== true){
                    firstClick = false;
                    let textarea = $(this).get(0);
                    let faketextarea = $("#text-edited");
                    let createDiv = document.createElement("div");
                    createDiv.setAttribute("id", "options");
                    textarea.before(createDiv);
                    let div = document.getElementById("options");
                    div.style.height = "30px";
                    div.style.width = settings.width;

                    $(this).hide();
                    $(this).css({'opacity':1});


                $(this).css ({
                    backgroundColor: settings.backgroundColor,
                    width: settings.width,
                    height: settings.height,
                    border: settings.border
                });

                // ----------------------- Pour pouvoir se mettre sur la faketextarea par défaut----------------

                $(faketextarea).focus();

                $(faketextarea).css({
                    backgroundColor: settings.backgroundColor,
                    width: settings.width,
                    height: settings.height,
                    border: settings.border
                });

                //---------------------------------- LA LISTE DES BOUTONS ----------------------------------------------
                let bold = document.createElement("button");
                    bold.name = "boldButton";
                    bold.innerHTML = "<img src=\'../img/bold-solid.png\' alt='Bold'</img>";
                    bold.className = "btn";
                    div.appendChild(bold);
                let italic = document.createElement("button");
                    italic.name = "italicButton";
                    italic.innerHTML = "<img src=\'../img/italic-solid.png\' alt='Italic'</img>";
                    italic.className = "btn";
                    div.appendChild(italic);
                let strikeout = document.createElement("button");
                    strikeout.name = "strikeButton";
                    strikeout.innerHTML = "<img src=\'../img/text-slash-solid.png\' alt='Slash the text'</img>";
                    strikeout.className = "btn";
                    div.appendChild(strikeout);
                let redColor = document.createElement("button");
                    redColor.innerHTML = "<img src=\'../img/red-solid.png\' alt='Modify color'</img>";
                    redColor.name = "redButton";
                    redColor.className = "btn";
                    div.appendChild(redColor);
                let greenColor = document.createElement("button");
                    greenColor.innerHTML = "<img src=\'../img/green-solid.png\' alt='Modify color'</img>";
                    greenColor.name = "greenButton";
                    greenColor.className = "btn";
                    div.appendChild(greenColor);
                let blueColor = document.createElement("button");
                    blueColor.innerHTML = "<img src=\'../img/blue-solid.png\' alt='Modify color'</img>";
                    blueColor.name = "blueButton";
                    blueColor.className = "btn";
                    div.appendChild(blueColor);
                let greyColor = document.createElement("button");
                    greyColor.innerHTML = "<img src=\'../img/grey-solid.png\' alt='Modify color'</img>";
                    greyColor.name = "greyButton";
                    greyColor.className = "btn";
                    div.appendChild(greyColor);
                let small = document.createElement("button");
                    small.name = "smallButton";
                    small.innerHTML = "<img src=\'../img/small-height-solid.png\' alt='Modify size'</img>";
                    small.className = "btn";
                    div.appendChild(small);
                let regular = document.createElement("button");
                    regular.name = "regButton";
                    regular.innerHTML = "<img src=\'../img/reg-height-solid.png\' alt='Modify size'</img>";
                    regular.className = "btn";
                    div.appendChild(regular);
                let big = document.createElement("button");
                    big.name = "bigButton";
                    big.innerHTML = "<img src=\'../img/big-height-solid.png\' alt='Modify size'</img>";
                    big.className = "btn";
                    div.appendChild(big);
                let link = document.createElement("button");
                    link.name = "linkButton";
                    link.innerHTML = "<img src=\'../img/link-solid.png\' alt='Add link'</img>";
                    link.className = "btn";
                    div.appendChild(link);
                let codeSwitch = document.createElement("button");
                    codeSwitch.name = "codeSwitchButton";
                    codeSwitch.innerHTML = "<img src=\'../img/code-solid.png\' alt='Code switch'</img>";
                    codeSwitch.className = "btn";
                    div.appendChild(codeSwitch);
                let centerText = document.createElement("button");
                    centerText.name = "centerTextButton";
                    centerText.innerHTML = "<img src=\'../img/align-center-solid.png\' alt='Center text'</img>";
                    centerText.className = "btn";
                    div.appendChild(centerText);
                let justifyText = document.createElement("button");
                    justifyText.name = "justifyTextButton";
                    justifyText.innerHTML = "<img src=\'../img/align-justify-solid.png\' alt='Justify text'</img>";
                    justifyText.className = "btn";
                    div.appendChild(justifyText);
                let leftText = document.createElement("button");
                    leftText.name = "leftTextButton";
                    leftText.innerHTML = "<img src=\'../img/align-left-solid.png\' alt='Align left'</img>";
                    leftText.className = "btn";
                    div.appendChild(leftText);
                let rightText = document.createElement("button");
                    rightText.name = "rightTextButton";
                    rightText.innerHTML = "<img src=\'../img/align-right-solid.png\' alt='Align right'</img>";
                    rightText.className = "btn";
                    div.appendChild(rightText);
                let videoButton = document.createElement("button");
                    videoButton.name = "videoButton";
                    videoButton.innerHTML = "<img src=\'../img/circle-play-regular.png\' alt='Add video'</img>";
                    videoButton.className = "btn";
                    div.appendChild(videoButton);
                let imgButton = document.createElement("button");
                    imgButton.name = "imgButton";
                    imgButton.innerHTML = "<img src=\'../img/image-regular.png\' alt='Add an image'</img>";
                    imgButton.className = "btn";
                    div.appendChild(imgButton);

                    let btn = document.querySelectorAll('.btn');

                    //-------- LORS D'UN CLIC SUR UN BOUTON, ON DÉTERMINE LES ÉLÉMENTS SÉLECTIONNÉS DANS LA TEXTAREA ---------
                    $('.btn').click(function () {
                        let btnName = this.name;

                        let val = $("textarea").val();
                        let start = $("textarea")[0].selectionStart;
                        let end = $("textarea")[0].selectionEnd;

                        let selection = window.getSelection();
                        let fakeRange = selection.getRangeAt(0);
                        let fakeStart = fakeRange.startOffset;
                        let fakeEnd = fakeRange.endOffset;
                        let contain = selection.anchorNode.parentNode;

                        if (contain.nodeName == "HTML") {
                            contain = $("#text-edited");
                        }

                        let fakeVal = $(contain).html();

                        if (fakeVal.indexOf("<head>") != -1){
                            fakeVal = $("#text-edited").html();
                        }

                        let text = val.substring(start, end);
                        let fakeText = fakeVal.substring(fakeStart, fakeEnd);
                        let before = val.substring(val, start);
                        let after = val.substring(end, val.length);
                        let fakeBefore = fakeVal.substring(fakeVal, fakeStart);
                        let fakeAfter = fakeVal.substring(fakeEnd, fakeVal.length);

                        if (fakeText == ""){
                            fakeText = text;
                            fakeBefore = before;
                            fakeAfter = after;
                        }

                    //----- SI AU MOINS UN ÉLÉMENT DE LA TEXTAREA EST SÉLECTIONNÉ, ALORS ON EFFECTUE L'ACTION LIÉE AU BOUTON -----
                        if (text.length >0 || fakeText.length >0){
                            let fakeValue;
                            switch (btnName){
                                case 'italicButton':
                                    $(contain).html(fakeBefore + '<span class="italic">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'boldButton':
                                    $(contain).html(fakeBefore + '<span class="bold">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'strikeButton':
                                    $(contain).html(fakeBefore + '<span class="strike">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'redButton':
                                    $(contain).html(fakeBefore + '<span class="red">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'greenButton':
                                    $(contain).html(fakeBefore + '<span class="green">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'blueButton':
                                    $(contain).html(fakeBefore + '<span class="blue">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'greyButton':
                                    $(contain).html(fakeBefore + '<span class="grey">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'smallButton':
                                    $(contain).html(fakeBefore + '<span class="small">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'regButton':
                                    $(contain).html(fakeBefore + '<span class="regular">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'bigButton':
                                    $(contain).html(fakeBefore + '<span class="big">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'linkButton':
                                    $(contain).html(fakeBefore + '<a href="' + fakeText + '" class="link">' + fakeText + '</a>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'centerTextButton':
                                    $(contain).html(fakeBefore + '<span class="centerText">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'justifyTextButton':
                                    $(contain).html(fakeBefore + '<span class="justifyText">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'leftTextButton':
                                    $(contain).html(fakeBefore + '<span class="leftText">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'rightTextButton':
                                    $(contain).html(fakeBefore + '<span class="rightText">' + fakeText + '</span>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'videoButton':
                                    $(contain).html(fakeBefore + '<iframe class="videoClass" src="' + fakeText + '" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                                case 'imgButton':
                                    $(contain).html(fakeBefore + '<img alt="' + fakeText + '" class="imgClass" src="' + fakeText + '"></img>' + fakeAfter);
                                    fakeValue = $('#text-edited').prop('innerHTML');
                                    $("textarea").val(fakeValue);
                                    break;
                            }
                        }

                    //------ CodeSwitch Button ------

                        if (btnName == "codeSwitchButton") {
                            if($(faketextarea).is(":visible")){
                                $(faketextarea).hide()
                                $(textarea).show();
                                $(textarea).focus();
                            }
                            else {
                                $(textarea).hide();
                                $(faketextarea).show();
                                $(faketextarea).focus();
                            }
                        }

                        //----- ENREGISTREMENT DES VALEURS SOUMISES DANS LA TEXTAREA DANS LE LOCALSTORAGE -----
                        try{
                            let afterButton = {value: input.value, timestamp: new Date().getTime()};
                            localStorage.setItem("after-button-clicked", JSON.stringify(afterButton));
                            $("#timer").text("Projet Sauvegardé !").fadeIn(600).delay(1000).fadeOut(600);
                        }catch(e){
                            alert(e);
                        }
                        
                    });
                };
            });
        });
    };

    //--------------------------------------- ZONE ÉDITABLE PAR DÉFAUT ----------------------------------------
    $.fn.my_wysiwyg.defaults = {
        backgroundColor: "#D8EEFB",
        minWidth: "80%",
        minHeight: "200px",
        border: "black 1px solid",
        color: "black",
    };

    //----------------------------- AJOUT DU TEXTE DANS LA DIV À CÔTÉ DU TEXTAREA -----------------------------

    let input = document.querySelector('textarea');
    $("#text-edited").keyup(function(e){
        $("textarea").val($("#text-edited").html());
    });
    input.addEventListener('keyup', function(e){
        if ($("textarea").is(":focus")){
            $("#text-edited").html($("textarea").val());
        }
    });

    //------------------------- AJOUT AU LOCAL STORAGE DU TEXTE PRÉSENT DANS LA TEXTAREA ---------------------------
    
    window.setTimeout(function () {
        try{
            let autoRefresh = {value: input.value, timestamp: new Date().getTime()};
            localStorage.setItem("auto-refresh", JSON.stringify(autoRefresh));
            $("#timer").text("Projet Sauvegardé !").fadeIn(600).delay(1000).fadeOut(600);
        }catch(e){
            alert(e);
        }
    }, 30000);

    //------------------------- ALERTE QUAND ON QUITTE LA PAGE ---------------------------

    $(window).on("beforeunload", function() { 
            return confirm(); 
    });

}(jQuery));