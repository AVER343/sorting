
async function containMergeSort(state,handleChange,timeout)
{
    let total =0
let originalArray=[]
    async function MergeSort(state,handleChange,timeout)
        {   
            if(total===0)
            {
                originalArray=state.data
                total++
            }
        state.time=200
        console.log(state,handleChange,timeout)
        const selectedColor ='red'
        const sortedColor='purple'
        const compairingColor='green'
        const intermediateStateColor='yellow'
        let len = state.data.length
        let array = [...(state.data)] 
        let colors = Object.assign(state.color); 
            const Sorting=async(subArray)=>{
            if(subArray.length===1)
            {
                return subArray
            }
            
        let mid = Math.floor(subArray.length/2)
            let B= await MergeSort({data:subArray.splice(mid),color:colors},handleChange,timeout)
            // handleChange('data',[...subArray,...B])
            let A= await MergeSort({data:subArray,color:colors},handleChange,timeout)
            // handleChange('data',[...A,...B])
            let {finalArr,RightHalfMaxIndex,LeftHalfMinIndex}=await Merged(A,B,originalArray)
            let C = finalArr,i,k=0
            for(i=LeftHalfMinIndex;i<=RightHalfMaxIndex;i++)
            {
                originalArray[i]=C[k]
                k++
            }
            colors=colors.map((e,i)=>i>=LeftHalfMinIndex&&i<=RightHalfMaxIndex?selectedColor:i<=RightHalfMaxIndex?compairingColor:intermediateStateColor)
            await timeout(state.time)
            handleChange('data',[...originalArray])
            await handleChange('color',colors)
        return C
        }
        //   colors=colors.map((e,i)=>sortedColor)
        return await Sorting(array)
        }
        return await MergeSort(state,handleChange,timeout)
}
const Merged=(LeftHalf,RightHalf,originalArray)=>{
   let finalArr=[]
   let LeftHalfMinIndex=originalArray.findIndex(e=>e===LeftHalf[0])
   let RightHalfMaxIndex=originalArray.findIndex(e=>e===RightHalf[RightHalf.length-1])
   console.log({LeftHalfMinIndex,RightHalfMaxIndex})
   let i=0,j=0
   let len =LeftHalf.length + RightHalf.length
    
   while(i+j<len)
   {
       
       if(LeftHalf[i]<RightHalf[j])
       {
           finalArr=finalArr.concat(LeftHalf[i])
           i++
       }
       else if(LeftHalf[i]>=RightHalf[j]){
           finalArr=finalArr.concat(RightHalf[j])
           j++
       }
       else if(RightHalf[j]===undefined)
       {
           console.log(LeftHalf)
           LeftHalf.splice(0,i)
           finalArr.push(...LeftHalf)
           break;
       }
       else if(LeftHalf[i]===undefined)
       {
        console.log(RightHalf)
           RightHalf.splice(0,j)
           finalArr.push(...RightHalf)
           break;
       }
   }
   return {finalArr,LeftHalfMinIndex,RightHalfMaxIndex}
}
export default containMergeSort