function gt()
{
    var cel=document.getElementById('cel');
    var far=document.getElementById('far');
    far.value='';
    far.value=Math.round(cel.value*9/5+32);
    
}
function et()
{
    var cel=document.getElementById('cel');
    var far=document.getElementById('far');
    
    cel.value=Math.round(far.value*5/9+32);
    
}
