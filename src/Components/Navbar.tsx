'use clint';

import Link from 'next/link';
import { FC, useState } from 'react';

const Navbar: FC = () => {

  const [querySearch, setQuerySearch] = useState<string>('');

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
                value={querySearch}
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
        </div>
      </header>
    );
}

export default Navbar