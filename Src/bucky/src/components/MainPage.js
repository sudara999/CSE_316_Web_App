import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import $ from 'jquery';
import mainStyles from './MainPage.module.css';
import cx from 'classnames';
class MainPage extends Component {
    componentDidMount() {
        
    }

    state = {
        isActive: true,
    }

    render() {
        console.log(this.state.isActive)
        return (
            <div>
                <div className={mainStyles["wrapper"]}>
                    <Map
                        google={this.props.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={{ lat: 47.444, lng: -122.176 }}
                    />
                    <nav id={mainStyles["sidebar"]} className={this.state.isActive ? mainStyles["active"] : mainStyles["inactive"]}>
                        <div className={mainStyles["sidebar-header"]}>
                            <h3>Bucky</h3>
                        </div>

                        <ul className={cx(mainStyles["list-unstyled"], mainStyles["components"])}>
                            <p>Dummy Heading</p>
                            <li className={mainStyles["active"]}>
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className={cx(mainStyles.l, mainStyles["dropdown-toggle"])}>Home</a>
                                <ul className={cx(mainStyles.collapse, mainStyles["list-unstyled"])} id="homeSubmenu">
                                    <li>
                                        <a className={mainStyles.l} href="#">Dummy Div 1</a>
                                    </li>
                                    <li>
                                        <a className={mainStyles.l} href="#">Dummy Div 2</a>
                                    </li>
                                    <li>
                                        <a className={mainStyles.l} href="#">Dummy Div 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className={mainStyles.l} href="#">Description</a>
                            </li>
                            <li>
                                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className={cx(mainStyles.l, mainStyles["dropdown-toggle"])}>Pages</a>
                                <ul className={cx(mainStyles.collapse, mainStyles["list-unstyled"])} id="pageSubmenu">
                                    <li>
                                        <a className={mainStyles.l} href="#">Possibly more stuff</a>
                                    </li>
                                    <li>
                                        <a className={mainStyles.l} href="#">Possibly even more stuff</a>
                                    </li>
                                    <li>
                                        <a className={mainStyles.l} href="#">Yeap, you got it. More stuff</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className={mainStyles.l} href="#">Saved Places</a>
                            </li>
                            <li>
                                <a className={mainStyles.l} href="#">Your profile</a>
                            </li>
                        </ul>
                    </nav>

                    <div id={mainStyles["content"]}>
                        <nav className={cx(mainStyles.navbar, mainStyles["navbar-expand-lg"], mainStyles["navbar-light"], mainStyles["bg-light"])}>
                            <div className={mainStyles["container-fluid"]}>

                                <button type="button" id={mainStyles["sidebarCollapse"]} className={this.state.isActive ? mainStyles["active"] : mainStyles["inactive"]} onClick={() => this.setState({ isActive: !this.state.isActive })}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                            </div>
                        </nav>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStyles = {
    width: '100%',
    height: '100%',
  };

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDOd24noPxchfLSG5lay1dCCZMfJ_2cNv4'
  })(MainPage);