'use client';

import React, { useCallback, useState } from 'react'
import MenuItem from './MenuItem'
import { AiOutlineMenu } from "react-icons/ai";
// import { FaRegCircleUser } from "react-icons/fa6";
import Avatar from '../Avatar';
import useRegisterModal from '@/app/hooks/useRegisterModal';

function UserMenu() {
  const registerModal = useRegisterModal()
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          NB your home
        </div>
        <div
          onClick={toggleOpen}
          className="
            p-4
            md:py-2
            md:px-2
            border-[1px] 
            border-neutral-200 
            flex 
            flex-row 
            items-center 
            gap-3 
            rounded-full 
            cursor-pointer 
            hover:shadow-md 
            transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {/* <FaRegCircleUser size={22} /> */}
            <Avatar src="" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem 
                label="Login"
                onClick={() => console.log('k')}
              />
              <MenuItem 
                label="Sign up" 
                onClick={registerModal.onOpen}
              />
            </>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu