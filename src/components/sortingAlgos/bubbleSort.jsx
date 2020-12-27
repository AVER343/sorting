async function BubbleSort(state,handleChange,timeout,disabled='true'){
    const selectedColor ='red'
    const sortedColor='green'
    const compairingColor='green'
    let i=0
        let j=0
        let len= state.data.length
        let items = Object.assign(state.data); 
        let colors = Object.assign(state.color); 
        let swaps
        
        while(i<len)
        {
            swaps=0
            j=0
            while(j<len-i)
            {
                
                colors[j]=selectedColor
                colors[j+1]=selectedColor
                await handleChange('color',colors)
                await timeout(state.time)
                if(state.data[j]>state.data[j+1])
                {
                  let temp=items[j]
                    items[j] =items[j+1] 
                    items[j+1]=temp
                    swaps++
                    await handleChange('data',items)
                   await timeout(state.time)
                }    
                colors[j]=compairingColor
                await handleChange('color',colors) 
                colors[j]='blue'
                await handleChange('color',colors)                   
                j++
            }
                colors[j-1]=sortedColor
                colors[j]=sortedColor
                await handleChange('color',colors)

                if(swaps===0)
                {
                    colors=colors.map(elem=>sortedColor)
                    await handleChange('color',colors)
                    break;
                }
            i++
        }
}
export default BubbleSort