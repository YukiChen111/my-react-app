import React from 'react';
export default class Square extends React.Component {
    // constructor(){
    //     super();
    //     this.state={
    //         bgColor: 'red',
    //     }
    // }
    constructor(props){
        super(props);
        this.state={
            bgColor: 'red',
        }
        this.changeColor=this.changeColor.bind(this);
    }
changeColor=()=>{
    this.setState({bgColor:"yellow"})
   
}


    clickHandler=()=>{
        // alert (this.props.name) ;
        const {onChangeColor} =this.props;
        onChangeColor && onChangeColor('blue');
        
    }
    render() {
        // const { bgColor }= this.state;
        const {bgColor} = this.props;
        return (
            <div onClick={this.clickHandler}
            title="Square"
            style={{ width: 100, height: 100, backgroundColor: bgColor,margin:10}} />
        )
    }
}