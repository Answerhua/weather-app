import React from 'react';
import {FlatButton, IconButton, RaisedButton} from 'material-ui';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {Dialog,TextField} from 'material-ui'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Quit from 'material-ui/svg-icons/action/power-settings-new';
import Search from 'material-ui/svg-icons/action/search'


class ForecastController extends React.Component {
    state = {
        aboutOpen:false,
        tipsOpen:false
    };

    openAboutDialog = () =>{
        this.setState({aboutOpen:true})
    };

    closeAboutDialog = () =>{
        this.setState({aboutOpen:false})
    };

    openTipsDialog = () =>{
        this.setState({tipsOpen:true})
    };

    closeTipsDialog = () =>{
        this.setState({tipsOpen:false})
    };

    getToday = () =>{
        return new Date();
    };

    render() {
        let today=this.getToday();

        let styles={
            toolBar:{
                background: '#faf0e6'
            },
            submitButton:{
                margin: 12
            },
            forecastController:{
                color:'#87cefa'
            }
        };
        let aboutAction = [
            <FlatButton
                label="关闭"
                primary={true}
                onClick={this.closeAboutDialog}
            />
        ];
        let tipsAction = [
            <FlatButton
                label="关闭"
                primary={true}
                onClick={this.closeTipsDialog}
            />
        ];
        return(
                <Toolbar style={styles.toolBar}>
                    <ToolbarGroup firstChild={true}>
                        <p style={styles.forecastController}> {today.getFullYear()}年{today.getMonth()+1}月{today.getDate()}日</p>
                        &emsp;&emsp;&emsp;
                        <TextField
                            type="text"
                            hintText={this.props.city}
                            floatingLabelText="城市名称:"
                            onChange={this.props.handleText}
                        />
                        <RaisedButton
                            label="提交"
                            style={styles.submitButton}
                            backgroundColor="#DAF7A6"
                            labelColor="#a9a9a9"
                            onClick={this.props.handleSubmit}
                        />
                        <IconButton tooltip='使用地图功能'>
                            <Search color={styles.forecastController.color}/>
                        </IconButton>

                        <IconButton onClick={this.quitApp} tooltip='退出天气预报'>
                            <Quit color={styles.forecastController.color}/>
                        </IconButton>
                    </ToolbarGroup>
                    <ToolbarGroup lastChild={true}>
                        <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon color={styles.forecastController.color}/></IconButton>}
                            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        >
                            <MenuItem primaryText='关于' onClick={this.openAboutDialog}/>
                            <MenuItem primaryText='贴士' onClick={this.openTipsDialog}/>
                        </IconMenu>
                        <Dialog
                            title="天气预报app_简介"
                            actions={aboutAction}
                            open={this.state.aboutOpen}
                            >
                            <p>天气预报app</p>
                            <p>可以准确获取最近几天的天气情况</p>
                            <p>提前为天气的转变做好准备</p>
                            <p>欢迎使用这款天气预报app</p>
                        </Dialog>
                        <Dialog
                            title="小贴士"
                            actions={tipsAction}
                            open={this.state.tipsOpen}
                            >
                            <p>天气时常多变</p>
                            <p>为了生活的健康，舒适</p>
                            <p>要时刻注意天气的变化哦</p>
                        </Dialog>
                    </ToolbarGroup>
                </Toolbar>
        );
    }
}

module.exports=ForecastController;