import React from 'react';
import ForecastPanel from './forecast_panel';
import ForecastShow from './forecast_show';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';

class MainPanel extends React.Component{
    render(){
        return(
            <MuiThemeProvider>
                <GridList cols={10} cellHeight={432} padding={0}>
                    <GridTile cols={4}>
                        <ForecastShow city={this.props.city} id={this.props.id} result={this.props.result}/>
                    </GridTile>
                    <GridTile cols={6}>
                        <ForecastPanel result={this.props.result} handleDate={this.props.handleDate}
                                       handleText={this.props.handleText} city={this.props.city}
                                       handleSubmit={this.props.handleSubmit}/>
                    </GridTile>
                </GridList>
            </MuiThemeProvider>
        )
    }
}

module.exports = MainPanel;