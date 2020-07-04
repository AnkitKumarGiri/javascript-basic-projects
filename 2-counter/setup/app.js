//set initial count
let count = 0;

const value = document.getElementById('value');
// alternate -> const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');

//forEach() method calls a function once for each element in an array, in order. the function passed must accept the following three args in order item, index, arr. (item) , (item,index) are also valid parameters but not any other order.

btns.forEach(function (btn){
    btn.addEventListener(("click"), function(e){
        //currentTarget returns the element whose even listeners triggered a specific event
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count-=1e17;
        }
        else  if(styles.contains('increase')){
            count+=1e17;    
        }
        else{
            count = 0;
        }
        if(count==0){
            value.style.color = "black";
        }
        else if(count>0){
            value.style.color = "green";
        }
        else{
            value.style.color = "red";
        }
        console.log(count);
        value.textContent = count;
    })
});