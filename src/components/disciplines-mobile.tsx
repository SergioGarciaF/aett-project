import Link from 'next/link';
import React from 'react'

const DisciplinesMobile = () => {
  return (
    <div className='flex flex-col no-underline py-3 items-start gap-1 text-secondary'>
        <Link href={"/disciplinas/mma"} className="hover:underline">MMA</Link>
        <Link href={"/disciplinas/boxeo"} className="hover:underline">Boxeo</Link>
        <Link href={"/disciplinas/muay-thai"} className="hover:underline">Muay thai</Link>
        <Link href={"/disciplinas/yoga"} className="hover:underline">Yoga</Link> 
    </div>
  )
}

export default DisciplinesMobile;
