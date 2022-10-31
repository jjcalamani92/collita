'use client';

import { Fragment, useMemo } from 'react'
import PageHeading from '../../../../components/PageHeading';
import { use } from 'react';
import { findSitesFood, useSitesFood } from '../../../../src/hooks';
import { Sites } from '../../../../components/grid';



export default function Page() {
  
  const {data: sitesFood} = useSitesFood(use(findSitesFood()))
  
  
  const listFood = useMemo(() => sitesFood,
  [sitesFood])


  return (

    <Fragment>
      <PageHeading />
      <Sites sites={listFood} />
    </Fragment>
  )
}
