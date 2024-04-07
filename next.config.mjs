/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
    images: {
        domains: ["3asq.org"],
    },
    };


export default withPlaiceholder(nextConfig);
