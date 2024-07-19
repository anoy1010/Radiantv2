'use client';

import { useCallback, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'; // Optional
import { useRouter } from "next/navigation";

export default function TransitionLinks({ children, href = '/', ...props }) {
  const router = useRouter();

  const handleTransition = useCallback(
    async (e) => {
      e.preventDefault();
      const body = document.querySelector("body");
      body?.classList.add("page-transition");

      await router.push(href); // Wait for navigation to complete

      // Delay removal of the class to allow for the transition effect
      setTimeout(() => {
        body?.classList.remove("page-transition");
      }, 500); // Adjust the delay (500ms) based on your transition duration
    },
    [href, router]
  );

  return (
    href && typeof href === 'string' ? (
      <Link href={href} {...props} onClick={handleTransition}>
        {children}
      </Link>
    ) : (
      <span>{children}</span>
    )
  );
}
