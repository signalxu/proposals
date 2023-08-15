'use client';

import * as React from 'react';
import Status from './status';
import { IpfsIcon,SnapshotIcon,ArrowIcon } from './icons';
import Link from 'next/link';

interface ProposalCard {
    title: string;
    description: string;
    status: number;
    ipfshash: string;
    snapshotlink: string;
    url: string;
}

export const ProposalCard = (params: ProposalCard) => {
    return ( 
      <div className='max-w-3xl mx-auto'>
        <div className='block p-6 bg-white rounded-xl'>
          <div className='mb-4 flex justify-center items-center space-x-2'>
            <Status status={params.status}/>
            <div className='grow'>
            </div>
          </div>
          <Link href={params.url}>
            <div className='relative break-words leading-7'>
              <h3 className='inline text-3xl font-bold'>
                {params.title}
              </h3>
            </div>
            <p className='mt-3 line-clamp-2 break-words text-lg text-[#8A939C] leading-relaxed'>
              {params.description}
            </p>
          </Link>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            { params.ipfshash && <Link href=''>
              <div className='flex items-center space-x-4 bg-[#E9EAEE]/30 p-2 rounded-md'>
                <div className='rounded-full bg-[#E9EAEE] p-1.5'>
                  <IpfsIcon/>
                </div>
                <p className='text-black text-xl'>
                  IPFS
                </p>
                <div className='grow'>
                </div>
                <div className='pr-2'>
                  <ArrowIcon/>
                </div>
              </div>
            </Link>}
            { params.snapshotlink && <Link href=''>
              <div className='flex items-center space-x-4 bg-[#E9EAEE]/30 p-2 rounded-md'>
                <div className='rounded-full bg-[#E9EAEE] p-1.5'>
                  <SnapshotIcon/>
                </div>
                <p className='text-black text-xl'>
                  Snapshot
                </p>
                <div className='grow'>
                </div>
                <div className='pr-2'>
                  <ArrowIcon/>
                </div>
              </div>
            </Link>}
          </div>
        </div>
      </div>
    )

}

export default ProposalCard;