/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
    images: {
        domains: ["payoues.com"],
    },
    };


export default withPlaiceholder(nextConfig);
