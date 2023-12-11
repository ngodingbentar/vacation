'use client';

import React, { useCallback, useState } from 'react'
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from './MenuItem'
import Avatar from '../Avatar';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useSignInModal from '@/app/hooks/useSignInModel';
import { SafeUser } from '@/app/types';
import useRentModal from '@/app/hooks/useRentModel';

interface NavbarProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<NavbarProps> = ({currentUser}) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  // Modal
  const registerModal = useRegisterModal()
  const signInModal = useSignInModal()
  const rentModal = useRentModal()

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return signInModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, rentModal, signInModal]);

  const toggleSelect = useCallback((target: string) => {
    router.push(target)
    setIsOpen(false);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
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
            <Avatar src={currentUser?.image} />
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
            {currentUser ? (
              <>
                <MenuItem 
                  label="Account"
                  onClick={() => toggleSelect('/account')}
                />
                <MenuItem 
                  label="My trips"
                  onClick={() => toggleSelect('/trips')}
                />
                <MenuItem 
                  label="My favorites"
                  onClick={() => toggleSelect('/favorites')}
                />
                <MenuItem 
                  label="My reservations"
                  onClick={() => toggleSelect('/reservations')}
                />
                <MenuItem 
                  label="My properties"
                  onClick={() => toggleSelect('/properties')}
                />
                <MenuItem 
                  label="NB your home" 
                  onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Login" 
                  onClick={signInModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu