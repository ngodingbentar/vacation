'use client'

import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Container from "../components/Container";
import Button from "../components/Button";
import { IUser } from "../types";

const AccountClient = ({ currentUser }: {currentUser: IUser }) => {
  const { name, email, image } = currentUser
  const srcImage = image || '/images/avatar.png'
  return (
    <>
      <Container>
        <div>
          <div className="text-2xl font-bold ">Account</div>
          <div className="md:flex md:flex-row w-full justify-between gap-4 h-full ">
            <div className="w-full p-4 h-full">
              <div className="w-full max-w-xs">
                <div 
                  className="
                    aspect-square
                    relative 
                    overflow-hidden 
                    rounded-2xl
                    bg-white
                    shadow-xl
                  "
                >
                  <div className="h-[60%] flex items-center justify-center">
                    <Image 
                      className="rounded-full" 
                      height="100" 
                      width="100" 
                      alt="Avatar" 
                      src={srcImage}
                    />
                  </div>
                  <div className="flex justify-center text-center">
                    <div>
                      <div className="text-2xl font-bold">
                        {name}
                      </div>
                      <div className="text-sm">
                        {email}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="w-full max-w-xs mt-8">
                <div 
                  className="
                    relative 
                    overflow-hidden 
                    rounded-2xl
                    border-2
                    p-4
                  "
                >
                  <div className="">
                    <div className="text-2xl">
                      {currentUser.name} confirmed information
                    </div>
                    <div className="flex mt-4">
                      <div className="flex justify-center items-center">
                        {currentUser.email ? (
                          <FaCheck />
                        ) : (
                          <IoMdClose />
                        )} 
                      </div>
                      <div className="ml-2">
                        Email address
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gray-400 my-8" />
                  <div>
                    <div className="text-2xl">
                      Verify your identity
                    </div>
                    <div className="mt-4">
                      <div>
                        Before you book or Host on Airbnb, you’ll need to complete this step.
                      </div>
                      <div className="mt-8">
                        <Button
                          disabled={false}
                          label="Get verified" 
                          onClick={() => {}}
                          outline={true}
                          width="w-40"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center p-4 ">
              <div className="max-w-sm border-t-2 md:border-none">
                <div className="text-2xl mt-4 md:mt-0">It is time to create your profile</div>
                <div className="my-4">Your Airbnb profile is an important part of every reservation. Create yours to help other Hosts and guests get to know you.</div>
                <Button
                  disabled={false}
                  label="Get verified" 
                  onClick={() => {}}
                  width="w-40"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AccountClient