import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ORG_NAME } from '../../lib/constants';
import "bootstrap-icons/font/bootstrap-icons.css";

export default class TopBar extends Component {
  render() {
    return (
      <>
        <div className="h-12 text-accent-1 mt-3 mx-auto flex" style={{ width: '92vw', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className='bg-accent-2 w-10 h-10 flex' style={{ borderRadius: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Link href="/"><i className="bi bi-house-heart-fill text-2xl" style={{ marginTop: '-0.2em' }}></i></Link>
          </span>
          <span className='text-accent-2 text-xl' style={{ fontFamily: 'Roboto' }}>{ORG_NAME}</span>
          <span className='bg-accent-2 w-10 h-10 flex' style={{ borderRadius: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Link href="/"><i className="bi bi-wallet2 text-xl" style={{ marginTop: '-0.2em' }}></i></Link>
          </span>

        </div>
      </>
    );
  }
}
