import React from "react"
import Header from "@/components/Header"
import Asider from "@/components/Asider"
import Main from "@/components/Main"
import Footer from "@/components/Footer"
import './index.scss'

const Layout = ()=> {
    return (
        <div className="layout-container clearfix">
            <Header className="layout-top"/>
            <div className="layout-middle">
                <Asider className="layout-asider"/>
                <Main className="layout-main"/>
            </div>           
            <Footer  className="layout-footer"/>
        </div>
    )
}

export default Layout