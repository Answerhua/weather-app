import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

class ForecastShow extends React.Component{
    render(){
        let city = this.props.city;
        let result = this.props.result;
        let id = this.props.id;
        let styles={
            cityPanel:{
                background:'#42EBE5',
                color:'white',
                textAlign: 'center',
                fontSize: 32,
                lineHeight: '60px'
            },
            weatherPanel:{
                background: '#FFFE14',
                color: '#C666F2',
                textAlign: 'center',
                fontSize: 30
            },
            iconPanel:{
                background: '#FFFE14',
                textAlign: 'center'
            },
            temperaturePanel:{
                background: '#FFFE14',
                color: '#C666F2',
                fontSize:'45px',
                textAlign: 'center'
            },
            image:{
                src:'./App/image/weathercn/',
            },
            wind:{
                background:'#68F574',
                color:'white',
                fontSize:'35px',
                textAlign: 'center'
            },
            h_wDetail:{
                background:'#68F574',
                color:'#FA70A0',
                fontSize:50,
                textAlign: 'center'
            },
            weatherDetail:{
                background:'#68F574',
                color:'white',
                fontSize:20,
            }
        };


        return(
            <GridList cols={10} cellHeight={31} padding={0}>
                <GridTile cols={10} rows={2} style={styles.cityPanel}>
                    {city}{" 欢迎您"}
                </GridTile>
                <GridTile cols={10} rows={1} style={styles.iconPanel}>
                </GridTile>
                <GridTile cols={3} rows={6} style={styles.weatherPanel}>
                    <br/>
                    {result.daily[id].day.weather}
                    <br/>
                    <br/>
                    {result.daily[id].date}
                </GridTile>
                <GridTile cols={4} rows={6} style={styles.iconPanel}>
                    <Paper zDepth={2} style={styles.iconPanel}>
                        <img src={styles.image.src + result.daily[id].day.img + '.png'}  style={{width:125,height:125}}/>
                    </Paper>
                </GridTile>
                <GridTile cols={3} rows={6} style={styles.temperaturePanel}>
                    <i className="wi wi-thermometer">{result.daily[id].day.temphigh}{'℃'}</i>
                    <br/>
                    <br/>
                    <i className="wi wi-thermometer-exterior">{result.daily[id].night.templow}{'℃'}</i>
                </GridTile>
                <GridTile cols={10} rows={1} style={styles.wind}>
                </GridTile>
                <GridTile cols={5} rows={5} style={styles.wind}>
                    <i className="wi wi-strong-wind">{result.daily[id].day.windpower}</i>
                    <br/>
                    <i className="wi wi-small-craft-advisory">{result.daily[id].day.winddirect}</i>
                </GridTile>
                <GridTile cols={5} rows={5} style={styles.h_wDetail}>
                    <i className="wi wi-sunrise" style={{fontSize:'45px'}}>{result.daily[id].sunrise}</i>
                    <br/>
                    <i className="wi wi-sunset" style={{fontSize:'45px'}}>{result.daily[id].sunset}</i>
                </GridTile>
            </GridList>
        )
    }
}

module.exports = ForecastShow;