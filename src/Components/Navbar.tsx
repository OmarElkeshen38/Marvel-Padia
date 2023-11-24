'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const Navbar: FC = () => {

  const router = useRouter();

  const handelSearch = (e) => {
    if (e.target.value === '') {
      router.push(`/`);
    }
    else {
      router.push(`/search?query=${e.target.value}`);
    }
  }

    return (
      <header>
        <div className="navbar bg-base-100 container">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              Marvel Padia
            </Link>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search for Character"
                className="input input-bordered w-24 md:w-auto"
                onKeyUp={handelSearch}
              />
            </div>
          </div>
        </div>
      </header>
    );
}

export default Navbar