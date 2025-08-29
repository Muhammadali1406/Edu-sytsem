import React from 'react'
import Header from '../../../components/Layout/Header/MainHeader/Header'
import Mcard from '../../../components/Ui/Cards/Mcard'
import Footer from '../../../components/Layout/Footer'
import MainCard from '../../../components/Ui/Cards/MainCard'

function Firstpg() {
    return (
        <>
            <Header />
            <div>
                <Mcard />
                <MainCard/>
            </div>
            <Footer/>
        </>
    )
}

export default Firstpg