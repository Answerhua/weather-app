import React from 'react'
import ReactDom from 'react-dom'
import MainPanel from './components/main_panel'
import MDSpinner from "react-md-spinner";
let urlencode = require('urlencode');
let iconv = require('iconv-lite');
let axios = require('axios');
let api = require('./constants/api');

class Icon extends React.Component{
    render(){
        return(
                <i className="wi wi-day-sunny" style={{color:'blue',fontSize:'100px'}}></i>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city:"北京",
            loading:true,
            text:"handsomehua",
            result:{
                daily:Array(5).fill({
                    date:'',
                    week:'',
                    sunrise:'',
                    sunset:'',
                    day:{
                        weather:'',
                        temphigh:'',
                        winddirect:'',
                        windpower:'',
                        img:''
                    },
                    night:{
                        templow:''
                    }
                })
            },
            data:"",
            id:0
        };
    this.handleDate=this.handleDate.bind(this);
    this.handleText=this.handleText.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount() {
            new Promise((resolve, reject)=>{
            axios.post('/iplookup')
                .then((response)=>{
                    let result = JSON.stringify(response.data);
                    let cityinfo = result.split("\\t");
                    this.setState({city:cityinfo[5],loading:false});
                    resolve(this.state.city)
                })
                .catch((err)=>{
                    console.log(err);
                    reject(this.state.city)
                });

        })
                .then((city)=>{
                        axios.get(api.path + api.querys + urlencode(city) + api.postfix,{
                            headers:{
                                'Authorization':'APPCODE ' + api.appcode
                            }
                        })
                            .then((response) => {
                                this.setState({result:response.data.result});
                            })
                            .catch((err) =>{
                                console.log(err)
                            })
                    }
                )
    }

    handleDate(index){
            this.setState({id:index});
    }

    handleText(event){
            this.setState({text:event.target.value});
    }

    handleSubmit(){
            this.setState({city:this.state.text,loading:true});
            axios.get(api.path + api.querys + urlencode(this.state.city) + api.postfix,{
            headers:{
                'Authorization':'APPCODE ' + api.appcode
            }
        })
            .then((response) => {
                this.setState({result:response.data.result});
                this.setState({loading:false});
            })
            .catch((err) =>{
                console.log(err)
            })

    }
    render()
        {
            const loadingstyle = {
                textAlign: 'center',
                lineHeight:'60px',
                marginTop:'95px'
            };
            if(this.state.loading)
            {
                return(
                    <div style={loadingstyle}>
                        <MDSpinner size="75"/>
                        <br/>
                        <h1 style={{color:"#9BFD58"}}>Loading</h1>
                    </div>
                )
            }
            else {
                return (
                    <div>
                         <MainPanel city={this.state.city} id={this.state.id} result={this.state.result}
                                    handleDate={this.handleDate} handleText={this.handleText} handleSubmit={this.handleSubmit}/>
                    </div>
                )
            }
        }

}



ReactDom.render(
        <App />,
        document.getElementById('app')
);
