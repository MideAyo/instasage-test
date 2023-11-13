import React from 'react';

interface FooterLinkProps {
    articleClassName: string;
    headingClassName: string;
    linksClassName: string;
    links: {
        id: number;
        linkTo: string;
        link: string;
    }[];
    Component: React.ComponentType<any>;
    title: string
}

const FooterLinks: React.FC<FooterLinkProps> = (props) => {
    const { articleClassName, headingClassName, linksClassName, Component, links, title } = props;
    return (
        <article className={`${articleClassName}`}>
            <h3 className={`${headingClassName}`}>{title}</h3>
            <div className={`${linksClassName}`}>
                {links.map((each) => {
                    return <Component eachLink={each} key={each.id} />;
                })}
            </div>
        </article>
    );
}

export default FooterLinks;
