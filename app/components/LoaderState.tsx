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
            overlay
            justify-center 
            items-center 
            flex 
            overflow-x-hidden 
            overflow-y-auto 
            fixed 
            inset-0 
            z-50 
            outline-none 
            focus:outline-none
            bg-neutral-800/70
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