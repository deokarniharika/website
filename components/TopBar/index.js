import React, { Component } from 'react';
import Link from 'next/link';
import { ORG_NAME } from '../../lib/constants';
import "bootstrap-icons/font/bootstrap-icons.css";

export default class TopBar extends Component {
  render() {
    return (
      <>
        <div className="h-12 text-accent-1 mt-3 mx-auto flex" style={{ width: '92vw', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className='cursor-pointer bg-accent-2 shadow w-10 h-10 flex' style={{ borderRadius: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Link href="/"><i className="bi bi-house-heart-fill text-2xl"></i></Link>
          </span>
          <span className='cursor-pointer text-accent-2 text-sm font-bold text-accent-3 site-title'>{ORG_NAME}</span>
          <span className='cursor-pointer bg-accent-2 shadow w-10 h-10 flex' style={{ borderRadius: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <a href="https://www.buymeacoffee.com/thereisnoearthb" target={'_blank'}><i className="bi bi-wallet2 text-xl"></i></a>
          </span>
        </div>
      </>
    );
  }
}
