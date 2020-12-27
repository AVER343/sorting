import './homepage.css'

import { Button, ButtonGroup } from "@chakra-ui/react"

import BubbleSort from '../sortingAlgos/bubbleSort';
import GenerateRandoms from './generateRandoms';
import MergeSort from '../sortingAlgos/mergeSort';
import React from 'react'
import selectionSort from '../sortingAlgos/selectAndSort';

class Homepage extends React.Component{
    constructor(){
        super();
        this.state={
            value:10,
            disabled:false,
            data:[],color:[],
            time:0,numberOfBars:31,
            window:10,
            cancelled:false
        }  
    }
    handleChange=(name,value)=>{
        this.setState({[name]:value})
    }
    generateRandoms(number){
       GenerateRandoms(number,this.state,this.handleChange)
    }
   async componentDidMount(){
        this.generateRandoms(this.state.numberOfBars)
        let i=0,color=[]
        let win=Math.floor((document.getElementById('allBars').clientWidth-2*this.state.numberOfBars)/this.state.numberOfBars)
       await this.setState({window:win})
        while(i<this.state.numberOfBars)
        {
            color.push('blue')
            i++
        }
        await this.setState({color})
        setInterval(()=>{console.log(this.state.cancelled);},1000)
    }
    changeCancelled=()=>{
       this.setState({cancelled:!this.setState.cancelled})
    }
     timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    bubbleSort=async()=>{
        await this.setState({disabled:true})
        await BubbleSort(this.state,this.handleChange,this.timeout,this.state.disabled)
        await this.setState({disabled:false})
    }
   mergeSort=async()=>{
        await this.setState({disabled:true})
        await MergeSort(this.state,this.handleChange,this.timeout)
        await this.setState({color:this.state.color.map(e=>'purple')})
        await this.setState({disabled:false})
    }
    selectAndSort =async () => {  
           await this.setState({disabled:true})
           await selectionSort(this.state,this.handleChange,this.timeout,this.state.disabled)
           await this.setState({disabled:false})
    }
    
    handleChangeSlider=async(event)=>{
        let {value}=event.target
        if(value<5)
        {
            return
        }
       await this.setState({value,time:500/value,numberOfBars:value*2})
       let win=Math.floor((document.getElementById('allBars').clientWidth-2*this.state.numberOfBars)/this.state.numberOfBars)
       await this.setState({window:win})
       console.log(this.state.numberOfBars)
       this.generateRandoms(this.state.numberOfBars)
    }
    render(){ 
       return(<div className="container" style={{marginTop:'5%'}}>
                <Button disabled={this.state.disabled} style={{marginLeft:'1%' }} onClick={this.bubbleSort}>BUBBLE SORT !</Button>
                <Button disabled={this.state.disabled} style={{marginLeft:'1%' }}  onClick={this.selectAndSort}>SELECTION SORT !</Button>
                <Button disabled={this.state.disabled} style={{marginLeft:'1%' }}  onClick={this.mergeSort}>MERGE SORT !</Button>
              <Button disabled={this.state.disabled} style={{marginLeft:'1%' }} onClick={()=>this.generateRandoms(this.state.numberOfBars)}>Generate Randoms</Button>
                <div className="my-5" style={{width:'100%',marginLeft:'15%',display:'block-inline'}}>
                <label htmlFor="customRange1">SPEED AND TOTAL NUMBERS</label>
                <input disabled={this.state.disabled} onChange={this.handleChangeSlider} value={this.state.value} type="range" className="custom-range" id="customRange1" style={{width:'25%',display:'block-inline',verticalAlign:"middle"}}/>
                </div>
                <div id="allBars" style={{textAlign:`center`,verticalAlign:'middle',marginTop:'10%'}}>
                {this.state.data.map((value,inx)=><div
                                                        className="array-bar"
                                                        key={inx}
                                                        style={{ height: `${value/5}px`,backgroundColor:this.state.color[inx],width:`${this.state.window}px`,verticalAlign:'text-top'}}></div>)}
                </div>
            </div>)
            }
}
export default Homepage