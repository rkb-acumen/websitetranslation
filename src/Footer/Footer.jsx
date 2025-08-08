"use client";
import React, { useContext, useEffect, useState } from 'react';
import "./Footer.css";
import Image from 'next/image';
import Link from 'next/link';
import ServicesDrop from './ServicesDrop';
import { LanguageContext } from '@/context/LanguageContext';
import { translateText } from '@/utils/serverTranslate';

const Footer = () => {
    const { language } = useContext(LanguageContext);
    const [translated, setTranslated] = useState({
        transformWithCloud: "Transform with Cloud",
        getInTouch: "Get in touch",
        newsletter: "Discover what we are up-to next. Subscribe To Our Newsletter.",
        subscribe: "Subscribe",
        whoWeAre: "Who we are",
        resources: "Resources",
        contact: "Contact",
        connect: "Connect",
        services: "Services",
        legal: "Legal",
        cookiePolicy: "Cookie Policy",
        privacyPolicy: "Privacy Policy",
        termsOfUse: "Terms of Use",
        accessibilityPolicy: "Accessibility Policy",
        copyRight: "© 2024 Acumen Velocity. All rights reserved.",
        emailPlaceholder: "Email",
    });

    useEffect(() => {
        const loadTranslations = async () => {
            const texts = [
                "Transform with Cloud",
                "Get in touch",
                "Discover what we are up-to next. Subscribe To Our Newsletter.",
                "Subscribe",
                "Who we are",
                "Resources",
                "Contact",
                "Connect",
                "Services",
                "Legal",
                "Cookie Policy",
                "Privacy Policy",
                "Terms of Use",
                "Accessibility Policy",
                "© 2024 Acumen Velocity. All rights reserved.",
                "Email"
            ];

            const [
                transformWithCloud,
                getInTouch,
                newsletter,
                subscribe,
                whoWeAre,
                resources,
                contact,
                connect,
                services,
                legal,
                cookiePolicy,
                privacyPolicy,
                termsOfUse,
                accessibilityPolicy,
                copyRight,
                emailPlaceholder,
            ] = await translateText(texts, language);

            setTranslated({
                transformWithCloud,
                getInTouch,
                newsletter,
                subscribe,
                whoWeAre,
                resources,
                contact,
                connect,
                services,
                legal,
                cookiePolicy,
                privacyPolicy,
                termsOfUse,
                accessibilityPolicy,
                copyRight,
                emailPlaceholder,
            });
        };

        loadTranslations();
    }, [language]);

    return (
        <div className='footer'>
            <div className='footer-inner-div '>
                <div className='footer-form-main bg-white'>
                    <h4 className='font-40-left'>{translated.transformWithCloud}</h4>
                    <div className='custom-row custom-foot-row1'>
                        <div className='custom-col-6'>
                            <Link href={"/contact"}>
                                <button className='foot-button'>
                                    {translated.getInTouch}
                                </button>
                            </Link>
                        </div>
                        <div className='custom-col-6'>
                            <div className='footer-form-div'>
                                <p className='foot-form-title'>{translated.newsletter}</p>
                                <form className='foot_form'>
                                    <input className='footemail' placeholder={translated.emailPlaceholder} />
                                    <button className='footsubmitbtn' type="submit">{translated.subscribe}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer_menu_bg_blur'>
                    <div className='footmenu_div'>
                        <ul className='footmenu_list'>
                            <li><Link href="/about-us">{translated.whoWeAre}</Link></li>
                            <li><Link href="/blog">{translated.resources}</Link></li>
                            <li><Link href="/contact">{translated.contact}</Link></li>
                        </ul>
                        <ul className='footsocial-list'>
                            <li><Link href="https://www.youtube.com/@mohangupta3078" target="_blank"><Image width={40} height={40} src="/Footer/F-youtube-icon.svg" alt="YouTube" /></Link></li>
                            <li><Link href="https://www.linkedin.com/company/acumen-velocity-google-cloud-partner/" target="_blank"><Image width={40} height={40} src="/Footer/F-linked-in.svg" alt="LinkedIn" /></Link></li>
                        </ul>
                    </div>

                    <div className='foot_servicemenu_div'>
                        <div className='custom-row custom-foot-row2'>
                            <div className='custom-footservice-col'>
                                <div className='footer-partners-div'>
                                    <Image className='footer-partner-img' width={500} height={500} src="/Footer/Fpartners-icon.png" alt="Partner" />
                                </div>
                            </div>

                            <div className='custom-footservice-col'>
                                <div>
                                    <p className='foot_sub_title'>{translated.connect}</p>
                                    <p className='foot_address'>2522 Chambers Road, <br />STE# 315, <br />Tustin, CA 92780</p>
                                    <ul className='foot-phone'>
                                        <li><Link href="tel:949-232-2459">949-232-2459</Link></li>
                                    </ul>
                                    <ul className='foot-email text-lowercase'>
                                        <li><a href="mailto:mr@acumenusa.net">MR@ACUMENUSA.NET</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='custom-footservice-col'>
                                <div>
                                    <p className='foot_sub_title'>{translated.services}</p>
                                    <ul className='foot_service_menu_list max-w-[220px]'>
                                        <ServicesDrop />
                                    </ul>
                                </div>
                            </div>

                            <div className='custom-footservice-lastcol'>
                                <div>
                                    <p className='foot_sub_title'>{translated.legal}</p>
                                    <ul className='foot_service_menu_list'>
                                        <li><Link href="/cookie-policy">{translated.cookiePolicy}</Link></li>
                                        <li><Link href="/privacy-policy">{translated.privacyPolicy}</Link></li>
                                        <li><Link href="/termsofuse">{translated.termsOfUse}</Link></li>
                                        <li><Link href="/accessibility-policy">{translated.accessibilityPolicy}</Link></li>
                                    </ul>
                                </div>
                                <div id="google_translate_element"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='foot_copy_write_div'>
                    <center><p className='foot_copy_write'>{translated.copyRight}</p></center>
                </div>
            </div>
        </div>
    );
};

export default Footer;
