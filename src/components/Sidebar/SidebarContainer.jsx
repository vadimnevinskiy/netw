import React from "react";
import Sidebar from "./Sidebar";
import {compose} from "redux";
import {connect} from "react-redux";
import {getMenu} from "../../redux/sidebar-reducer";
import {getMenuFromSelector} from "../../redux/sidebar-selector";

class SidebarContainer extends React.Component {
    componentDidMount() {
        this.props.getMenu();
    }

    render() {
        return (
            <Sidebar {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        menu: getMenuFromSelector(state)
    }
}

export default compose(
    connect(mapStateToProps,{
        getMenu: getMenu
    })
)(SidebarContainer);
