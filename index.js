

function addValue()
{
    let val = document.getElementById('people-count').innerHTML;
    val++
    document.getElementById('people-count').innerHTML = val;
}

function subValue()
{
    let val = document.getElementById('people-count').innerHTML;
    val--
    document.getElementById('people-count').innerHTML = val;
}