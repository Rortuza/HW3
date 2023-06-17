
// js file for assignment
var one;
var two;
var three;
var four;
var inputType;

//creates inpiut of values for table
function createInput(input) {

    inputType = input;
    inputType = input;
        createBoxes();
        jQuery("#Sliders").html("");
        createTable(n1, n2, n3, n4);
        frm.firstInt.value = n1;
        frm.secondInt.value = n2;
        frm.thirdInt.value = n3;
        frm.fourthInt.value = n4;

}

// array of strings based off inputs
var names = ["first", "second", "third", "fourth"];

//checks if user is correct or not
function formCheck() {

// loop allows each box to be printed out
    for (var i = 0; i < names.length; i++) {
        frm[names[i] + "Int"].style.backgroundColor = "Orange";
        if (validateInteger(names[i]) === false) {
            return false;
        }
    }

    one = parseInt(frm.firstInt.value);
    two = parseInt(frm.secondInt.value);
    four = parseInt(frm.thirdInt.value);
    four = parseInt(frm.fourthInt.value);

    jQuery("#userInfo").html("");

    createTable(one, two, four, four);
    return true;

}   


// validates whether or not an integer has a value
function validateInteger(name) {

    var int = frm[name + "Int"];

    if (isNaN(parseInt(int.value)) || parseFloat(int.value) !== parseInt(int.value)) {
        var strUserInfo = "Please enter an integer into the " + name + " box.";
        jQuery("#userInfo").html(strUserInfo);
        int.style.backgroundColor = "red";
        int.focus();

        return false;
    }

    return true;
}

// refreshes page
function clearPage() {
    one = 0;
    two = 0;
    four = 0;
    four = 0;

    jQuery("#userInfo").html("");

    createTable(0, 0, 0, 0);


    for (var i = 0; i < names.length; i++) {
            frm[names[i] + "Int"].style.backgroundColor = "White";
            frm[names[i] + "Int"].value = 0;
        }
} 


// table is created here
function createTable(Int1, Int2, Int3, Int4) {

    //If the upper bound is less than the lower bound, they are swapped. 
    var temp;
    if (Int1 > Int2) {
        temp = Int1;
        Int1 = Int2;
        Int2 = temp;
    }
    if (Int3 > Int4) {
        temp = Int3;
        Int3 = Int4;
        Int4 = temp;
    }


    var strTable = "";

    strTable += "<table id='productTable'><tr id='multiplier'><td id='corner'></td>";

    for (var i = Int1; i <= Int2; i++) {
        strTable += "<td>" + i + "</td>";
    }


    for (var j = Int3; j <= Int4; j++) {

        strTable += "<tr><td class='multiplicand'>" + j + "</td>";

        for (var i = Int1; i <= Int2; i++) {
            strTable += "<td><span class='products'>" + j * i + "</span></td>";
        }
        strTable += "</tr>";
    }


    strTable += "</table>";

  
    jQuery("#table").html(strTable);

}   

// creates text fields
function createBoxes() {

    var strBoxes = "</div id='Boxes'><p>Multiplier Range:</p>";
    strBoxes += "<p><input type='text' size='1' name='firstInt' id='firstInt'>-";
    strBoxes += "<input type='text' size='1' name='secondInt' id='secondInt'></p>";

    strBoxes += "<p>Multiplicand Range:</p>";
    strBoxes += "<p><input type='text' size='1' name='thirdInt' id='thirdInt'>-";
    strBoxes += "<input type='text' size='1' name='fourthInt' id='fourthInt'></p></div>";

    strBoxes += "<div class='buttons'><input type='submit' value='ENTER'>";
    strBoxes += "<input type='button' onclick='clearPage()' value='RESET'></div>";

    jQuery("#Boxes").html(strBoxes);

}