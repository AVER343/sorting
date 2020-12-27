async function selectionSort(state,handleChange,timeout,disabled){
    let arr = Object.assign(state.data); 
    let colors = Object.assign(state.color); 
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        colors[i]='green'
        await handleChange('color',colors)
        await timeout(state.time)
        for (let j = i + 1; j < len; j++) {
             colors[min]='green'
            await handleChange('color',colors)
            colors[j]='red'
            await handleChange('color',colors)
            await timeout(state.time)
            if (arr[min] > arr[j]) {
                colors[min]='blue'
                await handleChange('color',colors)
                min = j;
                colors[min]='green'
                await handleChange('color',colors)
                await timeout(state.time)
            }
            else{
            colors[j]='blue'
            await handleChange('color',colors)
            await timeout(state.time)}
        }           
        if (min !== i) {
            colors[min]='purple'
            await handleChange('color',colors)
            await timeout(state.time)
            let tmp = arr[i];
            arr[i] = arr[min];
            colors[i]='purple'
            colors[min]='blue'
            await handleChange('color',colors)
            await timeout(state.time)
            arr[min] = tmp;
        }
        colors[i]='purple'
        await handleChange('color',colors)
        await timeout(state.time)
        await handleChange('data',arr)
        await timeout(state.time)
    }
}
export default selectionSort