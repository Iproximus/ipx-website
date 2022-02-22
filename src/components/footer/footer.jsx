import React from 'react';
import FooterIcon from './footer_icons';
import FooterEnd from './footer_end';
import './footer_style.css';
var data = require('./footer_contents.json');
const Footer = () => {
    var obj;
    var footerValues;
    for (var i = 0; i < data.length; i++) {
        obj = data[i];

    }
    footerValues = obj.footerContents.map(function (rows) {
        return (<tr><td>{rows}</td></tr>)
    });
    return (

        <footer className='section'>
            <div className='footer-data'>
                <div>
                    <table cellSpacing={24} cellPadding={10}>
                        <th >{obj.footerHead}</th>
                        <tbody>
                            {footerValues}
                        </tbody>
                    </table>

                </div>
                <div className='vl'></div>
                {data.map((tables) => <div>
                    <table cellSpacing={24} cellPadding={10}>
                        <th >{obj.footerHead}</th>
                        <tbody>
                            {footerValues}
                        </tbody>
                    </table>

                </div>)}

                <div className='row-grid'>
                    <div>
                        <table cellSpacing={24} cellPadding={10}>

                            <th>Customers</th>

                            <tbody>
                                <tr><td>Website Grader</td></tr>
                                <tr><td>Make My personal</td></tr>

                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table cellSpacing={24} cellPadding={10}>

                            <th>Partners</th>

                            <tbody>

                                <tr><td>Email Signature Generator</td></tr>
                                <tr><td>Sales Email Automation</td></tr>
                                <tr><td>Ads Software</td></tr>

                            </tbody>
                        </table>
                    </div>


                </div>
            </div>

            <FooterIcon />
            <FooterEnd />
        </footer>
    )
}

export default Footer