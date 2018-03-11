import React from 'react';
import ForecastController from './forecast_controller';
import ForecastChoosePanel from './forecast_choose_panel';

class ForecastPanel extends React.Component{
    render(){
        return(
            <div>
                <ForecastController handleText={this.props.handleText}
                                    handleSubmit={this.props.handleSubmit}
                                    city={this.props.city}/>
                <ForecastChoosePanel result={this.props.result} handleDate={this.props.handleDate}/>
            </div>
        )
    }
}

module.exports = ForecastPanel;