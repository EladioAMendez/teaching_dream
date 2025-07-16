/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Button } from "./ui/button";
import { LogOut, User, CreditCard } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import apiClient from "@/libs/api";

// A button to show user some account actions
//  1. Billing: open a Stripe Customer Portal to manage their billing (cancel subscription, update payment method, etc.).
//     You have to manually activate the Customer Portal in your Stripe Dashboard (https://dashboard.stripe.com/test/settings/billing/portal)
//     This is only available if the customer has a customerId (they made a purchase previously)
//  2. Logout: sign out and go back to homepage
// See more at https://shipfa.st/docs/components/buttonAccount
const ButtonAccount = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };
  const handleBilling = async () => {
    setIsLoading(true);

    try {
      const { url }: { url: string } = await apiClient.post(
        "/stripe/create-portal",
        {
          returnUrl: window.location.href,
        }
      );

      window.location.href = url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  // Don't show anything if not authenticated (we don't have any info about the user)
  if (status === "unauthenticated") return null;

  return (
    <Popover className="relative z-10">
      <Popover.Button as={Button} variant="outline">
        <User className="w-5 h-5 mr-2" />
        <span>{session?.user?.name || "Account"}</span>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-2">
            <div className="px-4 py-2">
              <p className="text-sm font-medium text-gray-900 truncate">
                {session?.user?.name}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {session?.user?.email}
              </p>
            </div>
            <div className="my-1 h-px bg-gray-200" />
            <button
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
              onClick={handleBilling}
            >
              <CreditCard className="w-5 h-5 mr-3" />
              Billing
            </button>
            <button
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 rounded-md hover:bg-red-50"
              onClick={handleSignOut}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ButtonAccount;
