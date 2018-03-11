import React from 'react';
import {List,ListItem} from 'material-ui/List'


class ForecastChoosePanel extends React.Component{
    render(){
        let Listitem=[];
        let result = this.props.result;
        let style={
            listColor:{
                background:'#B8F4FF'
            },
            rippleColor:{
                background:'#64FFDA'
            }
        };

        for(let i=0;i<5;i++) {
            Listitem.push(
                <ListItem
                    key={i}
                    primaryText={result.daily[i].day.weather}
                    secondaryText={result.daily[i].date + " " + result.daily[i].week}
                    ripplecolor={style.rippleColor}
                    onClick={this.props.handleDate.bind(this, i)}
                />
            );
        }

        const ListExample =()=> (
            <List style={style.listColor}>
                {Listitem}
            </List>
                );
        return(
                <ListExample />
        )
    };
}


module.exports=ForecastChoosePanel;