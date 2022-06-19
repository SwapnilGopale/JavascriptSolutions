let [normalCount,debounceCount,throttleCount] = [0,0,0];
let debounceTimer,throttlePause;

// Event Listeners
document.getElementById("text-normal").addEventListener("input",function(){
    updateNormalCount();
})
document.getElementById("text-debounce").addEventListener("input",function(){
    (function(){
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(updateDebounceCount, 800);
    })()
})
document.getElementById("text-throttle").addEventListener("input",function(){
    
    (function(){
        if (throttlePause) return;

        throttlePause = true;
        setTimeout(() => {
            updateThrottleCount();
            throttlePause = false;
        }, 800);
    })()
})

// Callbacks
function updateNormalCount(){
    normalCount++;
    document.getElementById("count-normal").textContent = "Called " + normalCount + " times";
}

function updateDebounceCount(){
    debounceCount++;
    document.getElementById("count-debounce").textContent = "Called " + debounceCount + " times";
}

function updateThrottleCount(){
    throttleCount++;
    document.getElementById("count-throttle").textContent = "Called " + throttleCount + " times";
}