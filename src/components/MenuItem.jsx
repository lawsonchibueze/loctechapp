import React from "react";
import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-pink-700">
        <Icon className="text-2xl mx-4 lg:mx-6 sm:hidden" />
        <p className="ml-2 hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
