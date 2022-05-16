import React from 'react'

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";

import PageErrorMessage from "parts/PageErrorMessage";

import Clients from "parts/Clients";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function NotFound() {
    return (
        <>
            <Header theme="black" />

            <PageErrorMessage />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}
