"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { BackgroundRippleEffectDemo } from "./SectionOne";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase"; // Adjust the import path to your firebase.js location

export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Register",
      link: "#register",
    },
    {
      name: "Gallery",
      link: "#gallery",
    },
    {
      name: "About us",
      link: "#about",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setIsMobileMenuOpen(false);
  };

  const getDisplayName = () => {
    return user?.displayName || user?.email?.split('@')[0] || 'User';
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex items-center w-full">
            <NavbarLogo className="flex-shrink-0" />
            <div className="flex-1 flex justify-center">
              <NavItems items={navItems} />
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              {user ? (
                <>
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Hi {getDisplayName()}</span>
                  <NavbarButton variant="secondary" onClick={handleLogout}>
                    Logout
                  </NavbarButton>
                </>
              ) : (
                <>
                  <NavbarButton variant="secondary" href="/login">
                    Login
                  </NavbarButton>
                  <NavbarButton variant="primary" href="/login">
                    Sign up
                  </NavbarButton>
                </>
              )}
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              {user ? (
                <>
                  <div className="text-center py-2">
                    <span className="block text-sm font-medium text-neutral-600 dark:text-neutral-300">
                      Hi {getDisplayName()}
                    </span>
                  </div>
                  <NavbarButton
                    onClick={handleLogout}
                    variant="secondary"
                    className="w-full"
                  >
                    Logout
                  </NavbarButton>
                </>
              ) : (
                <>
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                    href={"/login"}
                  >
                    Login
                  </NavbarButton>
                </>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />
      {/* Navbar */}
    </div>
  );
}

const DummyContent = () => {
  return (
    <div>
      <BackgroundRippleEffectDemo />
    </div>
  );
};