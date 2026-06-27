"use client";

import Link from "next/link";

import { useState } from "react";

import {
  Heart,
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  LogOut,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

import { useWishlist } from "@/context/WishlistContext";

import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const { cart } = useCart();

  const { wishlist } = useWishlist();

  const { user, logout } = useAuth();

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,

    0,
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex justify-between items-center">
          {/* LOGO */}

          <Link href="/">
            <img src="../logo.png" alt="Evancara" height={"40"} width="100" />
            {/* <h1 className="text-3xl font-bold text-blue-600">EyeStore</h1> */}
          </Link>

          {/* DESKTOP MENU */}

          <div className="hidden md:flex gap-10 font-medium text-slate-700">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link href="/products" className="hover:text-blue-600">
              Shop
            </Link>

            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>

            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-6">
            {/* SEARCH */}

            <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-5 py-3">
              <Search size={18} className="text-slate-500" />

              <input
                type="text"
                placeholder="Search eyewear"
                className="bg-transparent outline-none ml-3 w-48"
              />
            </div>

            {/* WISHLIST */}

            <Link href="/wishlist" className="relative hover:text-blue-600">
              <Heart size={22} />

              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* CART */}

            <Link href="/cart" className="relative hover:text-blue-600">
              <ShoppingCart size={22} />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* USER */}

            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex justify-center items-center font-bold">
                    {user.displayName?.charAt(0).toUpperCase() || "U"}
                  </div>
                </button>

                {/* DROPDOWN */}

                <div className="absolute right-0 top-14 w-60 bg-white rounded-3xl shadow-xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300">
                  <h4 className="font-bold text-lg">
                    {user.displayName || "User"}
                  </h4>

                  <p className="text-sm text-slate-500 mt-1">{user.email}</p>

                  <hr className="my-5" />

                  <div className="space-y-4">
                    <Link href="/profile" className="block hover:text-blue-600">
                      My Profile
                    </Link>

                    <Link
                      href="/wishlist"
                      className="block hover:text-blue-600"
                    >
                      Wishlist
                    </Link>

                    <Link href="/orders" className="block hover:text-blue-600">
                      Orders
                    </Link>

                    <button
                      onClick={logout}
                      className="flex items-center gap-2 text-red-500"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
              >
                Login
              </Link>
            )}

            {/* MOBILE MENU */}

            <button
              className="md:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE */}

      {mobileMenu && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-6 gap-5">
            <Link href="/">Home</Link>

            <Link href="/products">Shop</Link>

            <Link href="/about">About</Link>

            <Link href="/contact">Contact</Link>

            {!user && (
              <Link
                href="/login"
                className="bg-blue-600 text-white text-center py-3 rounded-xl"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// "use client";

// import Link from "next/link";
// import { useState } from "react";

// import {
//   Heart,
//   Search,
//   ShoppingCart,
//   User,
//   Menu,
//   X,
//   LogOut,
// } from "lucide-react";

// import { useCart } from "@/context/CartContext";
// import { useWishlist } from "@/context/WishlistContext";
// import { useAuth } from "@/context/AuthContext";

// const Navbar = () => {
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const { cart } = useCart();

//   const { wishlist } = useWishlist();

//   const { user, logout } = useAuth();

//   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

//   return (
//     <nav className="sticky top-4 z-50 px-4">
//       <div
//         className="
//         max-w-7xl
//         mx-auto

//         bg-white/20
//         backdrop-blur-2xl

//         border
//         border-white/30

//         shadow-[0_8px_32px_rgba(31,38,135,0.15)]

//         rounded-full

//         relative

//         overflow-hidden
//       "
//       >
//         {/* Glossy Reflection */}

//         <div
//           className="
//           absolute
//           inset-0

//           bg-gradient-to-r

//           from-white/40
//           via-white/10
//           to-transparent

//           pointer-events-none
//         "
//         />

//         {/* Shine Effect */}

//         <div
//           className="
//           absolute

//           -top-20
//           left-0

//           w-full
//           h-40

//           bg-gradient-to-r

//           from-transparent
//           via-white/40
//           to-transparent

//           rotate-6

//           blur-3xl

//           pointer-events-none
//         "
//         />

//         <div className="h-20 px-8 flex justify-between items-center relative z-10">
//           {/* LOGO */}

//           <Link href="/">
//             <h1
//               className="
//               text-3xl
//               font-extrabold

//               bg-gradient-to-r

//               from-blue-600
//               via-cyan-500
//               to-blue-700

//               bg-clip-text

//               text-transparent
//             "
//             >
//               EyeStore
//             </h1>
//           </Link>

//           {/* DESKTOP MENU */}

//           <div className="hidden md:flex gap-10 font-semibold">
//             <Link href="/" className="hover:text-blue-600 duration-300">
//               Home
//             </Link>

//             <Link href="/products" className="hover:text-blue-600 duration-300">
//               Shop
//             </Link>

//             <Link href="/about" className="hover:text-blue-600 duration-300">
//               About
//             </Link>

//             <Link href="/contact" className="hover:text-blue-600 duration-300">
//               Contact
//             </Link>
//           </div>

//           {/* RIGHT */}

//           <div className="flex items-center gap-4">
//             {/* SEARCH */}

//             <div
//               className="
//               hidden
//               lg:flex

//               items-center

//               bg-white/30
//               backdrop-blur-md

//               border
//               border-white/30

//               rounded-full

//               px-5
//               py-3

//               shadow-md
//             "
//             >
//               <Search size={18} className="text-slate-500" />

//               <input
//                 type="text"
//                 placeholder="Search eyewear"
//                 className="
//                 bg-transparent

//                 outline-none

//                 ml-3

//                 w-44

//                 placeholder:text-slate-500
//               "
//               />
//             </div>

//             {/* WISHLIST */}

//             <Link
//               href="/wishlist"
//               className="
//               relative

//               w-11
//               h-11

//               rounded-full

//               bg-white/30
//               backdrop-blur-md

//               border
//               border-white/30

//               shadow-md

//               hover:scale-110

//               hover:bg-white/50

//               duration-300

//               flex

//               justify-center

//               items-center
//             "
//             >
//               <Heart size={20} />

//               {wishlist.length > 0 && (
//                 <span
//                   className="
//                   absolute

//                   -top-1
//                   -right-1

//                   bg-red-500

//                   text-white

//                   text-xs

//                   w-5
//                   h-5

//                   rounded-full

//                   flex

//                   items-center

//                   justify-center
//                 "
//                 >
//                   {wishlist.length}
//                 </span>
//               )}
//             </Link>

//             {/* CART */}

//             <Link
//               href="/cart"
//               className="
//               relative

//               w-11
//               h-11

//               rounded-full

//               bg-white/30
//               backdrop-blur-md

//               border
//               border-white/30

//               shadow-md

//               hover:scale-110

//               hover:bg-white/50

//               duration-300

//               flex

//               justify-center

//               items-center
//             "
//             >
//               <ShoppingCart size={20} />

//               {totalItems > 0 && (
//                 <span
//                   className="
//                   absolute

//                   -top-1
//                   -right-1

//                   bg-blue-600

//                   text-white

//                   text-xs

//                   w-5
//                   h-5

//                   rounded-full

//                   flex

//                   items-center

//                   justify-center
//                 "
//                 >
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             {/* USER */}

//             {user ? (
//               <div className="relative group">
//                 <button>
//                   <div
//                     className="
//                     w-11
//                     h-11

//                     rounded-full

//                     bg-gradient-to-br

//                     from-blue-500
//                     to-cyan-400

//                     text-white

//                     shadow-lg

//                     flex

//                     justify-center

//                     items-center

//                     font-bold
//                   "
//                   >
//                     {user.displayName?.charAt(0).toUpperCase() || "U"}
//                   </div>
//                 </button>

//                 {/* DROPDOWN */}

//                 <div
//                   className="
//                   absolute

//                   right-0

//                   top-16

//                   w-64

//                   bg-white/30

//                   backdrop-blur-2xl

//                   border

//                   border-white/30

//                   rounded-[28px]

//                   shadow-[0_8px_32px_rgba(31,38,135,0.15)]

//                   p-6

//                   opacity-0

//                   invisible

//                   group-hover:opacity-100

//                   group-hover:visible

//                   duration-300
//                 "
//                 >
//                   <h4 className="font-bold text-lg">
//                     {user.displayName || "User"}
//                   </h4>

//                   <p className="text-sm text-slate-600 mt-1">{user.email}</p>

//                   <hr className="my-5 border-white/30" />

//                   <div className="space-y-4">
//                     <Link href="/profile" className="block hover:text-blue-600">
//                       My Profile
//                     </Link>

//                     <Link
//                       href="/wishlist"
//                       className="block hover:text-blue-600"
//                     >
//                       Wishlist
//                     </Link>

//                     <Link href="/orders" className="block hover:text-blue-600">
//                       Orders
//                     </Link>

//                     <button
//                       onClick={logout}
//                       className="
//                       flex

//                       items-center

//                       gap-2

//                       text-red-500

//                       hover:text-red-600
//                     "
//                     >
//                       <LogOut size={18} />
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <Link
//                 href="/login"
//                 className="
//                 hidden
//                 md:block

//                 px-6
//                 py-3

//                 rounded-full

//                 bg-blue-600

//                 hover:bg-blue-700

//                 text-white

//                 duration-300
//               "
//               >
//                 Login
//               </Link>
//             )}

//             {/* MOBILE */}

//             <button
//               className="md:hidden"
//               onClick={() => setMobileMenu(!mobileMenu)}
//             >
//               {mobileMenu ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU */}

//       {mobileMenu && (
//         <div
//           className="
//           md:hidden

//           mt-4

//           mx-4

//           bg-white/20

//           backdrop-blur-2xl

//           border

//           border-white/30

//           rounded-[30px]

//           shadow-xl

//           overflow-hidden
//         "
//         >
//           <div className="flex flex-col gap-5 p-6">
//             <Link href="/">Home</Link>

//             <Link href="/products">Shop</Link>

//             <Link href="/about">About</Link>

//             <Link href="/contact">Contact</Link>

//             {!user && (
//               <Link
//                 href="/login"
//                 className="
//                 text-center

//                 bg-blue-600

//                 text-white

//                 py-3

//                 rounded-xl
//               "
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
