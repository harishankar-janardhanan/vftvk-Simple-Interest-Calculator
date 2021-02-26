function compute()
{
    if(!validateForm())
    {
        fname.focus();
        return false;
    }
    var p = document.getElementById("principal").value;
    var t = document.getElementById("time").value;
    var r = document.getElementById("rate").value;

    var interest = (p * r * t)/100;
    var final_year =  Number(new Date().getFullYear()) + Number(t);
    var final_amount = Number(p) + Number(interest);
    
    p =  `<span class="highlight">${p}</span>`; 
    r = `<span class="highlight">${r}</span>`;
    final_amount = `<span class="highlight">${final_amount}</span>`;
    final_year = `<span class="highlight">${final_year}</span>`;

    var output = `If you deposit ${p},<br>
at an interest rate of ${r}%. <br>
You will receive an amount of ${final_amount},<br>
in the year ${final_year}
`;
    document.getElementById("result").innerHTML = output;
    return true;
}

function validateForm()
{
    var p = document.getElementById('principal').value;
    if(p == null || p == 0 || p < 0)
    {
        alert("Please enter positive value in principal field");
        fname.focus();
        return false;
    }
    return true;
}
function updateRate(val)
{
    var output = val + "%";
    document.getElementById('rate_pc').innerHTML = output;
}
        