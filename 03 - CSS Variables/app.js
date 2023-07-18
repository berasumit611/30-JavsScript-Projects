const inputs=document.querySelectorAll('.controls input');
console.log(inputs);

//convert nodelist to array to get all methods of array

function handleUpdates(){
    // console.log(this.value);
    const suffix=this.dataset.sizing || '';
    // console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
inputs.forEach(input=>input.addEventListener('change',handleUpdates));
inputs.forEach(input=>input.addEventListener('mousemove',handleUpdates));