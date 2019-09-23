function handleLoad() {
    
    var numberInput = document.querySelector('.numberInput');
    var button = document.querySelector('.numberSubmit');
    var result = document.querySelector('.numberResult');

    function handleClick() {
        var text = numberInput.value;

        var romanNumbers = "IVXLCDM";
        var decimalNumbers = "1234567890";

        var inputType = '';
        
        var romanCharacter = '';
        var characterRepetitions = 0;

        for(var i = 0; i < text.length; i++) {
            if((inputType == '' || inputType == 'roman') && romanNumbers.includes(text.charAt(i))) {
                inputType = 'roman';

                if( i > 0 && text.charAt(i) == text.charAt(i-1)) {
                    characterRepetitions++;
                } else {
                    romanCharacter = text.charAt(i);
                    characterRepetitions = 0;
                }

                if(characterRepetitions > 3) {
                    inputType = 'invalid';
                }
            } else if((inputType == '' || inputType == 'decimal') && decimalNumbers.includes(text.charAt(i))) {
                inputType = 'decimal';
            } else {
                inputType = 'invalid';
            }
        }

        var newText = 0;

        for(var i = 0; i < text.length; i++) {
            if(inputType == 'roman') {
                if(text.substring(i, i+2) == 'IV') {
                    newText += 4;
                    i++;
                } else if(text.substring(i, i+2) == 'IX') {
                    newText += 9;
                    i++;
                } else if(text.substring(i, i+2) == 'XL') {
                    newText += 40;
                    i++;
                } else if(text.substring(i, i+2) == 'XC') {
                    newText += 90;
                    i++;
                } else if(text.substring(i, i+2) == 'CD') {
                    newText += 400;
                    i++;
                } else if(text.substring(i, i+2) == 'CM') {
                    newText += 900;
                    i++;
                } else {
                    if(text.charAt(i) == 'I') {
                        newText += 1;
                    } else if (text.charAt(i) == 'V') {
                        newText += 5;
                    } else if(text.charAt(i) == 'X') {
                        newText += 10;
                    } else if(text.charAt(i) == 'L') {
                        newText += 50;
                    } else if(text.charAt(i) == 'C') {
                        newText += 100;
                    } else if(text.charAt(i) == 'D') {
                        newText += 500;
                    } else if(text.charAt(i) == 'M') {
                        newText += 1000;
                    }
                }

                
            } else {
                newText = 'Number not valid';
            }
        }

        if(inputType == "decimal") {
            newText = '';
            if(text.length > 4) {
                newText = 'Please input a number smaller than 4000';
            } else {
                if(text.length == 4) {  // ----------------------------------------------------- XXXX
                    if(text.charAt(0) <= 3) {
                        for(var i = 0; i < text.charAt(0); i++) {
                            newText += 'M';
                        }

                        console.log('M');

                        if(text.charAt(1) <= 3) {
                            for(var i = 0; i < text.charAt(1); i++) {
                                newText += 'C';
                            }

                            console.log('C');

                        } else if(text.charAt(1) == 4) {
                            newText += 'CD';
                        } else if(text.charAt(1) >= 5 && text.charAt(1) <= 8) {
                            newText += 'D';
                            for(var i = 5; i < text.charAt(1); i++) {
                                newText += 'C';
                            }

                            console.log('C2');

                        } else if(text.charAt(1) == 9) {
                            newText += 'CM'
                        }

                        if(text.charAt(2) <= 3) {
                            for(var i = 0; i < text.charAt(2); i++) {
                                newText += 'X';
                            }
                        } else if(text.charAt(2) == 4) {
                            newText += 'XL';
                        } else if(text.charAt(2) >= 5 && text.charAt(2) <= 8) {
                            newText += 'L';
                            for(var i = 5; i < text.charAt(2); i++) {
                                newText += 'X';
                            }
                        } else if(text.charAt(2) == 9) {
                            newText += 'XC'
                        }

                        if(text.charAt(3) <= 3) {
                            for(var i = 0; i < text.charAt(3); i++) {
                                newText += 'I';
                            }
                        } else if(text.charAt(3) == 4) {
                            newText += 'IV';
                        } else if(text.charAt(3) >= 5 && text.charAt(3) <= 8) {
                            newText += 'V';
                            for(var i = 5; i < text.charAt(3); i++) {
                                newText += 'I';
                            }
                        } else if(text.charAt(3) == 9) {
                            newText += 'IX'
                        }
                    } else {
                        newText = 'Please input a number smaller than 4000';
                    }
                } else if(text.length == 3) { //----------------------------------------------- XXX
                    if(text.charAt(0) <= 3) {
                        for(var i = 0; i < text.charAt(0); i++) {
                            newText += 'C';
                        }

                    } else if(text.charAt(0) == 4) {
                        newText += 'CD';
                    } else if(text.charAt(0) >= 5 && text.charAt(0) <= 8) {
                        newText += 'D';
                        for(var i = 5; i < text.charAt(0); i++) {
                            newText += 'C';
                        }

                    } else if(text.charAt(0) == 9) {
                        newText += 'CM'
                    }

                    if(text.charAt(1) <= 3) {
                        for(var i = 0; i < text.charAt(1); i++) {
                            newText += 'X';
                        }
                    } else if(text.charAt(1) == 4) {
                        newText += 'XL';
                    } else if(text.charAt(1) >= 5 && text.charAt(1) <= 8) {
                        newText += 'L';
                        for(var i = 5; i < text.charAt(1); i++) {
                            newText += 'X';
                        }
                    } else if(text.charAt(1) == 9) {
                        newText += 'XC'
                    }

                    if(text.charAt(2) <= 3) {
                        for(var i = 0; i < text.charAt(2); i++) {
                            newText += 'I';
                        }
                    } else if(text.charAt(2) == 4) {
                        newText += 'IV';
                    } else if(text.charAt(2) >= 5 && text.charAt(2) <= 8) {
                        newText += 'V';
                        for(var i = 5; i < text.charAt(2); i++) {
                            newText += 'I';
                        }
                    } else if(text.charAt(2) == 9) {
                        newText += 'IX'
                    }
                } else if(text.length == 2) { //-------------------------------------- XX
                    if(text.charAt(0) <= 3) {
                        for(var i = 0; i < text.charAt(0); i++) {
                            newText += 'X';
                        }
                    } else if(text.charAt(0) == 4) {
                        newText += 'XL';
                    } else if(text.charAt(0) >= 5 && text.charAt(0) <= 8) {
                        newText += 'L';
                        for(var i = 5; i < text.charAt(0); i++) {
                            newText += 'X';
                        }
                    } else if(text.charAt(0) == 9) {
                        newText += 'XC'
                    }

                    if(text.charAt(1) <= 3) {
                        for(var i = 0; i < text.charAt(1); i++) {
                            newText += 'I';
                        }
                    } else if(text.charAt(1) == 4) {
                        newText += 'IV';
                    } else if(text.charAt(1) >= 5 && text.charAt(1) <= 8) {
                        newText += 'V';
                        for(var i = 5; i < text.charAt(1); i++) {
                            newText += 'I';
                        }
                    } else if(text.charAt(1) == 9) {
                        newText += 'IX'
                    }
                } else if(text.length == 1) { //------------------------------------------ X
                    if(text.charAt(0) <= 3) {
                        for(var i = 0; i < text.charAt(0); i++) {
                            newText += 'I';
                        }
                    } else if(text.charAt(0) == 4) {
                        newText += 'IV';
                    } else if(text.charAt(0) >= 5 && text.charAt(0) <= 8) {
                        newText += 'V';
                        for(var i = 5; i < text.charAt(0); i++) {
                            newText += 'I';
                        }
                    } else if(text.charAt(0) == 9) {
                        newText += 'IX'
                    }
                }
            }
        }
        
        result.innerHTML = newText;

        console.log(inputType);
        inputType = '';
    }

    button.addEventListener('click', handleClick);
}

window.addEventListener('load', handleLoad);