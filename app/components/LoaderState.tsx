'use client';

import { useSelector } from 'react-redux'
import { PuffLoader } from "react-spinners";
import { IStore } from '../types';

const Loader = () => {
  const loading = useSelector((state: IStore) => state.main.loading)

  return (
    <>
      {loading && (
        <div
          className="
            h-screen
            w-screen
            absolute
            justify-center 
            items-center
            bg-black/20
            z-50
          "
        >
          <div className="flex justify-center items-center h-screen">
            <PuffLoader
              size={100}
              color="blue"
            />
          </div>
        </div>
      )} 
    </>
   );
}
 
export default Loader;