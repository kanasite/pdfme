import React from 'react';
import clsx from 'clsx';
import styles from './HomepageHeader.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import GitHubButton from 'react-github-btn';
import Link from '@docusaurus/Link';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row" style={{ alignItems: 'center', flexDirection: 'row-reverse' }}>
          <div className="col col--6" style={{ textAlign: 'center' }}>
            <img src="/img/logo.svg" alt="logo" width={300} className={styles.logo} />
          </div>
          <div className="col col--6">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">
              A PDF generator library fully written in TypeScript coming with a React based UI template editor*.
              <br />
              Open source, developed by the community, and completely free to use under the MIT
              license!
            </p>
            <strong>* The generator library and the UI editor can be used separately.</strong>
            <div className="admonition admonition-caution alert alert--warning">
              <div className="admonition-heading">
                <h5>
                  <span className="admonition-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
                      ></path>
                    </svg>
                  </span>
                  caution
                </h5>
              </div>
              <div className="admonition-content">
                <p>
                  pdfme is now in beta version. Please report any issues or suggestions from{' '}
                  <Link to="/help">Help page</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--no-gutters" style={{ alignItems: 'center' }}>
          <div className="col col--3" style={{ marginTop: '1rem' }}>
            <Link className="button button--lg button--success " to="/docs/getting-started">
              Getting Started
            </Link>
          </div>
          <div className="col col--3" style={{ marginTop: '1rem' }}>
            <a
              className="button button--lg button--info "
              href="https://codesandbox.io/embed/github/pdfme/pdfme-playground/tree/main/?module=%2Fsrc%2FDesigner.tsx"
              target={'_blank'}
            >
              Playground
            </a>
          </div>
          <div className="col col--6" style={{ height: 25, marginTop: '1rem' }}>
            <GitHubButton
              href="https://github.com/pdfme/pdfme"
              data-size="large"
              data-show-count={true}
              aria-label="Star pdfme on GitHub"
            >
              Star
            </GitHubButton>
          </div>
        </div>
      </div>
    </header>
  );
}
