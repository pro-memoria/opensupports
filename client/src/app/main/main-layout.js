import React              from 'react';

import API                from 'lib-app/api-call';
import i18n from 'lib-app/i18n';
import Header from 'core-components/header';
import {Link} from 'react-router';
import sessionStore from 'lib-app/session-store';

/* import MainHeader         from 'app/main/main-layout-header';
import MainFooter         from 'app/main/main-layout-footer';
 */

class MainLayout extends React.Component {

    render() {
        if (sessionStore.isLoggedIn() || this.props.location.pathname=='/signup') {
            return (
                <div className="main-layout">
                    {/* <MainHeader /> */}
                    <div className="main-row intro-logo"><Link  to={'/'}><img src={API.getURL() + '/images/logo.png'}/></Link></div>
                    <div className="main-layout--content row">
                        {this.props.children}
                    </div>
                    {/* <MainFooter /> */}
                </div>
            );
        } else {
            return (
                <div className="main-layout">
                    {}
                    {/* <MainHeader /> */}
                    <div className="main-row intro-logo"><Link  to={'/'}><img src={API.getURL() + '/images/logo.png'}/></Link></div>
                    <div className="main-home-page-portal__title">
                        <Header title={i18n('SUPPORT_CENTER_DESCRIPTION')} description={i18n('SUPPORT_CENTER_DESCRIPTION2')} />
                    </div> 
                    <div className="main-layout--content row">
                        {this.props.children}
                    </div>
                    {/* <MainFooter /> */}
                </div>
            );            
        }
    }
}

export default MainLayout;
